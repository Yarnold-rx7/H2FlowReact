import React from "react";

export default function Carousel({ name, webUrl, imgSrc, description }) {
  const image = require(`./img/${imgSrc}`);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name}></img>
      <div className="card-body">
        <a href={webUrl}>
          <h5 className="card-title">{name}</h5>
        </a>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
