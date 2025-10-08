import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoCard from "./VideoCard";

const VideoCorousel = ({ name, videos }) => {
  return (
    <div className="mt-4 w-full">
      <h1 className="text-2xl font-roboto font-semibold pl-0 md:pl-[4.5rem]">
        {name}
      </h1>

      {videos?.results?.length > 0 ? ( // ✅ fix: show even if 1 video
        <div className="w-full  mt-2 mb-10 flex justify-center items-center px-2 md:px-5 lg:px-0">
          <Carousel
            opts={{ loop: true }}
            className="max-w-[75rem] w-full py-1 "
          >
            <CarouselContent>
              {videos?.results?.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/3 lg:basis-1/5 px-0 md:px-10 lg:px-4" // ✅ responsive
                >
                  <VideoCard videoDetails={video} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* ✅ vertically centered buttons */}
            <CarouselPrevious className="absolute top-1/3  -left-14 md:-left-6 lg:-left-11" />
            <CarouselNext className="absolute top-1/3 -right-14 md:-right-6 lg:-right-11" />
          </Carousel>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl text-red-900">No Videos Found</h1>
        </div>
      )}
    </div>
  );
};

export default VideoCorousel;
