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

const CustomCard = ({ movie }) => {
  const navigate = useNavigate();
  const { newWishlist } = useContext(movieContext);
  const { data } = useFetch(`/movie/${movie.id}`);
  const [isSaved, setIsSaved] = useState(false);
  let runtime = movieRuntime(data);
  const DetailsPage = (id) => {
    console.log(id);
    navigate(`/Details/${id}`);
  };
  return (
    <div className="group relative duration-500 w-[14.5rem]">
      <span
        className="absolute right-0 text-2xl cursor-pointer p-[0.3rem] pt-1 z-20 bg-black/40 rounded-br-sm "
        onClick={() => {
          setIsSaved(!isSaved);
          newWishlist(data);
        }}
      >
        <FaRegBookmark color={isSaved ? "yellow" : ""} />
      </span>
      <div onClick={() => DetailsPage(movie.id)}>
        <Card className="border-none ">
          <div className="relative w-[14.5rem] h-[20rem] hover:opacity-60">
            <Img
              className="w-full h-full object-cover object-top rounded-t-md "
              src={
                movie.poster_path === null
                  ? NoPoster
                  : ` https://image.tmdb.org/t/p/original${movie.poster_path}`
              }
            />
            <div className="absolute bottom-2 left-2 w-[4rem] hover:opacity-90">
              <CircleRating rating={movie.vote_average} />
            </div>
          </div>
        </Card>{" "}
        <div className="relative p-[0.4rem] *:font-roboto space-y-[0.8rem] rounded-b-lg dark:bg-slate-900 bg-slate-200 cursor-default ">
          <div className="space-y-[0.6rem] ">
            <h6 className="text-xl font-semibold leading-none line-clamp-1 pl-1 capitalize">
              {data?.title}
            </h6>
            <div className="py-2">
              {!data?.genres?.length && (
                <span className="text-red-800 font-semibold">
                  No Genres Found
                </span>
              )}
              {data?.genres?.slice(0, 2)?.map((genre) => (
                <div className=" px-[0.2rem] inline">
                  <span
                    key={genre.id}
                    className={`${getGenresWiseColor(
                      genre
                    )} border-slate-600  border-2 p-[0.3rem] !text-sm font-roboto font-semibold rounded-full`}
                  >
                    {genre.name === "Science Fiction" ? "sci-fi" : genre.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-around">
            <a
              href={`https://www.imdb.com/title/${data?.imdb_id}/`}
              target="_blank"
              className="underline underline-offset-2 hover:text-sky-600"
            >
              <img className="hover:scale-110 duration-500" src={imdb} />
            </a>
            <span>{data?.release_date}</span> <span>{runtime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
