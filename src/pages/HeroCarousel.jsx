import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router";

const HeroCarousel = ({ movieData }) => {
  const Navigate = useNavigate();

  const showDetails = () => {
    Navigate(`/Details/${movieData.id}`);
  };
  return (
    <>
      <div>
        <div
          className="realtive overflow-hidden w-full h-[45rem] bg-cover opacity-40 z-20"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
          }}
        ></div>
        <div
          className="absolute top-[14.8rem] left-[5rem] z-20 space-y-2 cursor-pointer"
          onClick={showDetails}
        >
          <div className="max-w-[48rem]">
            <span className="font-serif text-7xl">
              {movieData.original_title}
            </span>
          </div>
          <div className="flex font-sans text-2xl space-x-4">
            <span className="font-normal">{movieData.release_date}</span>
            <span className="font-bold flex items-center gap-2">
              {Math.round(movieData.vote_average)} / 10
              <FaStar />
            </span>
          </div>
          <div className="max-w-[48rem] text-lg leading-snug">
            <span>{movieData.overview}</span>
          </div>
          <div>
            <button className="ring-white ring-2 rounded-3xl p-3 hover:ring-sky-800 hover:text-sky-800 mt-2">
              Get Details
            </button>
          </div>
        </div>
        <img
          className="absolute top-[9rem] right-[7rem] w-[17rem] h-[25rem] rounded-lg shadow-zinc-600 shadow-lg  z-30 cursor-pointer"
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        />
      </div>
    </>
  );
};

export default HeroCarousel;
