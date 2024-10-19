import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CircleRating from "@/components/circleRating/CircleRating";
import NoPoster from "@/assets/Img/no-poster.png";
import useFetch from "@/components/custom_hook/useFetch";
import { Target } from "lucide-react";
import { movieRuntime } from "../../components/utils/runTime.js";
import imdb from "@/assets/Img/imdbicon.png";
import { getGenresWiseColor } from "@/components/utils/getGenresWiseColor.js";
const CustomCard = ({ movie }) => {
  const { data } = useFetch(`/movie/${movie.id}`);
  let runtime = movieRuntime(data);
  console.log(data);
  let year = new Date(data?.release_date).getFullYear();
  return (
    <div className="group hover:scale-95 duration-500 w-[14.5rem]">
      <Card className="border-none">
        <div className="relative w-[14.5rem] h-[20rem] ">
          <img
            className="w-full h-full object-cover cursor-pointer object-top rounded-t-md group-hover:opacity-60"
            src={
              movie.poster_path === null
                ? NoPoster
                : ` https://image.tmdb.org/t/p/original${movie.poster_path}`
            }
          />
          <div className="absolute bottom-2 left-2 w-[4rem]">
            <CircleRating rating={movie.vote_average} />
          </div>
        </div>
      </Card>{" "}
      <div className="p-[0.4rem] *:font-roboto space-y-[0.8rem] rounded-b-lg dark:bg-slate-900 bg-slate-200 cursor-default">
        <div className="space-y-[0.6rem]">
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
  );
};

export default CustomCard;

// : data?.genres?.length < 1 ? (
//   <span>{console.log(true)}</span>
// )
