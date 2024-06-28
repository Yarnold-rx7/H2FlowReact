import React from "react";
import Card from "../../components/Card";

const daf = () => {
  return (
    <>
      <section className="banner daf-banner row d-flex justify-content-center">
        <div className="col-3 align-self-center">
          <img
            className="img-fluid mx-auto d-block rounded"
            src="../../img/H2Flow_DAF_THUMB.jpg"
            alt="H2Flow logo"
          />
        </div>
      </section>
      <div className="border-color-bottom">
        <div className="shadow" />
      </div>
      <section className="daf-technology">
        <div className="container daf-container">
          <h1 className="text-center text-light-blue mb-5 pt-5">
            H2FLOW DAF TECHNOLOGY
          </h1>
          <div className="row d-flex">
            <div className="col-6">
              <h5>
                H2FLow's Dissolved Air Flotation (DAF) technology is a highly
                efficient treatment system designed to remove Total Suspended
                Solids (TSS), Fats Oils and Grease (FOGs) Insoluble Biological
                Oxygen Demand (BODi), and other contaminants from wastewater.
              </h5>
              <p>
                This advanced process is widely utilized across various
                industries, including municipal water and astewater treatment,
                food and beverage plants, petrochemicals, electronics, pulp &
                paper, mining, and more.
              </p>
              <h4>Key Features and Benefits</h4>
              <ul>
                <li>
                  <span className="daf-list-titles">High Efficiency: </span>{" "}
                  Capable of removing up to 99% of suspended solids and oils
                </li>
                <li>
                  <span className="daf-list-titles">Compact Footprint: </span>
                  Requires less space compared to traditional sedimentation
                  systems.
                </li>
                <li>
                  <span className="daf-list-titles">Flexibility: </span>
                  Can be tailored to various flow rates and types of
                  contaminants
                </li>
                <li>
                  <span className="daf-list-titles">Easy Operation: </span>
                  Automated controls and user-friendly interfaces simplify
                  operation and maintenance.
                </li>
                <li>
                  <span className="daf-list-titles">Cost-Effective: </span>
                  Reduces the amount of chemistry needed and minimizes sludge
                  production, lowering overall treatment costs
                </li>
              </ul>
            </div>
            <div className="col-6">
              <img
                className="img-fluid"
                src="../../img/cards/dafModels/Alpha5Skid.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="daf-markets mb-5">
        <div className="container daf-container mt-3">
          <h3 className="text-center">Markets Serverd</h3>
          <ul className="row ms-5">
            <li className="col-4 market-list">Municipal Wastewater</li>
            <li className="col-4 market-list">Municipal Water Treatment</li>
            <li className="col-4 market-list">Food and Beverage</li>
            <li className="col-4 market-list">
              Transportation and Rail Serviced
            </li>
            <li className="col-4 market-list">Mining</li>
            <li className="col-4 market-list">Electronics</li>
            <li className="col-4 market-list">Oil & Gas</li>
            <li className="col-4 market-list">Recycling Facilities</li>
            <li className="col-4 market-list">Biogas Facilities</li>
            <li className="col-4 market-list">Power Generation</li>
            <li className="col-4 market-list">Automotive</li>
          </ul>
        </div>
      </section>
      <div className="border-color-bottom">
        <div className="shadow" />
      </div>
      <section className="daf-principals">
        <img
          className="daf-principals-img"
          src="../../img/bkrnds/home_parallax.jpg"
        />
        <div className="container daf-container daf-principals-container">
          <h3 className="my-5 text-center">Principal of Operation</h3>
          <div className="row">
            <img src="../../img/cards/dafModels/DAFschematic.png"></img>
          </div>
          <p>
            The core principle of DAF involves the introduction of air bubbles
            into the wastewater. These bubbles attach to the suspended
            particles, causing them to float to the surface. The floated
            materials are then skimmed off, resulting in cleaner effluent.
          </p>
          <h5 className="text-light-blue">
            The key components and stages of the DAF process are:
          </h5>
          <ul>
            <li className="row d-flex">
              <span className="daf-list-titles col-3">
                Pressurization & Saturation:
              </span>
              <p className="col-9">
                Air is mixed with the effluent stream of water at a high
                pressure to create a high concentration air/water mixture
              </p>
            </li>
            <li className="row d-flex">
              <span className="daf-list-titles col-3">Distribution:</span>
              <p className="col-9">
                The pressurized air-water mixture is released into the flotation
                tank at atmospheric pressure, forming microbubbles that rapidly
                float to the surface. The mixture is injected at strategic
                locations to intereact with the solids.
              </p>
            </li>
            <li className="row d-flex">
              <span className="daf-list-titles col-3">Flotation: </span>
              <p className="col-9">
                The Microbubbles attach to the suspended particles, causing them
                to rise to the surface, and form a sludge blanket.
              </p>
            </li>
            <li className="row d-flex">
              <span className="daf-list-titles col-3">Skimming:</span>{" "}
              <p className="col-9">
                The floated materials are skimmed off, while the clarified water
                is discharged from the center of the unit. Heavy materials, will
                settle at the bottom and will be combined with the surface
                sludge for discharge.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <div className="border-color-bottom">
        <div className="shadow" />
      </div>

      <section className="daf-models my-3">
        <div className="container daf-container">
          <h2 className="text-light-blue text-center my-5">
            H2FLOW DAF MODELS
          </h2>
          <div className="daf-models row d-flex">
            <Card
              title="Alpha Series"
              webUrl="/H2FlowReact/daf/alpha"
              imgSrc="../../img/cards/dafModels/alpha.png"
              desc="The Alpha flotation units are designed to treat wastewater with high solids loading. The capacity of the Alpha units range from 22 usgpm to 800 usgpm (5 m3/hr up to 180m3/hr."
            ></Card>
            <Card
              title="Delta Series"
              webUrl=""
              imgSrc="../../img/cards/dafModels/delta.png"
              desc="The Delta Series DAF systems use plate-pak technology to squeeze the highest possible surface area in the smallest footprint. Ideal for existing facilities where space is tight. Typical flow ranges vary from 22 gpm to 660gpm"
            ></Card>
            <Card
              title="Sigma Series"
              webUrl=""
              imgSrc="../../img/cards/dafModels/Sigma.jpg"
              desc="The Sigma Series DAF are super large Plate Pak systems. Flow range:2200 to 4400 usgpm"
            ></Card>
            <Card
              title="Gamma Series"
              webUrl=""
              imgSrc="../../img/cards/dafModels/Gamma.jpg"
              desc="The Delta Series DAF systems use plate-pak technology to squeeze the highest possible surface area in the smallest footprint. Ideal for existing facilities where space is tight. Typical flow ranges vary from 22 gpm to 660gpm"
            ></Card>
            <Card
              title="PWL Series"
              webUrl=""
              imgSrc="../../img/cards/dafModels/PWL.jpg"
              desc="The Delta Series DAF systems use plate-pak technology to squeeze the highest possible surface area in the smallest footprint. Ideal for existing facilities where space is tight. Typical flow ranges vary from 22 gpm to 660gpm"
            ></Card>
            <Card
              title="SPC Series"
              webUrl=""
              imgSrc="../../img/cards/dafModels/PWL.jpg"
              desc="The Delta Series DAF systems use plate-pak technology to squeeze the highest possible surface area in the smallest footprint. Ideal for existing facilities where space is tight. Typical flow ranges vary from 22 gpm to 660gpm"
            ></Card>
          </div>
          <p>Signa</p>
          <p>Alpha</p>
          <p>Pipe Flocculator</p>
        </div>
      </section>

      <section className="daf-outro">
        <p>
          H2FLow's Dissolved Air Flotation technology represents a cutting-edge
          solution for efficient and cost-effective wastewater treatment. Its
          ability to handle a variety of contaminants and adaptability to
          different operational requirements makes it a preferred choice for
          industries seeking to improve their wastewater management practices.
          By leveraging this advanced technology, facilities can achieve higher
          treatment performance, compliance with environmental regulations, and
          operational savings.
        </p>
      </section>
    </>
  );
};

export default daf;
