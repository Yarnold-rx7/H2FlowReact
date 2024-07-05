import React from "react";
import { NavLink } from "react-router-dom";

export default function Sectors() {
  return (
    <>
      <section className="sector-headers">
        <div className="container">
          <div className="row">
            <h2 className="mb-4 mt-2 text-center parallax-header">
              We Serve the Following Sectors
            </h2>
            <div className="row treatment-sectors">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body p-3">
                    <h4 className="card-title">
                      Municipal Water &amp; Wastewater Treatment
                    </h4>
                    <NavLink className="card-link" to="./municipal">
                      <img
                        src={require("../img/cards/Muni_WWTP.jpg")}
                        style={{ height: 300 }}
                        className="card-img img-fluid"
                        alt="Municipal wwtp"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body p-3">
                    <h4 className="card-title">
                      Industrial Water and Wastewater Treatment
                    </h4>
                    <NavLink className="card-link" to="./industrial">
                      <img
                        src={require("../img/cards/DAF.jpg")}
                        style={{ height: 300 }}
                        className="card-img img-fluid"
                        alt="Industrial wwtp"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body p-3">
                    <h4 className="card-title">
                      Glass Fused to Steel and Stainless Steel Bolted Tanks
                    </h4>
                    <a className="card-link" href="./Municipal.html">
                      <img
                        src={require("../img/cards/Tanks.jpg")}
                        style={{ height: 300 }}
                        className="card-img img-fluid"
                        alt="a glass fused to steel tank"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
