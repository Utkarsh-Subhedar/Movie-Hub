import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaPlay } from "react-icons/fa6";
import NoVideo from "../no_image/NoVideo";
import { imageCheck } from "@/components/utils/imageCheck";
import VideoCard from "./VideoCard";

const VideoCorousel = ({ name, videos }) => {
  const [imageExist, setImageExist] = useState(true);
  console.log(videos);
  // useEffect(() => {
  //   videos?.results.forEach((video) => {
  //     imageCheck(video.key, (exist) => {
  //       console.log(exist, video.key);
  //       setImageExist(exist);
  //     });
  //   });
  // }, [videos]);

  return (
    <div className="mt-4 w-full">
      <h1 className="text-2xl font-roboto font-semibold pl-[4.5rem]">{name}</h1>
      {videos?.results?.length > 1 ? (
        <div>
          <div className="w-full flex justify-center items-center mt-2 mb-10">
            <Carousel
              opts={{ loop: true }}
              className="max-w-[75rem] w-full py-1"
            >
              <CarouselContent>
                {videos?.results?.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/4 lg:basis-1/5"
                  >
                    <VideoCard videoDetails={video} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-[4.5rem]" />
              <CarouselNext className="absolute top-[4.5rem]" />
            </Carousel>
          </div>
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
