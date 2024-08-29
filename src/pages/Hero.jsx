import React, { useEffect, useState } from "react";
import useFetch from "@/components/custom_hook/useFetch";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, err, loading } = useFetch(`/movie/popular`);
  const popMovies = data?.results;
  console.log(popMovies);
  console.log(currentIndex);
  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > popMovies?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(Interval);
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : err ? (
    <div>Error</div>
  ) : (
    <HeroCarousel movieData={popMovies[currentIndex]} />
  );
};

export default Hero;
