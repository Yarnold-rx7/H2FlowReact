import React from "react";
import HomeWording from "../img/Home_Wording.png";

export default function HeaderWording() {
  return (
    <>
      <div className="header_slideshow border-color-bottom">
        <div className="container">
          <img
            className="img-fluid d-block mx-auto px-4"
            style={{ maxHeight: 220 }}
            src={HomeWording}
            alt="Technologies for Clean water, wastewater, Biosolids, and Biogas Treatment"
          />
        </div>
        <div className="shadow" />
      </div>
    </>
  );
}
