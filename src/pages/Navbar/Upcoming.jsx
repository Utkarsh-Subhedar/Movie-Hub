import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
import CarouselShimmer from "../shimmer/CarouselShimmer";
import CustomCard from "../carousel_card/CustomCard";
import Sort from "@/components/Sort";
import ServerErrorPage from "../ServerErrorPage";

const Upcoming = () => {
  const { data, loading, isError } = useFetch("/movie/upcoming");
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
      } else {
        setNotFound(true);
      }
    } else if (e.target.value === "") {
      setSortedData(data?.results);
      setNotFound(false);
    }
  };

  useEffect(() => {
    setSortedData(data?.results);
  }, [data]);

  if (loading)
    return (
      <div className="mt-7">
        <CarouselShimmer />
        <CarouselShimmer />
        <CarouselShimmer />
        <CarouselShimmer />
      </div>
    );

  if (isError) {
    return <ServerErrorPage />;
  }

  return (
    <div className="mt-7 pb-7">
      {/* header */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 mb-4 gap-4">
        <span className="text-lg md:text-xl font-roboto font-semibold">
          Upcoming Movies
        </span>

        {/* sort + search */}
        <div className="flex flex-row items-center justify-around gap-3 md:gap-8 w-full md:w-auto">
          <Sort
            labels={["default", "trending", "AtoZ", "ZtoA"]}
            data={data?.results}
            set={setSortedData}
          />
          <input
            placeholder="Search...."
            className="w-[11rem] md:w-[20rem] h-[2.5rem] border bg-background px-4 rounded-full placeholder:text-sm"
            onKeyUp={(e) => searchMovie(e)}
          />
        </div>
      </div>

      {/* movie grid */}
      {notFound ? (
        <div className="text-center text-2xl md:text-5xl text-red-800 my-16 md:my-32">
          Movie Unavailable
        </div>
      ) : (
        <div
          className="
            grid 
            grid-cols-1 md:grid-cols-3 lg:grid-cols-5 
            gap-4 md:gap-6 
            px-4 md:px-10 
            place-content-center
          "
        >
          {sortedData?.map((movie) => (
            <div key={movie.id}>
              <CustomCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
