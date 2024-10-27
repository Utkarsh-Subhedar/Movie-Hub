import React, { useState } from "react";
import NoVideo from "../no_image/NoVideo";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlay } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactPlayer from "react-player/lazy";

const VideoCard = ({ videoDetails }) => {
  const [imageExist, setImageExist] = useState(true);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Card className="border-none object-cover">
            {imageExist ? (
              <CardContent className="relative flex aspect-auto *:hover:text-red-700  hover:cursor-pointer rounded-lg items-center justify-center p-[0.1rem] group shadow-lg hover:scale-90 transition-all duration-500 ">
                <img
                  className="group-hover:opacity-40 rounded-xl transition-all duration-500 "
                  src={`https://img.youtube.com/vi/${
                    videoDetails?.key
                  }/hqdefault.jpg?${new Date().getTime()}`}
                  onError={() => {
                    console.log("runs");
                    setImageExist(false);
                  }}
                />
                <span className="absolute text-4xl group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 ">
                  <FaPlay />
                </span>
              </CardContent>
            ) : (
              <NoVideo />
            )}
          </Card>
          <div className="font-roboto text-md mt-1 tracking-wide">
            {videoDetails?.name}
          </div>
        </DialogTrigger>
        <DialogContent className="flex items-center justify-center w-full h-[30rem] border-none">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoDetails?.key}`}
            controls
            width="100%"
            height="100%"

            // width="100%"
            // height="100%"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCard;
