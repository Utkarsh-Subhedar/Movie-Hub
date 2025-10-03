import { useState, useEffect } from "react";
import useFetch from "@/components/custom_hook/useFetch";
import HeroCarousel from "./HeroCarousel";
import MovieCarousel from "./corousels/MovieCarousel";
import HomeShimmer from "./shimmer/HomeShimmer";
import CarouselShimmer from "./shimmer/CarouselShimmer";
import ServerErrorPage from "./ServerErrorPage";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch movie data
  const popularFetch = useFetch(`/movie/popular`);
  const topRatedFetch = useFetch(`/movie/top_rated`);
  const upcomingFetch = useFetch(`/movie/upcoming`);

  // Combine loading and error states
  const loading =
    popularFetch.loading || topRatedFetch.loading || upcomingFetch.loading;
  const isError =
    popularFetch.isError || topRatedFetch.isError || upcomingFetch.isError;

  // Extract data safely
  const popMovies = popularFetch.data?.results;
  const topRated = topRatedFetch.data?.results;
  const upcoming = upcomingFetch.data?.results;

  // Auto-change hero carousel every 5 seconds
  useEffect(() => {
    if (!popMovies?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= popMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [popMovies]);

  // Show loading shimmer while fetching
  if (loading) {
    return (
      <div>
        <HomeShimmer />
        <div className="mt-6 space-y-6 sm:space-y-8 lg:space-y-10">
          <CarouselShimmer />
          <CarouselShimmer />
          <CarouselShimmer />
        </div>
      </div>
    );
  }

  // Show error if any fetch failed
  if (isError) {
    return <ServerErrorPage />;
  }

  return (
    <>
      <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh] flex items-center justify-start overflow-hidden">
        {popMovies && <HeroCarousel movieData={popMovies[currentIndex]} />}
        <div
          className="absolute top-0 left-0 right-0 h-full z-10 pointer-events-none 
          bg-gradient-to-b 
           from-white/0 via-white/55 to-white
            dark:from-background/0 dark:via-background/70 dark:to-background"
        ></div>
      </div>

      {/* Movie Carousels */}
      <div className="mt-6 sm:mt-8 lg:mt-12 max-w-7xl mx-auto px-3 sm:px-3 lg:px-6 space-y-10">
        {upcoming && (
          <MovieCarousel
            name="Upcoming"
            movie={upcoming}
            gridClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          />
        )}
        {topRated && (
          <MovieCarousel
            name="Top Rated"
            movie={topRated}
            gridClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          />
        )}
        {popMovies && (
          <MovieCarousel
            name="Popular"
            movie={popMovies}
            gridClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          />
        )}
      </div>
    </>
  );
};

export default Home;
