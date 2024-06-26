import React from "react";
import TechnologyItem from "../components/TechnologyItem";
import CardSimple from "../components/Card";

const Industrial = () => {
  return (
    <>
      <div className="row industrial_header flex align-items-end">
        <h1 className="industrial_title text-center">
          Industrial Water and Wastewater Treatment
        </h1>
      </div>
      <div className="row flex industrial-body">
        <p className="industrial-body-text">
          H2Flow designs and supplies treatment technologies for all types of
          industrial clean water and wastewater applications.
        </p>
      </div>
      <div>
        <h5>We serve the following industrial sectors</h5>
        <div className="row mb-4 tech-list">
          <CardSimple title="Food and Beverage" imgSrc="" />
          <CardSimple title="Food and Beverage" imgSrc="" />
        </div>
      </div>
      <div>
        <h5>We supply the following treatment technologies</h5>
        <div className="row mb-4 tech-list">
          <div className="col-lg-6">
            <div className="list-group text-light">
              <TechnologyItem title="DISSOLVED AIR FLOTATION"></TechnologyItem>
              <TechnologyItem title="BIOLOGICAL TREATMENT"></TechnologyItem>
              <TechnologyItem title="AERATION & DIFFUSERS"></TechnologyItem>
              <TechnologyItem title="PROCESS BLOWERS"></TechnologyItem>
              <TechnologyItem title="MIXERS"></TechnologyItem>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="list-group text-light">
              <TechnologyItem title="CLARIFICATION / FILTRATION"></TechnologyItem>
              <TechnologyItem title="AEROBIC & ANAEROBIC DIGESTERS"></TechnologyItem>
              <TechnologyItem title="SLUDGE DEWATERING"></TechnologyItem>
              <TechnologyItem title="ODOUR CONTROL"></TechnologyItem>
              <TechnologyItem title="TANKS & COVERS"></TechnologyItem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industrial;
