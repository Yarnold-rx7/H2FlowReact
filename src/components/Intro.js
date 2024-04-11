import React from "react";

export default function Intro() {
  return (
    <section className="intro">
      <div className="bg-white py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h1>
                <span style={{ color: "#00acd4" }}>H2Flow Equipment Inc.</span>
              </h1>
              <p />
              <h3>Who we are</h3>
              <p>
                H2Flow is a Canadian based wate and wastewater treatment
                equipment supplier, and manufacturer's representive celebrating
                over thirty years in business.
              </p>
              <h3>What we do</h3>
              <p>
                H2Flow designs and supplies water and wastewater treatment
                equipment, specific for each application. We have years of
                experience to know that each application is unique and we treat
                each one with attention and care.
              </p>
              <h3>Who we serve</h3>
              <p>
                We serve both industrial and municipal clients, and collaborate
                closely with plant engineers, operators, consulting engineers,
                and contractors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-color-bottom">
        <div className="shadow" />
      </div>
    </section>
  );
}
