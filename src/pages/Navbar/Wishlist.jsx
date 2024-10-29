import { movieContext } from "@/components/Store/ContextStore";
import React, { useContext } from "react";
import WishlistImg from "../../assets/Img/empty_wishlist.png";
import Img from "@/components/lazyLoad/Img";
import { showDetails } from "@/components/utils/showDetails";
import { useNavigate } from "react-router";

const Wishlist = () => {
  const { movieData } = useContext(movieContext);
  const Navigate = useNavigate();
  console.log(movieData);
  return (
    <div className="text-center w-full min-h-screen mt-24 space-y-5 py-10">
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
        <div className="flex flex-wrap justify-center max-w-full h-full gap-10">
          {movieData?.map((movie) => (
            <div
              className="hover:opacity-80"
              onClick={() => showDetails(Navigate, movie?.id)}
            >
              <Img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                className="w-full h-[20rem]"
              />
              <div className="*:text-sm font-roboto font-medium max-w-[20rem]">
                <span className="w-[13.6rem] line-clamp-1">{movie?.title}</span>
                <div className="">
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
