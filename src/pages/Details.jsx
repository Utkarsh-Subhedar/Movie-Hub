import CircleRating from "@/components/circleRating/CircleRating";
import VideoCorousel from "@/pages/corousels/VideoCorousel";
import useFetch from "@/components/custom_hook/useFetch";
import { FaHeart, FaPlay } from "react-icons/fa6";

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { useParams } from "react-router";
import CastCorousel from "@/pages/corousels/CastCorousel";
import MovieCarousel from "./corousels/MovieCarousel";
import { movieRuntime } from "@/components/utils/runTime";

const Details = () => {
  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}`);
  const { data: credits } = useFetch(`/movie/${id}/credits`);
  const { data: videos } = useFetch(`/movie/${id}/videos`);
  const { data: similar } = useFetch(`/movie/${id}/similar`);
  const { data: recommended } = useFetch(`/movie/${id}/recommendations`);
  const director = credits?.crew?.find((item) => item.job == "Director");
  const writers = credits?.crew?.filter((item) => item.job == "Writer");
  console.log(id);
  const runTime = movieRuntime(data);
  return !data ? (
    <div>
      <div>
        <Skeleton className="h-[35rem] w-full  rounded-xl">
          <div className="pt-[7rem] relative ml-20">
            <div className="absolute right-[8rem] top-[10rem] space-y-5">
              <Skeleton className="h-[2rem] w-[24rem] bg-background" />
              <div className="flex items-center space-x-2 pt-3 space-y-5">
                <Skeleton className="h-[1.5rem] w-[7rem] bg-background mr-20" />
                <Skeleton className="h-[1.5rem] w-[3rem] bg-background" />
                <Skeleton className="h-[1rem] w-[1rem] bg-background" />
              </div>
              <div className="space-y-5 pt-2">
                <Skeleton className="h-[1rem] w-[40rem] bg-background" />
                <Skeleton className="h-[1rem] w-[25rem] bg-background" />
                <Skeleton className="h-[1rem] w-[14rem] bg-background" />
              </div>
              <div className="pt-[0.6rem]">
                <Skeleton className="h-[2rem] w-[4rem] bg-background rounded-3xl " />
              </div>
            </div>
            <Skeleton className="h-[25rem] w-[15rem] bg-background absolute left-12" />
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
        <div className="*:pb-2">
          <h1 className="text-4xl tracking-normal font-semibold ">
            {data.original_title}{" "}
            <span className="font-semibold">({data.release_date}) </span>
          </h1>
          <h3 className="italic text-xl opacity-60">{data.tagline}</h3>
          <div className="flex space-x-1 items-center">
            <label htmlFor="genre" className="font-bold opacity-90 text-xl">
              Genre:
            </label>
            <div
              id="genre"
              className="whitespace-pre text-text_primary font-roboto pt-1 font-medium text-red-800  text-xl"
            >
              {data?.genres?.map((genre, index) => (
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
            <span className="text-pretty font-roboto">{data.overview}</span>
          </div>

          <div className="flex mt-4">
            <div className="dark:border-r-slate-200 border-r-slate-700 border-r-2 w-[110px] h-[90px] border-dashed">
              <CircleRating rating={data.vote_average} />
            </div>
            <div className="ml-5 flex dark:border-r-slate-200 border-r-slate-700 border-r-2 w-[250px] h-[90px] border-dashed">
              <div className="flex  text-5xl space-x-2 items-center cursor-pointer *:hover:scale-95 *:duration-500  *:hover:text-red-700 ">
                <FaPlay />
                <span className="text-3xl">Watch Trailer</span>
              </div>
            </div>
            <div className="flex justify-center items-center ml-6 text-6xl cursor-pointer ">
              <FaHeart />
            </div>
          </div>
          <div className="flex gap-4 mt-4 *:font-roboto font-medium">
            <h1>
              Status:<span className="ml-2 opacity-80">{data.status}</span>
            </h1>
            <h1>
              Release Date:
              <span className="ml-2 opacity-80">{data.release_date}</span>
            </h1>
            <h1>
              Runtime:
              <span className="ml-2 tracking-normal opacity-80">{runTime}</span>
            </h1>
          </div>
          <div className="border-b-2 dark:border-b-slate-200 border-b-slate-700 "></div>
          <div className="flex gap-2 mt-3">
            <span className="font-roboto font-medium">
              Director:
              <span className="opacity-80 ml-2">{director?.original_name}</span>
            </span>
          </div>
          <div className="border-b-2 dark:border-b-slate-200 border-b-slate-700"></div>
          <div className="flex gap-4 mt-3 ">
            <span className="font-roboto font-medium">
              Writers:
              {writers?.map((writer, index) => (
                <span className="ml-2 opacity-80">
                  {writer.name}
                  {index === writers.length - 1 ? "." : ","}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[5rem]">
        <h1 className="text-2xl font-roboto font-semibold pl-[4.5rem]">
          Official Videos
        </h1>
        <VideoCorousel videos={videos} />
      </div>
      <div className="mt-[2rem]">
        <h1 className="text-2xl font-roboto font-semibold pl-[4.5rem]">
          Top Cast
        </h1>
        <CastCorousel credits={credits} />
      </div>
      <div className="mt-[2rem]">
        <h1 className="text-2xl font-roboto font-semibold pl-[4.5rem]">
          You may also like{" "}
        </h1>
        <MovieCarousel movie={similar} />
      </div>
      <div className="mt-[2rem]">
        <h1 className="text-2xl font-roboto font-semibold pl-[4.5rem]">
          Recommended Movies{" "}
        </h1>
        <MovieCarousel movie={recommended} />
      </div>
    </div>
  );
};

export default Details;
