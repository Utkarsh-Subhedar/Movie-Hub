import CircleRating from "@/components/circleRating/CircleRating";
import VideoCorousel from "@/pages/corousels/VideoCorousel";
import useFetch from "@/components/custom_hook/useFetch";
import { FaHeart, FaPlay } from "react-icons/fa6";
import ReactPlayer from "react-player/lazy";
import React, { useContext } from "react";
import { useParams } from "react-router";
import CastCorousel from "@/pages/corousels/CastCorousel";
import MovieCarousel from "./corousels/MovieCarousel";
import { movieRuntime } from "@/components/utils/runTime";
import { getGenresWiseColor } from "@/components/utils/getGenresWiseColor";
import DetailsShimmer from "./shimmer/DetailsShimmer";
import CarouselShimmer from "./shimmer/CarouselShimmer";
import CastShimmer from "./shimmer/CastShimmer";
import VideosShimmer from "./shimmer/VideosShimmer";
import { movieContext } from "@/components/Store/ContextStore";
import NoPoster from "@/assets/Img/no-poster.png";
import NoVideo from "@/assets/Img/no-video-available-image.webp";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Img from "@/components/lazyLoad/Img";
const Details = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(`/movie/${id}`);
  const { data: credits } = useFetch(`/movie/${id}/credits`);
  const { data: videos } = useFetch(`/movie/${id}/videos`);
  const { data: similar } = useFetch(`/movie/${id}/similar`);
  const { data: recommended } = useFetch(`/movie/${id}/recommendations`);
  const director = credits?.crew?.find((item) => item.job == "Director");
  const writers = credits?.crew?.filter(
    (item) => item.job == "Writer" || "Writing"
  );
  const trailer = videos?.results?.find((video) => video.type === "Trailer");
  const runTime = movieRuntime(data);
  console.log(data);
  console.log("simiiii", similar);
  console.log("recommm", recommended);
  console.log("credits", credits);

  const { newWishlist } = useContext(movieContext);
  return loading ? (
    <div>
      <DetailsShimmer />
      <VideosShimmer />
      <CastShimmer />
      <CarouselShimmer />
      <CarouselShimmer />
    </div>
  ) : (
    <div className="h-full w-full">
      <div
        className="realtive overflow-hidden w-full h-screen bg-cover blur-[5px] opacity-20"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
        }}
      ></div>
      <div className="absolute top-[7rem] left-[8rem] flex space-x-16 ">
        <Img
          className="w-[20rem] h-[30rem] rounded-lg shadow-zinc-600 shadow-md"
          src={
            data?.poster_path === null
              ? NoPoster
              : `https://image.tmdb.org/t/p/original${data?.poster_path}`
          }
        />
        <div className="*:pb-2">
          <h1 className="text-4xl tracking-normal font-semibold ">
            {data?.title}{" "}
            <span className="font-semibold">({data?.release_date}) </span>
          </h1>
          <h3 className="italic text-xl opacity-60">{data?.tagline}</h3>
          <div className="flex space-x-1 items-center">
            <label htmlFor="genre" className="font-bold opacity-90 text-xl">
              Genre:
            </label>
            {data?.genres?.length == 0 ? (
              <span className="text-red-800 pt-1 opacity-80 font-roboto font-medium">
                No generes found
              </span>
            ) : (
              <div
                id="genre"
                className="whitespace-pre text-text_primary font-roboto pt-1 font-medium text-xl"
              >
                {data?.genres?.map((genre, index) => (
                  <span key={genre.id} className={getGenresWiseColor(genre)}>
                    {" "}
                    {genre.name}
                    {index === data?.genres?.length - 1 ? "." : ","}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="w-[40rem]">
            <h2 className="text-2xl font-semibold tracking-wide">Overview</h2>
            <span
              className={`text-pretty font-roboto line-clamp-3 ${
                data?.overview === "" ? "text-red-800 opacity-80" : ""
              }`}
            >
              {data?.overview === "" ? "No data found" : data?.overview}
            </span>
          </div>

          <div className="flex mt-4">
            <div className="dark:border-r-slate-200 border-r-slate-700 border-r-2 w-[110px] h-[90px] border-dashed">
              <CircleRating rating={data?.vote_average} />
            </div>
            <div className="flex dark:border-r-slate-200 border-r-slate-700 border-r-2 px-4 border-dashed">
              <div className="w-full ">
                <Dialog>
                  <DialogTrigger className="flex space-x-2 pt-5 items-center text-5xl cursor-pointer *:hover:scale-105 *:duration-500  *:hover:text-red-700 ">
                    <FaPlay />
                    <span className="text-3xl">Watch Trailer</span>
                  </DialogTrigger>
                  <DialogContent className="flex items-center justify-center w-full h-[30rem] border-none">
                    {trailer === undefined ? (
                      <img src={NoVideo} />
                    ) : (
                      <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer?.key}`}
                        controls
                        width="100%"
                        height="100%"
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex justify-center items-center ml-6 text-6xl cursor-pointer ">
              <FaHeart
                className="active:text-red-900"
                onClick={() => newWishlist(data)}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4 *:font-roboto font-medium">
            <h1>
              Status:<span className="ml-2 opacity-80">{data?.status}</span>
            </h1>
            <h1>
              Release Date:
              <span
                className={`ml-2 opacity-80 ${
                  data?.release_date === "" ? "text-red-700" : ""
                }`}
              >
                {data?.release_date === ""
                  ? "No data found"
                  : data?.release_date}
              </span>
            </h1>
            <h1>
              Runtime:
              <span
                className={`ml-2 tracking-normal opacity-80 ${
                  data?.runtime === "0" ? "text-red-700" : ""
                }`}
              >
                {runTime === "0h" ? "No data found" : runTime}
              </span>
            </h1>
          </div>
          <div className="border-b-2 dark:border-b-slate-200 border-b-slate-700 "></div>
          <div className="flex gap-2 mt-3">
            <span className="font-roboto font-medium">
              Director:
              <span
                className={`ml-2 font-roboto tracking-normal opacity-80 ${
                  director?.name === undefined ? "text-red-700" : ""
                }`}
              >
                {director?.name === undefined
                  ? "No data found"
                  : director?.name}
              </span>
            </span>
          </div>
          <div className="border-b-2 dark:border-b-slate-200 border-b-slate-700"></div>
          <div className="flex gap-2 mt-3 font-roboto ">
            <span className="font-roboto font-medium">Writers:</span>
            {writers?.length === 0 ? (
              <span className="text-red-700 opacity-80">No data found</span>
            ) : (
              <span>
                {writers?.slice(0, 3).map((writer, index) => (
                  <span className="opacity-80 font-mediumfont-medium">
                    {writer.name}
                    {index === writer.length - 1 || 2 ? "." : ","}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[5rem]">
        <h1 className="text-2xl font-roboto font-semibold pl-[4.5rem]"></h1>
        <VideoCorousel name={"Official Videos"} videos={videos} />
      </div>
      <div className="mt-[2rem]">
        <CastCorousel name={"Top Cast"} credits={credits} />
      </div>
      <div>
        {similar?.results?.length === 0 ? (
          <div></div>
        ) : (
          <div className="mt-[2rem]">
            <MovieCarousel name={"You may also like"} movie={similar} />
          </div>
        )}
      </div>
      <div>
        {recommended?.results?.length === 0 ? (
          <div></div>
        ) : (
          <div className="mt-[2rem]">
            <MovieCarousel name={"Recommended Movies"} movie={recommended} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
