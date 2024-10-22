import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const HomeShimmer = () => {
  return (
    <div>
      <Skeleton className="h-[35rem] w-full rounded-xl">
        <div className="pt-[7rem] relative">
          <div className="absolute left-[8rem] top-[14rem]">
            <Skeleton className="h-[2rem] w-[24rem] bg-background" />
            <div className="flex items-center space-x-2 pt-3">
              <Skeleton className="h-[1.5rem] w-[7rem] bg-background mr-20" />
              <Skeleton className="h-[1.5rem] w-[3rem] bg-background" />
              <Skeleton className="h-[1rem] w-[1rem] bg-background" />
            </div>
            <div className="space-y-1 pt-2">
              <Skeleton className="h-[1rem] w-[40rem] bg-background" />
              <Skeleton className="h-[1rem] w-[25rem] bg-background" />
              <Skeleton className="h-[1rem] w-[14rem] bg-background" />
            </div>
            <div className="pt-[0.6rem]">
              <Skeleton className="h-[2rem] w-[4rem] bg-background rounded-3xl " />
            </div>
          </div>
          <Skeleton className="h-[20rem] w-[15rem] bg-background absolute right-12" />
        </div>
      </Skeleton>
    </div>
  );
};

export default HomeShimmer;
