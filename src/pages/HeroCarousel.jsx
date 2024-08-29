import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HeroCarousel = ({ movieData }) => {
  console.log(movieData);
  return movieData ? (
    <div>
      <div
        className="relative w-full h-screen bg-cover opacity-30"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`,
        }}
      >
        {/* <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel> */}
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default HeroCarousel;
