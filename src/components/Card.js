import React from "react";

export default function Card({ title, webUrl, imgSrc, desc }) {
  // const image = require(`../../public/img/cards/${imgSrc}`);

  return (
    <div className=" col-md-4 card">
      <img src={imgSrc} className="card-img-top" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a
          href={webUrl}
          class="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
