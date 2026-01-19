import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CarouselShimmer = ({ arr = 6 }) => {
  return (
    <div className="mt-6 sm:mt-8 lg:mt-10">
      {/* Section title shimmer */}
      <Skeleton className="h-4 w-24 sm:w-32 ml-4 sm:ml-8 lg:ml-16" />
      <Skeleton className="h-3 w-16 sm:w-24 ml-4 sm:ml-8 lg:ml-16 mt-1" />

      {/* Movie cards shimmer grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8 lg:px-16 mt-4">
        {/* Generate 6 placeholders */}
        {[...Array(arr)].map((_, i) => (
          <Skeleton
            key={i}
            className="h-40 sm:h-60 lg:h-[20rem] w-full rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselShimmer;
