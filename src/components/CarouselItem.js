import React from "react";

export default function CarouselItem({ imgSrc, title, desc }) {
  const image = require(`../../public/img/${imgSrc}`);

  return (
    <div className="">
      <img src={image} className="img-fluid" alt="..." />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
