import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import "../../App.css";

function MyCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel" interval={3000}>
        <CarouselImage className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item className="carousel" interval={3000}>
        <CarouselImage />
      </Carousel.Item>
      <Carousel.Item className="carousel" interval={3000}>
        <CarouselImage />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
