import React from "react";
import MuniOnWastewater from "../components/MuniOntarioWastewater";
import MuniOnWater from "../components/Products/MuniOntarioWater";

const Municipal = () => {
  return (
    <>
      <section className="muni-header">
        {" "}
        <div className="row industrial_header flex align-items-center">
          <h1 className="industrial_title text-center">Municipal Solutions</h1>
        </div>
      </section>
      <div className="py-4 border-color-top"></div>

      <section className="muni-intro">
        <div className="muni-intro-content container mb-5">
          <h5>
            H2Flow Equipment Inc. stands at the forefront of providing
            cutting-edge technologies for municipal water and wastewater
            treatment. Suppling water and wastewater treatment equipment for
            over thirty years!
          </h5>
        </div>
      </section>
      <section className="muni-content">
        <div className="container muni-content">
          <h5>Manufacturer's representitive</h5>
          <p>
            H2Flow collaborates with worldclass manufacturers, bridging the gap
            between technology creators and end-users. Our extensive network
            allows us to introduce state-of-the-art equipment for every unit
            operation of a plant, from headworks to disinfection!
          </p>
          <h5>Industry Leader</h5>
          <p>
            With ISO 9001:2015 certification, H2Flow is committed to excellence.
            Our collaboration extends to plant engineers, operators, consulting
            engineers, and contractors, ensuring seamless integration of our
            solutions.
          </p>
          <h5>Service Commitment</h5>
          <p>
            Our promise extends beyond equipment supply. We provide ongoing
            support, troubleshooting, and operator training. Service contracts
            ensure reliable equipment operation.
          </p>
        </div>
      </section>
      <section className="province">
        <div className="container province-select">
          <h3>
            For a list of the manufactures we represent, please select a
            Territory
          </h3>
          <p>Ontario</p>
          <p>Quebec</p>
          <p>Maritimes</p>
          <p>Western Canada</p>
        </div>
      </section>
      <div className="col-12 pb-4 container">
        <MuniOnWastewater />
        <MuniOnWater />
      </div>
    </>
  );
};

export default Municipal;
