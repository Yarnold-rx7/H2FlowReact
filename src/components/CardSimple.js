import React from "react";

export default function CardSimple({ title, imgSrc }) {
  // const image = require(`../../public/img/cards/${imgSrc}`);

  return (
    <div className=" col-md-4 card">
      <img src={imgSrc} className="card-img-top" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}
