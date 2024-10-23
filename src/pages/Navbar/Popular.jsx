import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
import CarouselShimmer from "../shimmer/CarouselShimmer";
import CustomCard from "../carousel_card/CustomCard";

import Sort from "@/components/Sort";

const Popular = () => {
  const { data, loading } = useFetch(`/movie/popular`);
  const [type, setType] = useState();

  const [sortedData, setSortedData] = useState([]);

  console.log(sortedData);

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
    <div className="mt-28 ">
      <div className="flex gap-32 items-center mb-8 justify-between pr-56">
        <h1 className="text-2xl font-roboto font-semibold pl-[4.4rem]">
          Most Popular
        </h1>
        <div className="font-semibold *:font-roboto flex items-center gap-24">
          <Sort
            labels={["Default", "AtoZ", "ZtoA"]}
            set={setSortedData}
            data={data?.results || []}
          />
          <input
            placeholder="Search...."
            className="w-[20rem] h-[2rem] border-2 bg-background p-4 rounded-full placeholder:text-sm"
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap justify-around gap-y-7 px-14">
        {sortedData?.map((movie) => (
          <CustomCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
