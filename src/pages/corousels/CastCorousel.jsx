import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NoProfile from "../no_image/NoProfile";

const CastCorousel = ({ name, credits }) => {
  return (
    <div>
      <h1 className="text-2xl font-roboto font-semibold pl-[4.5rem]">{name}</h1>

      <div className="w-full flex justify-center items-center mb-10 mt-4">
        <Carousel className="max-w-[75rem] px-1">
          <CarouselContent>
            {credits?.cast?.map((role, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <div className="rounded-full w-[13rem] h-[13rem] overflow-hidden">
                  {role.profile_path == null ? (
                    <NoProfile />
                  ) : (
                    <img
                      className="object-top w-full h-full object-cover"
                      src={`https://image.tmdb.org/t/p/original${role.profile_path}`}
                    />
                  )}
                </div>
                <div className="w-full mt-2 text-center font-roboto">
                  <h4 className="">{role.name}</h4>
                  <span className="opacity-60">{role.character}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-[8rem]" />
          <CarouselNext className="top-[7rem]" />
        </Carousel>
      </div>
    </div>
  );
};

export default CastCorousel;
