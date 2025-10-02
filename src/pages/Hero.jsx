import React, { useEffect, useState } from "react";
import useFetch from "@/components/custom_hook/useFetch";
import HeroCarousel from "./HeroCarousel";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, err, loading } = useFetch(`/movie/popular`);
  const popMovies = data?.results;

  // Cycle through popular movies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= popMovies?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [popMovies]);

  // Loading shimmer
  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-[20rem] sm:h-[30rem] lg:h-[35rem] w-full rounded-xl relative overflow-hidden">
          {/* Overlay content */}
          <div className="pt-16 sm:pt-24 relative">
            <div className="absolute left-4 sm:left-16 top-16 sm:top-32 space-y-2">
              <Skeleton className="h-6 sm:h-8 w-40 sm:w-64 bg-background" />
              <div className="flex items-center space-x-2 pt-3">
                <Skeleton className="h-4 sm:h-6 w-20 sm:w-28 bg-background" />
                <Skeleton className="h-4 sm:h-6 w-12 sm:w-16 bg-background" />
                <Skeleton className="h-3 w-3 bg-background" />
              </div>
              <div className="space-y-1 pt-2">
                <Skeleton className="h-3 w-64 sm:w-96 bg-background" />
                <Skeleton className="h-3 w-40 sm:w-64 bg-background" />
                <Skeleton className="h-3 w-28 sm:w-40 bg-background" />
              </div>
              <div className="pt-2">
                <Skeleton className="h-8 w-16 sm:w-20 bg-background rounded-3xl" />
              </div>
            </div>
            <Skeleton className="h-40 sm:h-60 lg:h-[20rem] w-36 sm:w-56 lg:w-[15rem] bg-background absolute right-4 sm:right-12" />
          </div>
        </Skeleton>
      </div>
    );
  }

  // Error state
  if (err) {
    return (
      <div className="bg-red-500 text-white p-4 rounded w-full text-center">
        {err}
      </div>
    );
  }

  // Actual hero carousel
  return <HeroCarousel movieData={popMovies[currentIndex]} />;
};

export default Hero;
