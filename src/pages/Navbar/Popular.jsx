import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
import CarouselShimmer from "../shimmer/CarouselShimmer";
import CustomCard from "../carousel_card/CustomCard";
import Sort from "@/components/Sort";
import InfiniteScroll from "react-infinite-scroll-component";
import ServerErrorPage from "../ServerErrorPage";

const Popular = ({ endpoint }) => {
  const [sortedData, setSortedData] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const { data, loading, isError } = useFetch(
    `${endpoint}?language=en-US&page=${page}`,
  );

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
            data={sortedData}
          />
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
          {sortedData?.map((movie, index) => (
            <div key={index}>
              <CustomCard movie={movie} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Popular;
