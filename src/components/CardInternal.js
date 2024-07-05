import React from "react";
import { NavLink } from "./Navbar/NavbarElements";

export default function CardInternal({ title, url, imgSrc, desc }) {
  // const image = require(`../../public/img/cards/${imgSrc}`);

  return (
    <div className=" col-md-3 card px-0 mx-2">
      <img src={imgSrc} className="card-img-top" alt={title}></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <NavLink to={url} class="btn btn-primary">
          Read More
        </NavLink>
      </div>
    </div>
  );
}
