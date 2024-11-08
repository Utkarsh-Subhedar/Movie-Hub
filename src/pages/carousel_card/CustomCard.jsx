import React, { useContext, useState } from "react";
import { Card } from "@/components/ui/card";
import CircleRating from "@/components/circleRating/CircleRating";
import NoPoster from "@/assets/Img/no-poster.png";
import useFetch from "@/components/custom_hook/useFetch";
import { movieRuntime } from "../../components/utils/runTime.js";
import imdb from "@/assets/Img/imdbicon.png";
import { getGenresWiseColor } from "@/components/utils/getGenresWiseColor.js";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router";
import { movieContext } from "@/components/Store/ContextStore.jsx";
import Img from "@/components/lazyLoad/Img.jsx";
import { showDetails } from "@/components/utils/showDetails.js";

const CustomCard = ({ movie }) => {
  const Navigate = useNavigate();
  const { newWishlist } = useContext(movieContext);
  const { data } = useFetch(`/movie/${movie.id}`);
  const [isSaved, setIsSaved] = useState(false);
  let runtime = movieRuntime(data);
  console.log("searched movie", movie?.title);

  return (
    <div className="group relative duration-500 w-[14.5rem] h-[29rem]">
      <span
        className="absolute right-0 text-2xl cursor-pointer p-[0.3rem] pt-1 z-20 bg-black/40 rounded-br-sm "
        onClick={() => {
          setIsSaved(!isSaved);
          newWishlist(data);
        }}
      >
        <FaRegBookmark color={isSaved ? "yellow" : ""} />
      </span>
      <div onClick={() => showDetails(Navigate, movie.id)}>
        <Card className="border-none relative w-full">
          <div className=" hover:opacity-60 p-0 m-0" style={{ lineHeight: 0 }}>
            <Img
              className="size-[21.6rem] rounded-t-md p-0 m-0 object-cover"
              style={{ padding: 0, margin: 0 }}
              src={
                movie.poster_path === null
                  ? NoPoster
                  : ` https://image.tmdb.org/t/p/original${movie.poster_path}`
              }
            />
            <div className="p-[0.5rem] *:font-roboto rounded-b-lg dark:bg-slate-900 bg-slate-200 cursor-default space-y-4">
              <div className="space-y-[1rem]">
                <h6 className="text-xl font-semibold line-clamp-1 pl-1 capitalize">
                  {data?.title}
                </h6>
                <div>
                  {!data?.genres?.length && (
                    <div className="text-red-800 font-semibold px-[0.4rem] p-[0.6rem]">
                      No Genres Found
                    </div>
                  )}
                  {data?.genres?.slice(0, 2)?.map((genre) => (
                    <div className=" px-[0.2rem] inline">
                      <span
                        key={genre.id}
                        className={`${getGenresWiseColor(
                          genre
                        )} border-slate-600  border-2 p-[0.3rem] !text-sm font-roboto font-semibold rounded-full`}
                      >
                        {genre.name === "Science Fiction"
                          ? "sci-fi"
                          : genre.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-around items-center *:font-roboto *:font-normal">
                <a
                  href={`https://www.imdb.com/title/${data?.imdb_id}/`}
                  target="_blank"
                  className="underline underline-offset-2 hover:text-sky-600"
                >
                  <img className="hover:scale-110 duration-500" src={imdb} />
                </a>
                <span>
                  {data?.release_date ? data?.release_date : "No date found"}
                </span>{" "}
                <span>{runtime}</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[7.3rem] left-1 w-[4rem] hover:opacity-90">
            <CircleRating rating={movie.vote_average} />
          </div>
        </Card>{" "}
      </div>
    </div>
  );
};

export default CustomCard;
