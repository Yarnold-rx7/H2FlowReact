import React from "react";
import TechnologyItem from "../components/TechnologyItem";
import CardSimple from "../components/CardSimple";
// import Card from "../components/Card";
import CardInternal from "../components/CardInternal";

const Industrial = () => {
  return (
    <>
      <div className="row industrial_header flex align-items-center">
        <h1 className="industrial_title text-center">
          Industrial Water and Wastewater Treatment
        </h1>
      </div>
      <div className="border-color-bottom">
        <div className="shadow" />
      </div>
      <section className="container">
        <div className="row flex industrial-body">
          <h4 className="industrial-body-text my-5">
            H2Flow Equipment Inc. is a leading provider of cutting-edge water
            and wastewater treatment technologies. With a strong commitment to
            excellence, H2Flow designs and supplies customized solutions for
            both industrial and municipal applications. H2Flow excels in several
            key factors:
          </h4>
        </div>
      </section>
      <section className="indusrty-experience container">
        <h5>Industry Experience</h5>
        <p>
          Our team collaborates closely with plant engineers, operators,
          consulting engineers, and contractors. We understand the unique
          challenges faced by various industries, including power generation,
          food processing, mining, automotive, pulp and paper, metalworking,
          steel production, chemicals, and petrochemicals.
        </p>
        <h5>Comprehensive Solutions</h5>
        <p>
          At H2Flow, we offer complete water and wastewater treatment systems
          tailored to your specific requirements. Whether you need a
          pre-engineered unit or a custom-designed solution, we’ve got you
          covered. Our expertise spans a wide range of processes, including
          filtration, disinfection, solids removal, and oil-water separation.
        </p>
        <h5>Cutting Edge Technologies</h5>
        <p>
          We stay at the forefront of technological advancements. Our portfolio
          includes:
        </p>
        <p>
          <div class="row">
            <div class="col-md-3">Ultrafiltration</div>
            <div class="col-md-3">Microfiltration</div>
            <div class="col-md-3">Nanofiltration</div>
            <div class="col-md-3">Reverse Osmosis</div>
            <div class="col-md-3">Ultraviolet Disinfection & AOP</div>
            <div class="col-md-3">Dissolved Air Flotation</div>
            <div class="col-md-3">Inclined Plate Clarifiers</div>
            <div class="col-md-3">Oil-water separators</div>
            <div class="col-md-3">MBBRs and MBRs</div>
            <div class="col-md-3">Anaerobic Digesters</div>
            <div class="col-md-3">Screening and grit removal</div>
            <div class="col-md-3">Odour Control</div>
            <div class="col-md-3">Process Blowers</div>
            <div class="col-md-3">Mixers</div>
            <div class="col-md-3">Bulk Handling systems</div>
            <div class="col-md-3">and more...</div>
          </div>
        </p>

        <h5>Service Commitment</h5>
        <p>
          Beyond equipment supply, we provide ongoing support. Our skilled
          professionals offer operation assistance, troubleshooting, and on-site
          training for operators and maintenance personnel. Service contracts
          ensure smooth equipment operation and long-term reliability.
        </p>
        <h5>Global Impact</h5>
        <p>
          H2Flow actively participates in local, national, and international
          projects. We have installations in Canada, USA, Africa, and South
          America!
        </p>
      </section>
      <section className="container industrial-outro">
        <h4>
          Whether you’re seeking efficient water or wastewater treatment
          solutions, H2Flow Equipment Inc. is your trusted partner!
        </h4>
      </section>
      <section className="product-spotlight py-5">
        <div className=" mx-auto row product-spotlight-content container justify-content-center">
          <h3 className="text-center text-light">Product Spotlights</h3>

          <CardInternal
            title="H2Flow DAF Systems"
            imgSrc={require("../img/cards/DAF.jpg")}
            url="../H2FlowReact/daf"
          />

          <CardInternal
            title="H2Flow MBBRs"
            imgSrc={require("../img/cards/MBBR.jpg")}
            url="../H2FlowReact/daf"
          />
          <CardInternal
            title="H2Flow Tanks"
            imgSrc={require("../img/cards/Tanks.jpg")}
            url="../H2FlowReact/daf"
          />
        </div>
      </section>
    </>
  );
};

export default Industrial;
