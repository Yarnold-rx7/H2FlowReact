import React from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  const items = document.querySelectorAll(".carousel1 .carousel-item1");
  items.forEach((e) => {
    const slide = 5;
    let next = e.nextElementSibling;
    for (let i = 0; i < slide; i++) {
      if (!next) {
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      e.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }

    const items2 = document.querySelectorAll(".carousel2 .carousel-item2");
    items2.forEach((e) => {
      const slide = 5;
      let next = e.nextElementSibling;
      for (let i = 0; i < slide; i++) {
        if (!next) {
          next = items2[0];
        }
        let cloneChild = next.cloneNode(true);
        e.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });

    const items3 = document.querySelectorAll(".carousel3 .carousel-item3");
    items3.forEach((e) => {
      const slide = 5;
      let next = e.nextElementSibling;
      for (let i = 0; i < slide; i++) {
        if (!next) {
          next = items3[0];
        }
        let cloneChild = next.cloneNode(true);
        e.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  });
  return (
    <>
      <div
        id="carouselMnfAutoplay1"
        className="carousel carousel1"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselItem imgSrc="Aerzen.jpg"></CarouselItem>
          <CarouselItem imgSrc="TrojanUV.jpg"></CarouselItem>
          <CarouselItem imgSrc="AdEdge.jpg"></CarouselItem>
          <CarouselItem imgSrc="Biorem.jpg"></CarouselItem>
          <CarouselItem imgSrc="Fluence.jpg"></CarouselItem>
          <CarouselItem imgSrc="Ovivo.jpg"></CarouselItem>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMnfAutoplay1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMnfAutoplay1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carouselMnfAutoplay2"
        className="carousel carousel2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselItem imgSrc="Parkson.jpg"></CarouselItem>
          <CarouselItem imgSrc="Aerzen.jpg"></CarouselItem>
          <CarouselItem imgSrc="Atlas-SSI.jpg"></CarouselItem>
          <CarouselItem imgSrc="Biowater.gif"></CarouselItem>
          <CarouselItem imgSrc="EDI.png"></CarouselItem>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMnfAutoplay2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMnfAutoplay2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        id="carouselMnfAutoplay3"
        className="carousel carousel3"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active carousel-item3">
            <div className="col-md-3">
              <div className="card carousel-card">
                <div className="card-body">
                  <img
                    src="../img/Continental.jpg"
                    className="card-img carousel-card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item3">
            <div className="col-md-3">
              <div className="card carousel-card">
                <div className="card-body">
                  <img
                    src="../img/Atara.jpg"
                    className="card-img carousel-card-img img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item3">
            <div className="col-md-3">
              <div className="card carousel-card">
                <div className="card-body">
                  <img
                    src="../img/Fluidyne.jpg"
                    className="card-img carousel-card-img img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item3">
            <div className="col-md-3">
              <div className="card carousel-card">
                <div className="card-body">
                  <img
                    src="../img/FranklinMill.jpg"
                    className="card-img carousel-card-img img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item3">
            <div className="col-md-3">
              <div className="card carousel-card">
                <div className="card-body">
                  <img
                    src="../img/H2FlowDAF.jpg"
                    className="card-img carousel-card-img img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMnfAutoplay3"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMnfAutoplay3"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
