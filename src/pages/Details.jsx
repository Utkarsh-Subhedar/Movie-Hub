import CircleRating from "@/components/circleRating/CircleRating";
import useFetch from "@/components/custom_hook/useFetch";
import { DetailsContext } from "@/components/Store/DetailsContext";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useContext } from "react";
import { FaHeart, FaPlay } from "react-icons/fa6";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}`);
  const MovieRuntime = () => {
    const movieHours = Math.floor(data?.runtime / 60);
    const movieMinutes = data?.runtime % 60;
    return `${movieHours}h${" "}${movieMinutes > 0 ? `${movieMinutes}m` : ""}`;
  };
  console.log(data?.id);
  return !data ? (
    <div>
      <div>
        <Skeleton className="h-[35rem] w-full  rounded-xl">
          <div className="pt-[7rem] relative ml-10">
            <div className="absolute right-[8rem] top-[14rem]">
              <Skeleton className="h-[2rem] w-[24rem] bg-background" />
              <div className="flex items-center space-x-2 pt-3">
                <Skeleton className="h-[1.5rem] w-[7rem] bg-background mr-20" />
                <Skeleton className="h-[1.5rem] w-[3rem] bg-background" />
                <Skeleton className="h-[1rem] w-[1rem] bg-background" />
              </div>
              <div className="space-y-1 pt-2">
                <Skeleton className="h-[1rem] w-[40rem] bg-background" />
                <Skeleton className="h-[1rem] w-[25rem] bg-background" />
                <Skeleton className="h-[1rem] w-[14rem] bg-background" />
              </div>
              <div className="pt-[0.6rem]">
                <Skeleton className="h-[2rem] w-[4rem] bg-background rounded-3xl " />
              </div>
            </div>
            <Skeleton className="h-[20rem] w-[15rem] bg-background absolute left-12" />
          </div>
        </Skeleton>
      </div>
    </div>
  ) : (
    <div className="h-full w-full">
      <div
        className="realtive overflow-hidden w-full h-screen bg-cover blur-[5px] opacity-20"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
      ></div>
      <div className="absolute top-[7rem] left-[8rem] flex space-x-16 ">
        <img
          className="w-[20rem] h-[30rem] rounded-lg shadow-zinc-600 shadow-md"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        />
        <div className="*:font-normal *:pb-1">
          <h1 className="text-4xl tracking-wide font-semibold ">
            {data.original_title}{" "}
            <span className="font-bold">({data.release_date}) </span>
          </h1>
          <h3 className="italic text-xl">{data.tagline}</h3>
          <div className="flex space-x-1">
            <label htmlFor="genre" className="font-bold">
              Genre:
            </label>
            <div id="genre" className="whitespace-pre text-text_primary">
              {data.genres.map((genre, index) => (
                <span key={genre.id}>
                  {" "}
                  {genre.name}
                  {index === data.genres.length - 1 ? "." : ","}
                </span>
              ))}
            </div>
          </div>
          <div className="w-[40rem]">
            <h2 className="text-2xl font-semibold tracking-wide">Overview</h2>
            <span className="text-pretty font-serif">{data.overview}</span>
          </div>

          <div className="flex mt-4">
            <div className=" border-r-slate-300 border-r-2 w-[110px] h-[90px] border-dashed">
              <CircleRating rating={data.vote_average} />
            </div>
            <div className="ml-5 flex border-r-slate-300 border-r-2 w-[250px] h-[90px] border-dashed">
              <div className="flex  text-5xl space-x-2 items-center cursor-pointer hover:scale-95 duration-500 hover:text-red-700 ">
                <FaPlay />
                <span className="text-3xl ">Watch Trailer</span>
              </div>
            </div>
            <div className="flex justify-center items-center ml-6 text-6xl cursor-pointer">
              <FaHeart />
            </div>
          </div>
          <div className="flex gap-4 mt-4 ">
            <span>
              Status:<span className="ml-2">{data.status}</span>
            </span>
            <span>
              Release Date:<span className="ml-2">{data.release_date}</span>
            </span>
            <span>
              Runtime:
              <span className="ml-2 tracking-normal">{MovieRuntime()}</span>
            </span>
          </div>
          <div className="border-b-2 border-b-slate-200 mt-2"></div>
          <div className="flex gap-4 mt-4 ">
            <span>
              Status:<span className="ml-2">{data.status}</span>
            </span>
            <span>
              Release Date:<span className="ml-2">{data.release_date}</span>
            </span>
            <span>
              Runtime:<span className="ml-2">{MovieRuntime()}</span>
            </span>
          </div>
          <div className="border-b-2 border-b-slate-200 mt-2"></div>
          <div className="flex gap-4 mt-4 ">
            <span>
              Status:<span className="ml-2">{data.status}</span>
            </span>
            <span>
              Release Date:<span className="ml-2">{data.release_date}</span>
            </span>
            <span>
              Runtime:<span className="ml-2">{MovieRuntime()}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
