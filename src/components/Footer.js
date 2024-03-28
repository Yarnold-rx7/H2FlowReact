import React from "react";
import Socials from "./Socials";

export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="../img/iso.png" className="mr-3" alt="ISO 9001:2015" />
              <img src="../img/isn.png" alt="ISN Certified" />
            </div>
            <div className="col-6 text-right">
              <Socials></Socials>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              H2FLOW EQUIPMENT INC © 2024
              <br />
              H2FLOW ™ is a registered trademark
            </div>
            <div className="col-md-6 footer-right">
              Offices in Toronto, Montreal and Vancouver
              <br />
              Toll Free: 1 (888) 575-8642 | Phone: (905) 660-9775
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
