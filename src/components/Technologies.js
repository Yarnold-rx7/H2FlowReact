import React from "react";
import TechnologyItem from "./TechnologyItem";

export default function Technologies() {
  return (
    <>
      <section className="technogies parallax-water">
        <div className="shadow-bottom" />
        <div className="container">
          <div className="row">
            <h2 className="mb-4 mt-2 parallax-header-white">
              We provide the Following Technologies
            </h2>
            <div className="row mb-4 tech-list">
              <div className="col-lg-6">
                <div className="list-group text-light">
                  <TechnologyItem
                    url="H2FlowReact/municipal/headworks"
                    title="HEADWORKS & SCREENING"
                  ></TechnologyItem>
                  <TechnologyItem title="UV AOP & DISINFECTION"></TechnologyItem>
                  <TechnologyItem title="BIOLOGICAL TREATMENT"></TechnologyItem>
                  <TechnologyItem title="AERATION & DIFFUSERS"></TechnologyItem>
                  <TechnologyItem title="PROCESS BLOWERS"></TechnologyItem>
                  <TechnologyItem title="DIGESTER MIXERS"></TechnologyItem>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="list-group text-light">
                  <TechnologyItem title="DISSOLVED AIR FLOTATION"></TechnologyItem>
                  <TechnologyItem title="CLARIFICATION / FILTRATION"></TechnologyItem>
                  <TechnologyItem title="AEROBIC & ANAEROBIC DIGESTERS"></TechnologyItem>
                  <TechnologyItem title="SLUDGE DEWATERING"></TechnologyItem>
                  <TechnologyItem title="ODOUR CONTROL"></TechnologyItem>
                  <TechnologyItem title="TANKS & COVERS"></TechnologyItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
