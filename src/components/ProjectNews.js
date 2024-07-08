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
      <section className="project-news">
        <div className="container">
          <h3 class="text-center">
            <span className="text-dark">Projects and News</span>
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
              imgSrc={"cards/aqua-guard.jpg"}
              title="Municipal WWTP Screening"
              desc="Aquaguard intake screens at a wastewater treatment plant"
            ></CarouselItem>
            <CarouselItem
              imgSrc={"cards/PackagedPlant.jpg"}
              title="Packaged WWTP"
              desc="A packaged wastewater faciility for a mining camp"
            ></CarouselItem>
            <CarouselItem
              imgSrc={"cards/rotoshear.jpg"}
              title="Rotoshear"
              desc="Rotary intake screens used in a municipal wastewater facility"
            ></CarouselItem>
          </Carousel>
        </div>
      </section>
    </>
  );
}
