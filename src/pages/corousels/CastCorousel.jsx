import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NoProfile from "../no_image/NoProfile";
import Img from "@/components/lazyLoad/Img";

const CastCorousel = ({ name, credits }) => {
  const cast = credits?.cast || [];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12">
      <h1 className="text-xl sm:text-2xl font-roboto font-semibold mb-4">
        {name}
      </h1>

      {cast.length === 0 ? (
        <div className="text-center text-lg sm:text-2xl md:text-3xl text-red-800 mt-6">
          No credits found
        </div>
      ) : (
        <div className="relative w-full mb-10">
          <Carousel className="w-full relative max-w-[90rem]">
            <CarouselContent className="">
              {cast.map((role, index) => (
                <CarouselItem
                  key={index}
                  className="
                   basis-full md:basis-1/3 lg:basis-1/5 shrink-0 
                  "
                >
                  <div className="flex flex-col items-center">
                    <div className="rounded-full overflow-hidden w-24 h-24 sm:h-28 md:w-32 md:h-32">
                      {role.profile_path == null ? (
                        <NoProfile />
                      ) : (
                        <Img
                          className="object-top w-full h-full object-cover"
                          src={`https://image.tmdb.org/t/p/original${role.profile_path}`}
                        />
                      )}
                    </div>
                    <div className="mt-2 text-center w-full font-roboto">
                      <h4 className="text-sm sm:text-base font-medium truncate">
                        {role.name}
                      </h4>
                      <span className="text-xs sm:text-sm opacity-60 truncate">
                        {role.character}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* nav buttons */}
            <CarouselPrevious className="absolute -left-8 md:-left-10  top-1/3 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute -right-8 md:-right-10 top-1/3 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default CastCorousel;
