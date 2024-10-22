import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CastShimmer = () => {
  return (
    <div className="mt-10 ">
      <Skeleton className="h-[0.8rem] w-[6rem] ml-16" />
      <Skeleton className="h-[0.8rem] w-[4rem] ml-16 mt-1" />
      <div className="flex content-center space-x-20 px-24 mt-4 ">
        <Skeleton className="h-[10rem] w-[10rem] rounded-full" />
        <Skeleton className="h-[10rem] w-[10rem] rounded-full" />
        <Skeleton className="h-[10rem] w-[10rem] rounded-full" />
        <Skeleton className="h-[10rem] w-[10rem] rounded-full" />
        <Skeleton className="h-[10rem] w-[10rem] rounded-full" />
      </div>
    </div>
  );
};

export default CastShimmer;
