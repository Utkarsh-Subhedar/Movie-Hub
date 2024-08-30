import React, { useEffect, useState } from "react";
import useFetch from "@/components/custom_hook/useFetch";
import HeroCarousel from "./HeroCarousel";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, err, loading } = useFetch(`/movie/popular`);
  const popMovies = data?.results;

  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex >= popMovies?.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000);
    return () => clearInterval(Interval);
  }, [popMovies]);

  return loading ? (
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
  ) : err ? (
    <div className="bg-red h-[15rem] w-full rounded ">{err}</div>
  ) : (
    <HeroCarousel movieData={popMovies[currentIndex]} />
  );
};

export default Hero;
