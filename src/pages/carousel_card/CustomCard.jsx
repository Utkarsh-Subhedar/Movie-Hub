import React, { useContext, useEffect, useState } from "react";
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
  const { newWishlist, movieData } = useContext(movieContext);
  const { data } = useFetch(`/movie/${movie.id}`);
  const [isSaved, setIsSaved] = useState(false);
  let runtime = movieRuntime(data);

  useEffect(() => {
    try {
      let local = JSON.parse(localStorage.getItem("wishlistArray")) || [];
      setIsSaved(local.some((m) => m.id === movie.id));
    } catch (error) {
      setIsSaved(false);
    }
  }, [movie, movieData]);

  const toggleWishlist = () => {
    newWishlist(movie);
  };

  return (
    <div className="group relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] mx-auto cursor-pointer hover:scale-95 hover:shadow-md transition-all rounded-xl">
      {/* Wishlist */}
      <span
        className="absolute right-1 top-1 z-20 bg-black/40 p-1 rounded-br-sm text-lg sm:text-xl"
        onClick={toggleWishlist}
      >
        <FaRegBookmark color={isSaved ? "yellow" : ""} />
      </span>

      <Card
        className="border-none relative w-full flex flex-col"
        onClick={() => showDetails(Navigate, movie.id)}
      >
        {/* Poster */}
        <Img
          className="w-full h-[calc(100%-80px)] sm:h-[calc(100%-100px)] md:h-[calc(100%-120px)] object-cover rounded-t-md"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              : NoPoster
          }
        />

        {/* Info Section */}
        <div
          className="p-2 bg-slate-200 dark:bg-slate-900 flex flex-col justify-between rounded-b-md
                h-[calc(100%-80px)] sm:h-[calc(100%-100px)] md:h-[calc(100%-120px)]"
        >
          {/* Title */}
          <h6 className="text-sm sm:text-base md:text-lg  font-semibold line-clamp-1 px-1">
            {data?.title}
          </h6>

          {/* Genres */}
          <div className="flex flex-wrap">
            {data?.genres?.slice(0, 2).map((genre) => (
              <span
                key={genre.id}
                className={`${getGenresWiseColor(genre)}
                    text-[1rem] md:text-base 
                    px-1 rounded-full font-semibold`}
              >
                {genre.name === "Science Fiction" ? "sci-fi" : genre.name}
              </span>
            ))}
          </div>

          {/* Release date + IMDb + runtime */}
          <div
            className="flex justify-between items-center
                  text-[13px]  md:text-[14px] mt-1 px-1"
          >
            <a
              href={`https://www.imdb.com/title/${data?.imdb_id}/`}
              target="_blank"
            >
              <img className="w-7 sm:w-7 md:w-8 lg:w-9" src={imdb} alt="IMDb" />
            </a>
            <span className="truncate">{data?.release_date ?? "No date"}</span>
            <span>{runtime}</span>
          </div>
        </div>

        {/* Circle Rating */}
        <div className="absolute bottom-[5.4rem] md:bottom-[6.2rem] max-lg:bottom-[6.2rem]  left-1 w-4 sm:w-6 md:w-8">
          <CircleRating
            rating={movie.rating ? movie.rating : movie.vote_average}
          />
        </div>
      </Card>
    </div>
  );
};

export default CustomCard;
