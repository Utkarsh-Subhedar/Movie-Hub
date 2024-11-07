import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
import CarouselShimmer from "../shimmer/CarouselShimmer";
import CustomCard from "../carousel_card/CustomCard";

import Sort from "@/components/Sort";
import { useNavigate } from "react-router";

const Popular = () => {
  const { data, loading } = useFetch(`/movie/popular`);
  const navigate = useNavigate();
  const [sortedData, setSortedData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const searchedMovies = sortedData?.filter((movie) =>
        movie?.title.includes(e.target.value)
      );

      if (searchedMovies.length !== 0) {
        setSortedData(searchedMovies);
        setNotFound(false);
      } else if (searchedMovies.length === 0) {
        setNotFound(true);
      }
    }
  };

  useEffect(() => {
    setSortedData(data?.results);
  }, [data]);
  console.log("sorted data popular", sortedData);
  return loading ? (
    <div>
      <CarouselShimmer />
      <CarouselShimmer />
      <CarouselShimmer />
      <CarouselShimmer />
    </div>
  ) : (
    <div className="mt-24">
      <div className="flex items-center mb-4 justify-between px-16">
        <h1 className="text-2xl font-roboto font-semibold">Most Popular</h1>
        <div className="*:font-roboto flex items-center gap-24 pr-16">
          <Sort
            labels={["default", "trending", "AtoZ", "ZtoA"]}
            set={setSortedData}
            data={data?.results || []}
          />
          <input
            placeholder="Search...."
            className="w-[20rem] h-[2rem] border-2 bg-background p-4 rounded-full placeholder:text-sm"
            onKeyDown={(e) => searchMovie(e)}
          />
        </div>
      </div>
      {notFound === true ? (
        <div className="text-center text-5xl text-red-800 space my-32">
          Movie Unavailable
        </div>
      ) : (
        <div className="w-full h-full flex flex-wrap justify-around gap-y-7 px-14">
          {sortedData?.map((movie) => (
            <div>
              <CustomCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Popular;
