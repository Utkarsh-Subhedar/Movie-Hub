import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa6";

const HeroCarousel = ({ movieData }) => {
  console.log(movieData);
  return (
    <>
      <div>
        <div
          className="realtive overflow-hidden w-full h-screen bg-cover opacity-40 z-20 "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
          }}
        ></div>
        <div className="absolute top-[14.8rem] left-[5rem] z-20 space-y-1">
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
          className="w-[17rem] h-[25rem] rounded-lg shadow-zinc-600 shadow-lg absolute top-[9rem] right-[7rem] z-30"
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        />
        <div className="top-[19rem] bg-gradient-to-b from-transparent from-0% via-gray-800 to-gray-900  w-full h-full absolute"></div>
      </div>
    </>
  );
};

export default HeroCarousel;
