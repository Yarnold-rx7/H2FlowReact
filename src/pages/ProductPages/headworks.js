// Filename - pages/index.js

import React from "react";
import "react-multi-carousel/lib/styles.css";
import HeaderWording from "../../components/HeaderWording";
import Footer from "../../components/Footer";
import ProdIntro from "../../components/Products/Headworks/ProdIntro";
import Card from "../../components/Card";

const Index = () => {
  return (
    <div>
      <div className="site-container">
        <div className="page-content">
          <HeaderWording></HeaderWording>
          <div className="page-content">
            <section className="banner">
              <div className="row flex image-banner justify-content-center my-3">
                <div className="col-md-10 text-center">
                  <img
                    src="../img/cards/rotoshear.jpg"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="container">
                <ProdIntro title="Headworks and Screening"></ProdIntro>
                {/*Title Banner*/}
                <div className="mt-5 row water-intake-section">
                  <div className="row intake-title">
                    <h5>Raw Water Intake Screens</h5>
                    <div className="row flex justify-content-center">
                      <Card
                        title="Parkson Aquaguard"
                        webUrl="https://www.parkson.com/products/aqua-guard"
                        imgSrc="../../img/cards/aqua-guard.jpg"
                        desc="The Aqua Guard® is a rugged and proven
                          self-cleaning, traveling water screen that uses a
                          unique filter element system, which automatically
                          removes a wide range of floating and suspended
                          solids from a wastewater stream."
                      ></Card>
                      <Card
                        title="Parkson Aquacaiman"
                        webUrl="https://www.parkson.com/products/aqua-caiman"
                        imgSrc="../../img/cards/aquacaiman_main.jpg"
                        desc="The Aqua Caiman® represents the next generation of
                          mechanical bar screens. In designing the screen,
                          Parkson combined over 40 years of experience
                          working on thousands of in-channel screen
                          installations with in-depth market and engineering
                          research."
                      ></Card>
                      <Card
                        title="Atlas-SSI Travelling Screens"
                        webUrl="https://www.atlas-ssi.com/intake-screens/traveling-water-screens/"
                        imgSrc="../../img/cards/Atlas_ssi_screen.jpg"
                        desc="We build our heavy-duty ATLAS-SSI screens for high
                        performance and low maintenance. You can add a
                        Ristroph fish collection basket assembly to comply
                        with 316(b) fish handling regulations. Choose from
                        stainless steel or carbon steel coated with an
                        immersion-rated epoxy."
                      ></Card>
                    </div>
                  </div>
                </div>
                {/*Screening Section - Raw Water*/}
                <div className="row wastewater-section mt-5">
                  <div className="row intake-title">
                    <h5>Wastewater Screening</h5>
                    <div className="row flex justify-content-center">
                      <div className="col-md-4">
                        <div className="card" style={{ width: "18rem" }}>
                          <img
                            className="card-img-top"
                            src="../cards/rotoshear.jpg"
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h5 className="card-title">Parkson Rotoshear</h5>
                            <p className="card-text">
                              In wastewater treatment plants, the Hycor®
                              Rotoshear® unit is renowned as an internally fed
                              rotary screen for pretreatment and primary
                              treatment to replace primary clarifiers. They are
                              also used as sludge screens. Industrial users,
                              such as meat processors, food processors,
                              tanneries, textile mills, petrochemical plants,
                              and recyclers, rely on it for product recovery and
                              wastewater treatment. Pulp and paper mills use it
                              for fiber recovery and rejects handling.
                            </p>
                            <a
                              href="https://www.parkson.com/products/hycor-rotoshear"
                              className="btn btn-primary"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card" style={{ width: "18rem" }}>
                          <img
                            className="card-img-top"
                            src="../cards/fluiteco_IFD.jpg"
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h5 className="card-title">H2Flow IFD Series</h5>
                            <p className="card-text">
                              Designed specifically for small to medium sized
                              industrial plants.
                            </p>
                            <a href="#" className="btn btn-primary">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card" style={{ width: "18rem" }}>
                          <img
                            className="card-img-top"
                            src="../cards/in_channel_screen.jpg"
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h5 className="card-title">In-Channel Screens</h5>
                            <p className="card-text">
                              Designed to screen directly out of a channel
                              without the need to pump.
                            </p>
                            <a href="#" className="btn btn-primary">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Screening Section - Wastewater*/}
                <div className="row grit-section mt-5">
                  <div className="row grit-title">
                    <h5>Grit Removal Systems</h5>
                    <div className="row flex justify-content-start">
                      <div className="col-md-8 list-group">
                        <a
                          href="https://www.ovivowater.com/en/technologies/grit-removal/"
                          className="list-group-item list-group-item-action"
                        >
                          Ovivo - Detritor, Grit Trap, Classifiers, Compactors
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Atara - Grit Classifier
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Screening Section - Grit*/}
                <div className="row grinder-section mt-5">
                  <div className="row grinder-title">
                    <h5>Grinders, Shredders, and Macerators</h5>
                    <div className="row flex justify-content-start">
                      <div className="col-md-8 list-group">
                        <a
                          href="https://www.ovivowater.com/en/technologies/grit-removal/"
                          className="list-group-item list-group-item-action"
                        >
                          In-Channel Grinders
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          In-Line Grinders
                        </a>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          Septage Receiving Stations
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Screening Section - Grinders*/}
              </div>
            </section>
          </div>
          ;
        </div>
        <Footer></Footer>
      </div>
      {/* Show four images at once */}
    </div>
  );
};

export default Index;
