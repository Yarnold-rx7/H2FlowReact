import React from "react";
import Municipal from "../components/Municipal";

const Manufacturers = () => {
  return (
    <div>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>H2Flow Equipment Inc - Water and Wastewater Treatment</title>
      <meta
        name="keywords"
        content="Hybrid Blower Ontario, Centrifugal Blower Ontario, Aerzen Ontario, Continental Blower Ontario, BlueinGreen Ontario"
      />
      <meta
        name="description"
        content="H2Flow supplies processes and equipment for water and wastewater treatment for industrial and municipal use and actively works with plant engineers & operators, consulting engineers and contractors."
      />
      <div className="site-container">
        <div className="page-content">
          <div className="container pb-4">
            <div className="row">
              <div className="col-12 pb-4">
                <h1 className="pt-4">Manufacturers Represented in Ontario</h1>
                <a href="https://h2flow.com/content/english/manufacturers">
                  Change Location
                </a>
                <hr />{" "}
              </div>
            </div>
            <div className="row">
              <Municipal />
            </div>
          </div>
          <div className="py-4 border-color-top">
            {" "}
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
        </div>
        <footer className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/iso.png"
                  className="mr-3"
                />
                <img src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/isn.png" />
              </div>
              <div className="col-6 text-right">
                <div className="form-group social_icons">
                  <a
                    href="https://www.linkedin.com/company/h2flow"
                    target="_blank"
                  >
                    <div
                      style={{
                        padding: ".35rem",
                        display: "inline-block",
                        background: "rgba(255, 255, 255, 1)",
                        borderRadius: ".25rem",
                        height: 36,
                        width: 36,
                      }}
                    >
                      <img
                        className="w-100 h-100"
                        src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/LinkedIn-color.svg"
                        alt="H2Flow LinkedIn"
                      />
                    </div>
                  </a>
                  {/*
                   */}
                  <a
                    href="https://www.youtube.com/user/H2FlowEquipment"
                    target="_blank"
                  >
                    <div
                      style={{
                        padding: ".35rem",
                        display: "inline-block",
                        background: "rgba(255, 255, 255, 1)",
                        borderRadius: ".25rem",
                        height: 36,
                        width: 36,
                      }}
                    >
                      <img
                        className="w-100 h-100"
                        src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/Youtube-color.svg"
                        alt="H2Flow YouTube"
                      />
                    </div>
                  </a>
                  {/*
                   */}
                  <a
                    href="https://www.facebook.com/pages/H2Flow/197933136904136"
                    target="_blank"
                  >
                    <div
                      style={{
                        padding: ".35rem",
                        display: "inline-block",
                        background: "rgba(255, 255, 255, 1)",
                        borderRadius: ".25rem",
                        height: 36,
                        width: 36,
                      }}
                    >
                      <img
                        className="w-100 h-100"
                        src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/Facebook-color.svg"
                        alt="H2Flow Facebook"
                      />
                    </div>
                  </a>
                  {/*
                   */}
                  <a
                    href="https://www.instagram.com/h2flowequipment"
                    target="_blank"
                  >
                    <div
                      style={{
                        padding: ".35rem",
                        display: "inline-block",
                        background: "rgba(255, 255, 255, 1)",
                        borderRadius: ".25rem",
                        height: 36,
                        width: 36,
                      }}
                    >
                      <img
                        className="w-100 h-100"
                        src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/Instagram-black.svg"
                        alt="H2Flow Instagram"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                H2FLOW EQUIPMENT INC © 2023
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
      </div>
    </div>
  );
};

export default Manufacturers;
