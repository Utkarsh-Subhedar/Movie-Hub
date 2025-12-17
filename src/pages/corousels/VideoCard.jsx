import React, { useState } from "react";
import NoVideo from "../no_image/NoVideo";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlay } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Img from "@/components/lazyLoad/Img";
import ReactPlayer from "react-player/lazy";

const VideoCard = ({ videoDetails }) => {
  const [imageExist, setImageExist] = useState(true);

  return (
    <div className="w-full md:w-[11rem] lg:w-[14rem] flex flex-col items-center">
      <Dialog>
        <DialogTrigger className="w-full">
          <Card className="border-none rounded-lg overflow-hidden hover:scale-95 transition-transform duration-300 cursor-pointer">
            {imageExist ? (
              <CardContent className="relative aspect-video flex items-center justify-center p-0 group">
                <Img
                  className="rounded-lg object-cover w-full h-full group-hover:opacity-40 transition-all duration-500"
                  src={`https://img.youtube.com/vi/${videoDetails?.key}/hqdefault.jpg`}
                  onError={() => setImageExist(false)}
                />
                <span className="absolute text-3xl sm:text-4xl text-white group-hover:text-red-600 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700">
                  <FaPlay />
                </span>
              </CardContent>
            ) : (
              <NoVideo />
            )}
          </Card>
          <div className="font-roboto text-sm sm:text-base text-center mt-2 px-2 line-clamp-2">
            {videoDetails?.name}
          </div>
        </DialogTrigger>

        {/* Dialog for playing video */}
        <DialogContent className="flex items-center justify-center w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[45vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] border-none p-0">
          <div className="w-full h-full">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoDetails?.key}`}
              controls
              width="100%"
              height="100%"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCard;
