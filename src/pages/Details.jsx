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
import ServerErrorPage from "./ServerErrorPage";

const Details = () => {
  const { id } = useParams();

  // API hooks
  const { data, loading, isError } = useFetch(`/movie/${id}`);
  const { data: credits } = useFetch(`/movie/${id}/credits`);
  const { data: videos } = useFetch(`/movie/${id}/videos`);
  const { data: similar } = useFetch(`/movie/${id}/similar`);
  const { data: recommended } = useFetch(`/movie/${id}/recommendations`);
  console.log("data", data);

  // fix: credits?.crew is an array; filter properly
  const director = credits?.crew?.find((item) => item.job === "Director");
  const writers = credits?.crew?.filter(
    (item) => item.job === "Writer" || item.job === "Screenplay"
  );

  // fix: videos response has {results: []}, find by type
  const trailer = videos?.results?.find((video) => video.type === "Trailer");

  const runTime = movieRuntime(data);

  const { newWishlist } = useContext(movieContext);

  if (loading)
    return (
      <div>
        <DetailsShimmer />
        <VideosShimmer />
        <CastShimmer />
        <CarouselShimmer />
        <CarouselShimmer />
      </div>
    );

  if (isError) return <ServerErrorPage />;

  return (
    <div className="relative h-full max-w-full -mt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover blur-[5px] opacity-20"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
        }}
      ></div>

      {/* Main content responsive wrapper */}
      <div className="relative flex flex-col lg:flex-row lg:space-x-16 px-4 lg:px-16 pt-28">
        {/* Poster */}
        <Img
          className="w-full max-w-[250px] lg:max-w-[320px] h-auto rounded-lg shadow-md"
          src={
            data?.poster_path === null
              ? NoPoster
              : `https://image.tmdb.org/t/p/original${data?.poster_path}`
          }
        />

        {/* Details */}
        <div className="mt-6 lg:mt-0 space-y-4">
          {/* Title + Year */}
          <h1 className="text-2xl lg:text-4xl font-semibold">
            {data?.title}{" "}
            <span className="font-normal opacity-70">
              ({data?.release_date?.slice(0, 4)})
            </span>
          </h1>

          {/* Tagline */}
          <h3 className="italic text-lg lg:text-xl opacity-60">
            {data?.tagline}
          </h3>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-bold">Genres:</span>
            {data?.genres?.length === 0 ? (
              <span className="text-red-800 opacity-80">No genres found</span>
            ) : (
              data?.genres?.map((genre, index) => (
                <span key={genre.id} className={getGenresWiseColor(genre)}>
                  {genre.name}
                  {index === data.genres.length - 1 ? "." : ","}
                </span>
              ))
            )}
          </div>

          {/* Overview */}
          <div className="max-w-[40rem]">
            <h2 className="text-xl lg:text-2xl font-semibold">Overview</h2>
            <p
              className={`text-pretty ${
                !data?.overview ? "text-red-800 opacity-80" : ""
              }`}
            >
              {data?.overview || "No data found"}
            </p>
          </div>

          {/* Rating + Trailer + Wishlist */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <CircleRating rating={data?.vote_average} />

            {/* Trailer */}
            <Dialog>
              <DialogTrigger className="flex items-center space-x-2 text-xl cursor-pointer hover:text-red-700 transition">
                <FaPlay />
                <span>Watch Trailer</span>
              </DialogTrigger>
              <DialogContent className="flex items-center justify-center w-full h-[20rem] lg:h-[30rem] border-none">
                {!trailer ? (
                  <img src={NoVideo} alt="No trailer" />
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

            {/* Wishlist */}
            <FaHeart
              className="text-4xl cursor-pointer hover:text-red-600 active:text-red-900"
              onClick={() => newWishlist(data)}
            />
          </div>

          {/* Status / Release Date / Runtime */}
          <div className="flex flex-wrap gap-6 mt-4 text-sm lg:text-base">
            <p>
              <span className="font-medium">Status:</span>{" "}
              {data?.status || "No data found"}
            </p>
            <p>
              <span className="font-medium">Release Date:</span>{" "}
              {data?.release_date || "No data found"}
            </p>
            <p>
              <span className="font-medium">Runtime:</span>{" "}
              {runTime === "0h" ? "No data found" : runTime}
            </p>
          </div>

          {/* Director */}
          <div className="mt-3">
            <span className="font-medium">Director:</span>{" "}
            {director?.name || "No data found"}
          </div>

          {/* Writers */}
          <div className="mt-3">
            <span className="font-medium">Writers:</span>{" "}
            {writers?.length > 0
              ? writers.slice(0, 3).map((writer, i) => (
                  <span key={i}>
                    {writer.name}
                    {i === writers.length - 1 ? "." : ", "}
                  </span>
                ))
              : "No data found"}
          </div>
        </div>
      </div>

      {/* Videos */}
      <div className="mt-16 px-[4rem] md:px-[1rem]">
        <VideoCorousel name="Official Videos" videos={videos} />
      </div>

      {/* Cast */}
      <div className="mt-8 px-[2rem] md:px-[1rem]">
        <CastCorousel name="Top Cast" credits={credits} />
      </div>

      {/* Similar Movies */}
      {similar?.results?.length > 0 && (
        <div className="mt-8 px-[1rem]">
          <MovieCarousel name="You may also like" movie={similar.results} />
        </div>
      )}

      {/* Recommended */}
      {recommended?.results?.length > 0 && (
        <div className="mt-8 px-[1rem]">
          <MovieCarousel
            name="Recommended Movies"
            movie={recommended.results}
          />
        </div>
      )}
    </div>
  );
};

export default Details;
