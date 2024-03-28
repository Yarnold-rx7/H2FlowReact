import React from "react";
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem";

export default function ProjectNews() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="mnf-carousel">
        <div className="container">
          <h3 class="text-center">
            <span style={{ color: "#00acd4" }}>Projects and News</span>
          </h3>
          <Carousel
            arrows={true}
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            shouldResetAutoplay={true}
            autoPlaySpeed={0}
            keyBoardControl={true}
            customTransition="transform 1000ms ease"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            <CarouselItem
              imgSrc={"cards/Bakkavor.png"}
              title="Bakkavor"
              desc="bakkavor stuff"
            ></CarouselItem>
            <CarouselItem
              imgSrc={"cards/PackagedPlant.jpg"}
              title="Packaged Plant"
              desc="A plant for packaging"
            ></CarouselItem>
            <CarouselItem
              imgSrc={"cards/rotoshear.jpg"}
              title="Rotoshear"
              desc="a screen"
            ></CarouselItem>
          </Carousel>
        </div>
      </section>
    </>
  );
}
