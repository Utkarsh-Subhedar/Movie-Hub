import { movieContext } from "@/components/Store/ContextStore";
import React, { useContext } from "react";
import WishlistImg from "../../assets/Img/empty_wishlist.png";
import Img from "@/components/lazyLoad/Img";

const Wishlist = () => {
  const { movieData } = useContext(movieContext);
  console.log(movieData);
  return (
    <div className="text-center w-full min-h-screen mt-24 space-y-5">
      <div className="text-3xl font-roboto font-semibold">Wishlist</div>
      {movieData?.length === 0 ? (
        <div>
          <div className="flex justify-center">
            <img src={WishlistImg} className=" w-[50rem]" />
          </div>
          <span className="text-4xl font-roboto font-medium">
            Your Wishlist is empty
          </span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center w-full h-full gap-10">
          {movieData?.map((movie) => (
            <div className="hover:opacity-80 relative">
              <Img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                className="w-full h-[20rem]"
              />
              <div className="absolute *:text-lg font-roboto font-medium pl-1 flex flex-col justify-start">
                <div className="">{movie?.title}</div>
                <div className="absolute top-7">
                  {new Date(movie?.release_date).getFullYear()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
