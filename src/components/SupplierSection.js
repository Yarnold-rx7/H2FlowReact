import React from "react";
import Carousel from "react-multi-carousel";
import CarouselItem from "./CarouselItem";

export default function SupplierSeciton() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
            <span style={{ color: "#00acd4" }}>
              Some of Our Technolgy Providers
            </span>
          </h3>
          <Carousel
            arrows={false}
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            shouldResetAutoplay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            customTransition="transform 5000ms ease"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            <CarouselItem imgSrc={"Aerzen.jpg"}></CarouselItem>
            <CarouselItem imgSrc={"Ovivo.jpg"}></CarouselItem>
            <CarouselItem imgSrc={"AdEdge.jpg"}></CarouselItem>
            <CarouselItem imgSrc={"AWC.png"}></CarouselItem>
            <CarouselItem imgSrc={"TrojanUV.jpg"}></CarouselItem>
          </Carousel>
          <div className="mt-5">
            <Carousel
              arrows={false}
              swipeable={false}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              shouldResetAutoplay={true}
              autoPlaySpeed={10000}
              keyBoardControl={true}
              customTransition="transform 5000ms ease"
              transitionDuration={5000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              itemClass="carousel-item-padding-40-px"
            >
              <CarouselItem imgSrc={"Parkson.jpg"}></CarouselItem>
              <CarouselItem imgSrc={"Next-turbo.png"}></CarouselItem>
              <CarouselItem imgSrc={"Protectolite.jpg"}></CarouselItem>
              <CarouselItem imgSrc={"Fluence.jpg"}></CarouselItem>
              <CarouselItem imgSrc={"tilt.png"}></CarouselItem>
            </Carousel>
          </div>

          <Carousel
            arrows={false}
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            shouldResetAutoplay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            customTransition="transform 5000ms ease"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            <CarouselItem imgSrc={"NuoveEnergie.png"}></CarouselItem>
            <CarouselItem imgSrc={"MRI.jpg"}></CarouselItem>
            <CarouselItem imgSrc={"Moleaer.jpg"}></CarouselItem>
            <CarouselItem imgSrc={"Vincent.jpg"}></CarouselItem>
            <CarouselItem imgSrc={"TPS.jpg"}></CarouselItem>
          </Carousel>
        </div>
      </section>
    </>
  );
}
