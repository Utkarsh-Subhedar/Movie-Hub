import React from "react";
import CustomCard from "../carousel_card/CustomCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router";
import { showDetails } from "@/components/utils/showDetails";

const MovieCarousel = ({ name, movie }) => {
  const navigate = useNavigate();
  const showDetails = (id) => {
    navigate(`/Details/${id}`);
    console.log(id);
  };

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-roboto font-semibold mb-3 pl-[5rem]">
        {name}
      </h1>
      <div className="w-full flex justify-center mb-10 mt-2">
        <Carousel className="max-w-[75rem] px-1" opts={{ loop: true }}>
          <CarouselContent>
            {movie?.results?.map((movie, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/4 lg:basis-1/5"
                onClick={() => showDetails(movie.id)}
              >
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
