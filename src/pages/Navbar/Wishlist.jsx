import { movieContext } from "@/components/Store/ContextStore";
import { useContext, useEffect, useState } from "react";
import WishlistImg from "../../assets/Img/empty_wishlist.png";
import Img from "@/components/lazyLoad/Img";
import { showDetails } from "@/components/utils/showDetails";
import { useNavigate } from "react-router";
import NoPoster from "@/assets/Img/no-poster.png";

const Wishlist = () => {
  const { movieData, newWishlist } = useContext(movieContext);
  const Navigate = useNavigate();
  const [wishlistedMovie, setWishlistedMovie] = useState([]);
  console.log("movieData", movieData);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("wishlistArray"));
    if (localData !== null) {
      setWishlistedMovie(localData);
    } else {
      setWishlistedMovie(movieData);
    }
  }, [movieData]);

  const removeFromWishlist = (movie) => {
    newWishlist(movie);
  };

  return (
    <div className="text-center w-full min-h-ful space-y-6 px-4 sm:px-6 lg:px-12 pb-7">
      <div className="text-2xl sm:text-3xl font-roboto font-semibold mt-12">
        Wishlist
      </div>

      {wishlistedMovie?.length === 0 ? (
        <div className="flex flex-col items-center space-y-6">
          <img
            src={WishlistImg}
            className="max-w-xs sm:max-w-md lg:max-w-xl w-full"
            alt="Empty wishlist"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-roboto font-medium">
            Your Wishlist is empty
          </span>
        </div>
      ) : (
        <div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
            gap-4 sm:gap-6
          "
        >
          {wishlistedMovie?.map((movie) => (
            <div
              key={movie?.id}
              onClick={() => showDetails(Navigate, movie?.id)}
              className="hover:opacity-90 cursor-pointer relative"
            >
              <Img
                src={
                  movie?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : NoPoster
                }
                className="w-full aspect-[2/3] object-cover rounded"
                alt={movie?.title}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromWishlist(movie);
                }}
                className="absolute right-1 top-1 bg-black/70 text-white hover:bg-red-600 px-2 py-1 text-xs rounded shadow-lg transition-all duration-300"
              >
                ❌
              </button>

              <div className="mt-2 text-center">
                <span className="block text-sm sm:text-base font-roboto font-medium truncate">
                  {movie?.title}
                </span>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
