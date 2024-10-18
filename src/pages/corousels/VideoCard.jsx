import React, { useState } from "react";
import NoVideo from "../no_image/NoVideo";
import { Card, CardContent } from "@/components/ui/card";
import { FaPlay } from "react-icons/fa6";

const VideoCard = ({ videoDetails }) => {
  const [imageExist, setImageExist] = useState(true);
  return (
    <>
      <div className="">
        <Card className="border-none">
          {imageExist ? (
            <CardContent className="relative flex aspect-auto *:hover:text-red-700  hover:cursor-pointer rounded-lg items-center justify-center p-[0.1rem] group shadow-lg hover:scale-90 transition-all duration-500">
              <img
                className="group-hover:opacity-40 rounded-xl transition-all duration-500"
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
      </div>
      <div className="font-roboto text-md mt-1 tracking-wide">
        {videoDetails?.name}
      </div>
    </>
  );
};

export default VideoCard;
