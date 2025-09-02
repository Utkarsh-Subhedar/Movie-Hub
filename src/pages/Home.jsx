import MovieCarousel from "./corousels/MovieCarousel";
import useFetch from "@/components/custom_hook/useFetch";
import { useEffect, useState } from "react";
import HeroCarousel from "./HeroCarousel";
import HomeShimmer from "./shimmer/HomeShimmer";
import CarouselShimmer from "./shimmer/CarouselShimmer";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, err, loading } = useFetch(`/movie/popular`);
  const popMovies = data?.results;

  const { data: topRated } = useFetch(`/movie/top_rated`);
  const { data: popular } = useFetch(`/movie/popular`);
  const { data: upcoming } = useFetch(`/movie/upcoming`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= popMovies?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [popMovies]);

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <HomeShimmer />
        <div className="mt-10 space-y-8">
          <CarouselShimmer />
          <CarouselShimmer />
          <CarouselShimmer />
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="bg-red-500 text-white p-4 rounded w-full text-center">
        {err}
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative">
        <HeroCarousel movieData={popMovies[currentIndex]} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400 dark:via-customLightBackground dark:to-background to-white z-10"></div>
      </div>

      {/* Movie Carousels */}
      <div className="mt-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <MovieCarousel name="Upcoming" movie={upcoming} />
        <MovieCarousel name="Top Rated" movie={topRated} />
        <MovieCarousel name="Popular" movie={popular} />
      </div>
    </>
  );
};

export default Home;
