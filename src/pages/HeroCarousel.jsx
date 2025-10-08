import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router";

const HeroCarousel = ({ movieData }) => {
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`/Details/${movieData.id}`);
  };

  return (
    <div className="relative w-full">
      {/* Background image */}
      <div
        className="w-full h-[23rem] md:h-[40rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
        }}
      ></div>

      {/* Overlay container */}
      <div
        className="absolute inset-16 flex flex-col sm:flex-row items-center justify-center p-3 sm:p-8 lg:p-12 gap-4 sm:gap-8 cursor-pointer z-30"
        onClick={showDetails}
      >
        {/* Text content */}
        <div className="flex-1 space-y-2 max-w-full sm:max-w-[60%] lg:max-w-[48rem] text-center sm:text-left">
          <h1 className="font-serif text-xl sm:text-3xl lg:text-5xl font-semibold">
            {movieData.original_title}
          </h1>

          <div className="flex flex-wrap justify-center sm:justify-start items-center text-sm sm:text-base lg:text-xl gap-2 sm:gap-4">
            <span className="font-normal">{movieData.release_date}</span>
            <span className="font-bold flex items-center gap-1 sm:gap-2">
              {Math.round(movieData.vote_average)} / 10{" "}
              <FaStar className="text-yellow-500 font-semibold" />
            </span>
          </div>

          <p className="text-xs sm:text-sm lg:text-base leading-snug font-semibold">
            {movieData.overview}
          </p>

          <button className="ring-white ring-2 rounded-3xl px-3 py-2 sm:px-5 md:py-3 hover:ring-sky-800 hover:text-sky-800 mt-2 font-semibold">
            Get Details
          </button>
        </div>

        {/* Poster image */}
        {movieData.poster_path && (
          <img
            className="hidden sm:block w-24 sm:w-36 lg:w-64 h-auto rounded-lg shadow-lg shadow-zinc-600 cursor-pointer flex-shrink-0"
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            alt={`${movieData.original_title} poster`}
            onClick={showDetails}
          />
        )}
      </div>
    </div>
  );
};

export default HeroCarousel;
