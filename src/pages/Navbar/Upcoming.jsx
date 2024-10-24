import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
import CarouselShimmer from "../shimmer/CarouselShimmer";
import CustomCard from "../carousel_card/CustomCard";
import Sort from "@/components/Sort";

const Upcoming = () => {
  const { data, loading } = useFetch("/movie/upcoming");
  const [sortedData, setSortedData] = useState();

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
          />{" "}
        </div>
      </div>
      <div className="flex flex-wrap justify-between px-16 gap-y-5">
        {sortedData?.map((movie) => (
          <CustomCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
