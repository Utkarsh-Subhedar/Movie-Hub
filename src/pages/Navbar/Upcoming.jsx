import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
import CarouselShimmer from "../shimmer/CarouselShimmer";
import CustomCard from "../carousel_card/CustomCard";
import Sort from "@/components/Sort";

const Upcoming = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  const [sortedData, setSortedData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const searchedMovies = sortedData?.filter((movie) =>
        movie?.title.toLowerCase().includes(e.target.value)
      );
      if (searchedMovies.length !== 0) {
        setSortedData(searchedMovies);
        setNotFound(false);
      } else if (searchedMovies.length === 0) {
        setNotFound(true);
      }
    } else if (e.target.value == "") {
      setSortedData(data?.results);
      setNotFound(false);
    }
  };

  useEffect(() => {
    setSortedData(data?.results);
  }, [data]);

  return loading ? (
    <div>
      <CarouselShimmer />
      <CarouselShimmer />
      <CarouselShimmer />
      <CarouselShimmer />
    </div>
  ) : (
    <div className="mt-24">
      <div className="flex justify-between px-16 mb-4">
        <span className="text-xl font-roboto font-semibold">
          Upcoming Movies
        </span>
        <div className="flex gap-14 pr-16 *:font-roboto">
          <Sort
            labels={["default", "trending", "AtoZ", "ZtoA"]}
            data={data?.results}
            set={setSortedData}
          />
          <input
            placeholder="Search...."
            className="w-[20rem] h-[2rem] border-2 bg-background p-4 rounded-full placeholder:text-sm"
            onKeyUp={(e) => searchMovie(e)}
          />{" "}
        </div>
      </div>
      {notFound === true ? (
        <div className="text-center text-5xl text-red-800 space my-32">
          Movie Unavailable
        </div>
      ) : (
        <div className="max-w-full max-h-full grid grid-cols-5 gap-4 px-10  place-content-center">
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

export default Upcoming;
