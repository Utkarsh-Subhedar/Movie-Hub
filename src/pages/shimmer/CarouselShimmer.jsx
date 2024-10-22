import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CarouselShimmer = () => {
  return (
    <div className="mt-10 ">
      <Skeleton className="h-[0.8rem] w-[6rem] ml-16" />
      <Skeleton className="h-[0.8rem] w-[4rem] ml-16 mt-1" />
      <div className="flex content-center space-x-14 px-16 mt-4">
        <Skeleton className="h-[20rem] w-[13rem]" />
        <Skeleton className="h-[20rem] w-[13rem] " />
        <Skeleton className="h-[20rem] w-[13rem] " />
        <Skeleton className="h-[20rem] w-[13rem] " />
        <Skeleton className="h-[20rem] w-[13rem] " />
      </div>
    </div>
  );
};

export default CarouselShimmer;
