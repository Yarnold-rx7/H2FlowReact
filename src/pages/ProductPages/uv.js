import React from "react";
import Card from "../../components/Card";

const uv = () => {
  return (
    <>
      <section className="banner uv-banner row d-flex justify-content-center">
        <div className="align-self-center">
          <h1 className="text-center text-light">UV AOP & DISINFECTION</h1>
        </div>
      </section>
      <div className="border-color-bottom">
        <div className="shadow" />
      </div>
      <section className="UV-technology pt-5">
        <div className="container uv-container">
          <div className="row d-flex">
            <div className="col-6">
              <h5>
                H2FLow Equipment Represents Trojan UV Systems in Ontario
                municipally and across canada Industrially.
              </h5>
              <h5>
                Trojan UV Technologies is a leading provider of ultraviolet (UV)
                treatment solutions for water and wastewater applications.
              </h5>
              <p>
                This advanced process is widely utilized across various
                industries, including municipal water and astewater treatment,
                food and beverage plants, petrochemicals, electronics, pulp &
                paper, mining, and more.
              </p>
            </div>
            <div className="col-6">
              <img
                className="img-fluid"
                src={require("../../img/cards/uvModels/signa.jpg")}
                alt="uv Skid assembly"
              />
            </div>
          </div>
        </div>
        <section className="uv-benefits">
          <div className="container">
            <h4 className="my-5">Key Features and Benefits</h4>
            <ul>
              <li className="row d-flex">
                <span className="uv-list-titles col-3">
                  Microbiological Inactivation via Ultraviolet Light:
                </span>

                <p className="col-9">
                  UV light occupies the portion of the electromagnetic spectrum
                  between X-rays and visible light. A specific range of UV
                  wavelengths (between 200 and 300 nanometers) is capable of
                  inactivating microorganisms such as Cryptosporidium and
                  Giardia. UV treatment provides rapid, effective inactivation
                  of microorganisms through a physical process
                </p>
              </li>
              <li className="row d-flex">
                <span className="uv-list-titles col-3">
                  How UV Light Treats Water:
                </span>
                <p className="col-9">
                  Unlike standard incandescent bulbs, UV lamps contain a small
                  amount of mercury vapor. When microorganisms are exposed to UV
                  light, their DNA is damaged, preventing replication. Thymine
                  dimers form in the DNA, rendering microorganisms incapable of
                  reproducing. UV light has demonstrated efficacy against
                  organisms responsible for diseases like cholera, polio,
                  typhoid, and hepatitis.
                </p>
              </li>
              <li className="row d-flex">
                <span className="uv-list-titles col-3">
                  Effectiveness of UV Treatmen:
                </span>
                <p className="col-9">
                  Requires no transportation, storage, or handling of chemicals.
                  Does not create carcinogenic by-products. Inactivates a broad
                  range of microorganisms, including chlorine-resistant
                  Cryptosporidium and Giardia.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="uv-markets mb-5">
        <div className="container uv-container mt-3">
          <h3 className="text-center">Markets Serverd</h3>
          <ul className="row ms-5">
            <li className="col-4 market-list">Municipal Wastewater</li>
            <li className="col-4 market-list">Municipal Water Treatment</li>
            <li className="col-4 market-list">Food and Beverage</li>
            <li className="col-4 market-list">Electronics</li>
            <li className="col-4 market-list">Power Generation</li>
            <li className="col-4 market-list">Automotive</li>
          </ul>
        </div>
      </section>
      <div className="border-color-bottom">
        <div className="shadow" />
      </div>

      <div className="border-color-bottom">
        <div className="shadow" />
      </div>

      <section className="uv-models my-3">
        <div className="container uv-container">
          <h2 className="text-light-blue text-center my-5">Trojan UV MODELS</h2>
          <div className="uv-models row d-flex">
            <Card
              title="Trojan UV3000 Plus"
              webUrl="https://www.trojantechnologies.com/en/products/municipal/systems/trojanuv3000plus?origin=dropdown&c1=products&c2=municipal&c3=trojanuv3000plus&clickedon=trojanuv3000plus"
              imgSrc={require("../../img/cards/uvModels/Trojan3000plus.png")}
              desc="The TrojanUV3000Plus® is one of the reasons why UV is now a favored technology in wastewater treatment. As our leading UV system, it has demonstrated effective and reliable performance on six continents where more than 2,000 municipalities rely on it to treat over 30 billion gallons of wastewater every day."
            ></Card>
            <Card
              title="Trojan UVSigna"
              webUrl="https://www.trojantechnologies.com/en/products/municipal/systems/trojanuvsigna?origin=dropdown&c1=products&c2=municipal&c3=trojanuvsigna&clickedon=trojanuvsigna"
              imgSrc={require("../../img/cards/uvModels/signa.jpg")}
              desc="The TrojanUVSigna® incorporates innovations, including TrojanUV Solo Lamp® Technology, to reduce the total cost of ownership and drastically simplify operation and maintenance. It is an ideal solution for wastewater treatment plants in need of revolutionary UV technology."
            ></Card>
            <Card
              title="Trojan FlexAOP"
              webUrl="https://www.trojantechnologies.com/en/products/municipal/systems/trojanuvflexaop?origin=dropdown&c1=products&c2=municipal&c3=trojanuvflexaop&clickedon=trojanuvflexaop"
              imgSrc={require("../../img/cards/uvModels/uvFlex.jpg")}
              desc="Meeting the demand for clean water has never been more challenging. Communities around the world are facing a growing water stress – an insufficient supply, in terms of water quality or water quantity – and often both. Many are turning to potable reuse and drinking water remediation to meet these demands. The TrojanUVFlex®AOP can be part of the solution. This UV advanced oxidation system has been used to break down 1,4-dioxane, NDMA, MIB and Geosmin."
            ></Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default uv;
