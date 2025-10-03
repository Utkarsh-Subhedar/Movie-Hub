import { movieContext } from "@/components/Store/ContextStore";
import { useContext, useEffect, useState } from "react";
import WishlistImg from "../../assets/Img/empty_wishlist.png";
import Img from "@/components/lazyLoad/Img";
import { showDetails } from "@/components/utils/showDetails";
import { useNavigate } from "react-router";

const Wishlist = () => {
  const { movieData, newWishlist } = useContext(movieContext);
  const Navigate = useNavigate();
  const [wishlistedMovie, setWishlistedMovie] = useState([]);

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
    <div className="text-center w-full min-h-screen  space-y-6 px-4 sm:px-6 lg:px-12">
      <div className="text-2xl sm:text-3xl font-roboto font-semibold mt-12">
        Wishlist
      </div>

      {wishlistedMovie?.length === 0 ? (
        <div className="flex flex-col items-center space-y-6">
          <img
            src={WishlistImg}
            className="w-[16rem] sm:w-[24rem] md:w-[32rem] lg:w-[40rem] max-w-full"
          />
          <span className="text-2xl md:text-3xl font-roboto font-medium">
            Your Wishlist is empty
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6">
          {wishlistedMovie?.map((movie) => (
            <div
              key={movie?.id}
              onClick={() => showDetails(Navigate, movie?.id)}
              className="hover:opacity-90 cursor-pointer relative"
            >
              <Img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                className="w-full h-[12rem] sm:h-[15rem] md:h-[18rem] lg:h-[20rem] object-cover rounded"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent opening details
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
