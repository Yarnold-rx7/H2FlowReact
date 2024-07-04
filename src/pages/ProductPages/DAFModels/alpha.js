import React from "react";

const alpha = () => {
  return (
    <>
      <div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-12 pb-4">
              <h1 className="pt-4 text-blue">ALPHA FLOTATION UNIT</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-sm-8">
                  <h1>
                    <span style={{ color: "#656565" }}>
                      <strong>Alpha Series DAF</strong>
                    </span>
                  </h1>
                  <p>
                    <span style={{ color: "#00ACD4" }}>
                      <strong>
                        Alpha Dissolved Air Flotation (DAF) system:
                      </strong>
                    </span>
                  </p>
                  <p>
                    The Alpha flotation units are designed to treat wastewater
                    with high solids loading. The capacity of the Alpha units
                    range from 9 usgpm to 350 usgpm (2 m<sup>3</sup>/hr up to
                    80m<sup>3</sup>/hr).
                  </p>
                  <p>
                    The Alpha series are designed to create the best conditions
                    for easy separation of the solids. The open style design
                    with the large free surface area and long retention time
                    guarantee optimum separation performance. The solids float
                    to the surface and are collected by the sludge rake
                    mechanism and transported to the sludge hopper with a low
                    friction scraper system. The collected sludge is transported
                    with a sludge pump to a sludge tank or dewatering. The
                    Alpha+ flotation unit is equipped with a sludge conveyor for
                    discharge of heavy solids.
                    <br />
                    <br />
                  </p>
                  <p>
                    <span style={{ color: "#00ACD4" }}>
                      <strong>Advantages of the Alpha DAF unit:</strong>
                    </span>
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <ul className="orange-dots">
                        <li>Suitable for heavily polluted wastewater</li>
                        <li>
                          Large free surface area and long retention time for
                          optimum separation performance
                        </li>
                        <li>
                          Low maintenance low friction skimmer system with
                          internal sludge collection chamber
                        </li>
                        <li>Adjustable double length weir tray</li>
                        <li>Efficient air/water saturation system</li>
                        <li>Completely manufactured out of stainless steel</li>
                        <li>
                          Units are available pre-installed in an ISO shipping
                          container, plug and play
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  To find out more about this specific product please click on
                  the link below:
                  <br />
                  <a
                    href="/media/uploads/2022/01/24/alpha-combined-tech-sheet-h2flow.pdf"
                    target="_blank"
                  >
                    ALPHA DAF Product Sheet.pdf
                  </a>
                  <br />
                  <button
                    className="mt-3 btn btn-success"
                    onclick="window.open('/media/uploads/2022/01/24/alpha-combined-tech-sheet-h2flow.pdf')"
                  >
                    <i aria-hidden="true" className="fa fa-file-pdf-o mr-1"></i>
                    DOWNLOAD
                  </button>
                </div>
                <div className="d-none d-sm-block col-sm-4">
                  <img
                    alt
                    className="img-fluid rounded d-block"
                    src={require("../../../img/cards/dafModels/Alpha.png")}
                    style={{ marginTop: "3.7rem" }}
                  />{" "}
                  <img
                    alt
                    className="img-fluid rounded d-block"
                    src={require("../../../img/cards/dafModels/Alpha5Skid.png")}
                    style={{ marginTop: "1rem" }}
                  />
                  <br />
                  <img
                    alt
                    className="img-fluid rounded d-block"
                    src={require("../../../img/cards/dafModels/01_products_sub_alpha_03.png")}
                    style={{ marginTop: "1rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default alpha;
