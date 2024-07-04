import React from "react";
import MuniOntario from "../components/MuniOntario";

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
                <MuniOntario />
                <hr />
              </div>
            </div>
          </div>
          <div className="py-4 border-color-top">
            {" "}
            <div className="container">
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturers;
