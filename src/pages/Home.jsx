import MovieCarousel from "./corousels/MovieCarousel";
import useFetch from "@/components/custom_hook/useFetch";
import React, { useEffect, useState } from "react";
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
    const Interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex >= popMovies?.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000);
    return () => clearInterval(Interval);
  }, [popMovies]);
  return loading ? (
    <div>
      <HomeShimmer />
      <div className="mt-[10rem]">
        <CarouselShimmer />
        <CarouselShimmer />
        <CarouselShimmer />
      </div>
    </div>
  ) : err ? (
    <div className="bg-red h-full w-full rounded ">{err}</div>
  ) : (
    <>
      <div className="w-full h-full relative">
        <HeroCarousel movieData={popMovies[currentIndex]} />
        <div className="top-[7rem] bg-gradient-to-b from-transparent from-40% dark:via-customLightBackground dark:to-background via-gray-400 to-white  w-full h-full absolute z-10"></div>
      </div>
      <div className="mt-[7rem]">
        <MovieCarousel name={"Upcoming"} movie={upcoming} />
        <MovieCarousel name={"Top Rated"} movie={topRated} />
        <MovieCarousel name={"Popular"} movie={popular} />
      </div>{" "}
    </>
  );
};

export default Home;
