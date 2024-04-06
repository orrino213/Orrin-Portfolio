import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import "../../../App.css";
function MyCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel" interval={2100}>
        <CarouselImage />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>5521 Kester Ave #12, Sherman Oaks, CA 91411</h5>
          <h1>$850,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel" interval={2100}>
        <CarouselImage />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>5521 Kester Ave #12, Sherman Oaks, CA 91411</h5>
          <h1>$850,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel" interval={2100}>
        <CarouselImage />
        <Carousel.Caption className="carousel-caption">
          <h3>Funded!!!</h3>
          <h5>5521 Kester Ave #12, Sherman Oaks, CA 91411</h5>
          <h1>$850,000</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
