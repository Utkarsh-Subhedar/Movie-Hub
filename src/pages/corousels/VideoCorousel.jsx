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

const VideoCorousel = ({ videos }) => {
  const [imageExist, setImageExist] = useState(true);

  // useEffect(() => {
  //   videos?.results.forEach((video) => {
  //     imageCheck(video.key, (exist) => {
  //       console.log(exist, video.key);
  //       setImageExist(exist);
  //     });
  //   });
  // }, [videos]);

  return (
    <div className="w-full flex justify-center items-center mt-4 mb-10">
      <Carousel opts={{ loop: true }} className="max-w-[75rem] py-1">
        <CarouselContent>
          {videos?.results.map((video, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
              <VideoCard videoDetails={video} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[4.5rem]" />
        <CarouselNext className="absolute top-[4.5rem]" />
      </Carousel>
    </div>
  );
};

export default VideoCorousel;
