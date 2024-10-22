import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const VideosShimmer = () => {
  return (
    <div className="mt-10 ">
      <Skeleton className="h-[0.8rem] w-[6rem] ml-16" />
      <Skeleton className="h-[0.8rem] w-[4rem] ml-16 mt-1" />

      <div className="flex content-center space-x-8 px-14 mt-5 ">
        <Skeleton className="h-[8rem] w-[14rem]" />
        <Skeleton className="h-[8rem] w-[14rem]" />
        <Skeleton className="h-[8rem] w-[14rem]" />
        <Skeleton className="h-[8rem] w-[14rem]" />
        <Skeleton className="h-[8rem] w-[14rem]" />
      </div>
    </div>
  );
};

export default VideosShimmer;
