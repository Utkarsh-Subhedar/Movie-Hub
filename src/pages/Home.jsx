import React from "react";
import Hero from "./Hero";
import MovieCarousel from "./corousels/MovieCarousel";
import useFetch from "@/components/custom_hook/useFetch";

const Home = () => {
  const { data: topRated } = useFetch(`/movie/top_rated`);
  const { data: popular } = useFetch(`/movie/popular`);
  const { data: upcoming } = useFetch(`/movie/upcoming`);
  return (
    <div>
      <div className="w-full h-full relative">
        <Hero />
        <div className="top-[7rem] bg-gradient-to-b from-transparent from-40% dark:via-customLightBackground dark:to-background via-gray-300 to-white  w-full h-full absolute z-10"></div>
      </div>
      <div className="mt-[7rem]">
        <MovieCarousel name={"Upcoming"} movie={upcoming} />
        <MovieCarousel name={"Top Rated"} movie={topRated} />
        <MovieCarousel name={"Popular"} movie={popular} />
      </div>
    </div>
  );
};

export default Home;
