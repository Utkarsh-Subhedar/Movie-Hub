import React from "react";
import CustomCard from "../carousel_card/CustomCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MovieCarousel = ({ name, movie }) => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-roboto font-semibold mb-3 pl-[5rem]">
        {name}
      </h1>
      <div className="w-full flex justify-center mb-10 mt-2">
        <Carousel className="max-w-[75rem] px-2" opts={{ loop: true }}>
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
    </div>
  );
};

export default MovieCarousel;
