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
      {/* Title */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-roboto font-semibold mb-3 pl-4 sm:pl-6 md:pl-12">
        {name}
      </h1>

      {/* Carousel Wrapper */}
      <div className="w-full  flex justify-center mb-10 mt-2 px-2 md:px-8">
        <Carousel
          className="w-full relative max-w-[90rem]"
          opts={{ loop: true }}
        >
          <CarouselContent className="!ml-0">
            {" "}
            {/* remove negative margin */}
            {movie?.map((movie, index) => (
              <CarouselItem
                key={index}
                className="
                  basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5
                  shrink-0 px-1 md:px-2
                  flex justify-center
                "
              >
                <CustomCard movie={movie} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className=" top-1/2 -translate-y-1/2 -left-1 sm:left-3 md:-left-9 z-10" />
          <CarouselNext className="top-1/2 -translate-y-1/2 -right-1 sm:right-3 md:-right-9 z-10" />
        </Carousel>
      </div>
    </div>
  );
};

export default MovieCarousel;
