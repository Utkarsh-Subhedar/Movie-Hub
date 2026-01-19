import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
import CarouselShimmer from "../shimmer/CarouselShimmer";
import CustomCard from "../carousel_card/CustomCard";
import Sort from "@/components/Sort";
import InfiniteScroll from "react-infinite-scroll-component";
import ServerErrorPage from "../ServerErrorPage";

const Popular = () => {
  const [sortedData, setSortedData] = useState([]);
  // const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const { data, loading, isError } = useFetch(
    `/movie/popular?language=en-US&page=${page}`,
  );

  // const searchMovie = (e) => {
  //   if (e.key === "Enter" && e.target.value !== "") {
  //     const searchedMovies = sortedData?.filter((movie) =>
  //       movie?.title.toLowerCase().includes(e.target.value),
  //     );
  //     if (searchedMovies.length !== 0) {
  //       setSortedData(searchedMovies);
  //       setNotFound(false);
  //     } else {
  //       setNotFound(true);
  //     }
  //   } else if (e.target.value === "") {
  //     setSortedData(sortedData?.results);
  //     setNotFound(false);
  //   }
  // };

  useEffect(() => {
    if (isError) {
      setError(true);
      return;
    }

    if (data?.results) {
      setSortedData((prev) =>
        page === 1 ? data.results : [...prev, ...data.results],
      );
    }
  }, [data, isError]);

  console.log("sortedData", sortedData);

  const fetchNextData = () => {
    setPage((prev) => prev + 1);
  };

  if (loading)
    return (
      <div className="mt-1">
        <CarouselShimmer />
        <CarouselShimmer />
        <CarouselShimmer />
        <CarouselShimmer />
      </div>
    );

  if (error) {
    return <ServerErrorPage />;
  }

  return (
    <div className="mt-7 pb-7">
      {/* header section */}
      <div className="flex flex-col md:flex-row items-center mb-4 justify-between px-4 md:px-16 gap-4">
        <h1 className="text-xl md:text-2xl font-roboto font-semibold">
          Most Popular
        </h1>

        {/* search + sort section */}
        <div className="flex flex-row items-center justify-around gap-3 md:gap-8 w-full md:w-auto">
          <Sort
            labels={["default", "trending", "AtoZ", "ZtoA"]}
            set={setSortedData}
            data={sortedData?.results || []}
          />
          {/* <input
            placeholder="Search...."
            className="w-full  md:w-[20rem] h-[2.5rem] border bg-background px-4 rounded-full placeholder:text-sm"
            onKeyUp={(e) => searchMovie(e)}
          /> */}
        </div>
      </div>

      <InfiniteScroll
        dataLength={sortedData?.length || 0}
        next={fetchNextData}
        hasMore={page <= 111}
        loader={<CarouselShimmer />}
      >
        <div
          className="grid 
          grid-cols-1 md:grid-cols-3 lg:grid-cols-5 
          gap-4 md:gap-6 
          px-4 md:px-10
          place-content-center"
        >
          {sortedData?.map((movie) => (
            <div key={movie.id}>
              <CustomCard movie={movie} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      {/* movie section */}
      {/* {notFound && (
        <div className="text-center text-2xl md:text-5xl text-red-800 my-16 md:my-32">
          Movie Unavailable
        </div>
      )} */}
    </div>
  );
};

export default Popular;
