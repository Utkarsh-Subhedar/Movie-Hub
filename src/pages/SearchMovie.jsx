import useFetch from "@/components/custom_hook/useFetch";
import LoadingSpinner from "@/components/lazyLoad/LoadingSpinner";
import React from "react";
import { useParams } from "react-router";
import CustomCard from "./carousel_card/CustomCard";
import CarouselShimmer from "./shimmer/CarouselShimmer";

const SearchMovie = () => {
  const { name } = useParams();
  const { data, err, loading } = useFetch(`/search/movie?query=${name}`);
  return loading ? (
    <div className="mt-1/2 mb-1/2">
      <LoadingSpinner />
    </div>
  ) : err ? (
    <div>Error</div>
  ) : !data ? (
    <div>
      <CarouselShimmer />
      <CarouselShimmer />
      <CarouselShimmer />
      <CarouselShimmer />
    </div>
  ) : (
    <div className="mt-[6rem] space-y-2">
      <span className="text-2xl font-roboto font-semibold pl-16">
        Searched results
      </span>

      {data?.total_results === 0 ? (
        <div className="text-6xl font-roboto font-medium flex justify-center py-32">
          No movies Found
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center px-6 w-full h-full gap-4 pb-7">
          {data?.results?.map((movie) => (
            <CustomCard movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
