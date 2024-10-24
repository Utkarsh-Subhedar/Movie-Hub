import { movieContext } from "@/components/Store/ContextStore";
import React, { useContext } from "react";
import CustomCard from "../carousel_card/CustomCard";

const Wishlist = () => {
  const { movieData } = useContext(movieContext);
  console.log(movieData);
  return (
    <div className="text-center w-full min-h-screen mt-24 space-y-5">
      <div className="text-3xl font-roboto font-semibold">Wishlist</div>
      <div className="flex flex-wrap justify-center w-full h-full gap-10">
        {movieData?.map((movie) => (
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              className="w-[16rem] h-[20rem]"
            />
            <div className="*:text-lg font-roboto font-medium float-left p-2">
              <span className="block">{movie?.title}</span>
              <span className="block float-left">
                {new Date(movie?.release_date).getFullYear()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
