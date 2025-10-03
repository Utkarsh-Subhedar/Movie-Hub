import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const HomeShimmer = () => {
  return (
    <div>
      {/* Outer container (hero skeleton) */}
      <Skeleton className="max-w-full h-[20rem] sm:h-[30rem] lg:h-[35rem] rounded-xl relative">
        {/* Inner content wrapper */}
        <div className="absolute top-1/3 left-4 sm:left-16 lg:left-32">
          {/* Title placeholder */}
          <Skeleton className="h-6 sm:h-8 w-48 sm:w-96 lg:w-[24rem] bg-background" />

          {/* Small info row (ratings, etc.) */}
          <div className="flex items-center space-x-2 pt-3">
            <Skeleton className="h-5 w-24 sm:w-28 bg-background" />
            <Skeleton className="h-5 w-12 bg-background" />
            <Skeleton className="h-4 w-4 bg-background" />
          </div>

          {/* Description lines */}
          <div className="space-y-2 pt-2">
            <Skeleton className="h-3 w-64 sm:w-96 lg:w-[40rem] bg-background" />
            <Skeleton className="h-3 w-40 sm:w-64 lg:w-[25rem] bg-background" />
            <Skeleton className="h-3 w-28 sm:w-40 lg:w-[14rem] bg-background" />
          </div>

          {/* Button placeholder */}
          <div className="pt-3">
            <Skeleton className="h-8 w-16 sm:h-10 sm:w-20 bg-background rounded-3xl" />
          </div>
        </div>

        {/* Poster placeholder (floats on right side) */}
        <Skeleton className="hidden sm:block h-40 sm:h-60 lg:h-[20rem] w-28 sm:w-40 lg:w-[15rem] bg-background absolute right-4 sm:right-12 top-36" />
      </Skeleton>
    </div>
  );
};

export default HomeShimmer;
