import React from "react";
import CustomCard from "../carousel_card/CustomCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MovieCarousel = ({ movie }) => {
  return (
    <div className="w-full flex justify-center mb-10 mt-4">
      <Carousel className="max-w-[75rem] px-1" opts={{ loop: true }}>
        <CarouselContent>
          {movie?.results?.map((movie, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
              <CustomCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
