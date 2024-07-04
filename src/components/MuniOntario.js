import React from "react";
import Card from "./Card";

export default function Municipal() {
  return (
    <>
      <h2>MUNICIPAL SOLUTIONS</h2>
      <h4>WASTEWATER TREATMENT</h4>

      <div className="accordion" id="wastewaterList">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#wastewaterList-collapseOne"
              aria-expanded="true"
              aria-controls="wastewaterList-collapseOne"
            >
              Headworks and Conveying
            </button>
          </h2>
          <div
            id="wastewaterList-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#wastewaterList"
          >
            <div className="accordion-body">
              <Card
                name="Atara"
                webUrl="https://www.atarequipment.com"
                imgSrc={require("../img/Atara.jpg")}
              />
            </div>
          </div>
        </div>
        {/*Headworks Wastewater*/}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#wastewaterList-collapseTwo"
              aria-expanded="false"
              aria-controls="wastewaterList-collapseTwo"
            >
              Primary Treatment
            </button>
          </h2>
          <div
            id="wastewaterList-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#wastewaterList"
          >
            <div className="accordion-body" />
            <Card
              name="Ovivo"
              webUrl="https://www.ovivowater.com"
              imgSrc={require("../img/Ovivo.jpg")}
            />
          </div>
        </div>
        {/*Primary Treatment Wastewater*/}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#wastewaterList-collapseThree"
              aria-expanded="false"
              aria-controls="wastewaterList-collapseThree"
            >
              Aeration and Blowers
            </button>
          </h2>
          <div
            id="wastewaterList-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#wastewaterList"
          >
            <div className="accordion-body">
              {/* <Card
                name="Aerzen"
                webUrl="https://www.aerzen.com/en-ca.html"
                imgSrc="Aerzen.jpg"
                description="This is Aerzen Blowers"
              /> */}
            </div>
          </div>
        </div>
        {/*Secondary Treatment Wastewater*/}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#wastewaterList-collapseFour"
              aria-expanded="false"
              aria-controls="wastewaterList-collapseFour"
            >
              Tertiary Treatment and Disinfection
            </button>
          </h2>
          <div
            id="wastewaterList-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#wastewaterList"
          >
            <div className="accordion-body" />
          </div>
        </div>
        {/*Tertiary Treatment Wastewater*/}
      </div>
    </>
  );
}

<div>
  {/*Municipal Wastewater Acordian List*/}
  <h4 className="mt-2">WATER TREATMENT</h4>
  <div className="accordion" id="othersList">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOneB"
          aria-expanded="true"
          aria-controls="collapseOneB"
        >
          Headworks
        </button>
      </h2>
      <div
        id="collapseOneB"
        className="accordion-collapse collapse"
        data-bs-parent="#waterList"
      >
        <div className="accordion-body">
          <div className="col-lg-3 col-sm-4 text-center">
            <div
              className="mb-3"
              style={{
                border: "1px solid #cbcbcb",
                borderRadius: "0.25rem",
                padding: "2rem",
              }}
            >
              <a href="http://www.ataraequipment.com/" target="_blank"></a>
              <div style={{ display: "table", width: "100%" }}>
                <div
                  style={{
                    height: 200,
                    width: "100%",
                    display: "table-cell",
                    verticalAlign: "middle",
                  }}
                >
                  <a href="http://www.ataraequipment.com/" target="_blank">
                    <img
                      className="img-fluid rounded mb-2 mx-auto d-block"
                      src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/00_03_manu_Atara_QL7SdEC.jpg"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
              </div>
              <a href="http://www.ataraequipment.com/" target="_blank">
                <small>ATARA Equipment</small>
              </a>
            </div>
          </div>
          {/*Atara*/}
        </div>
      </div>
    </div>
    {/*Headworks Water Treatment*/}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwoB"
          aria-expanded="false"
          aria-controls="collapseTwoB"
        >
          Filtration
        </button>
      </h2>
      <div
        id="collapseTwoB"
        className="accordion-collapse collapse"
        data-bs-parent="#waterList"
      >
        <div className="accordion-body">
          <div className="col-lg-3 col-sm-4 text-center">
            <div
              className="mb-3"
              style={{
                border: "1px solid #cbcbcb",
                borderRadius: "0.25rem",
                padding: "2rem",
              }}
            >
              <a href="http://awcwater.ca/" target="_blank">
                {" "}
              </a>
              <div style={{ display: "table", width: "100%" }}>
                <div
                  style={{
                    height: 200,
                    width: "100%",
                    display: "table-cell",
                    verticalAlign: "middle",
                  }}
                >
                  <a href="http://awcwater.ca/" target="_blank">
                    <img
                      className="img-fluid rounded mb-2 mx-auto d-block"
                      src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/AWC_-_logo-new.png"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
              </div>
              <a href="http://awcwater.ca/" target="_blank">
                <small>AWC Water Solutions Ltd.</small>
              </a>
            </div>
          </div>
          {/*AWC Solutions*/}
        </div>
      </div>
    </div>
    {/*Filtration Water Treatment*/}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThreeB"
          aria-expanded="false"
          aria-controls="collapseThreeB"
        >
          Disinfection
        </button>
      </h2>
      <div
        id="collapseThreeB"
        className="accordion-collapse collapse"
        data-bs-parent="#waterList"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-lg-3 col-sm-4 text-center">
              <div
                className="mb-3"
                style={{
                  border: "1px solid #cbcbcb",
                  borderRadius: "0.25rem",
                  padding: "2rem",
                }}
              >
                <a href="http://www.adedgetech.com/" target="_blank"></a>
                <div style={{ display: "table", width: "100%" }}>
                  <div
                    style={{
                      height: 200,
                      width: "100%",
                      display: "table-cell",
                      verticalAlign: "middle",
                    }}
                  >
                    <a href="http://www.adedgetech.com/" target="_blank">
                      <img
                        className="img-fluid rounded mb-2 mx-auto d-block"
                        src="./H2Flow Equipment Inc - Water and Wastewater Treatment_files/00_03_manu_AdEdge.jpg"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                </div>
                <a href="http://www.adedgetech.com/" target="_blank">
                  <small>Ad Edge</small>
                </a>
              </div>
            </div>
            {/*Adedge*/}
          </div>
          <div className="col-lg-3 col-sm-4 text-center">
            <div
              className="mb-3"
              style={{
                border: "1px solid #cbcbcb",
                borderRadius: "0.25rem",
                padding: "2rem",
              }}
            >
              <a href="https://www.aerzen.com/en-ca.html" target="_blank"></a>
              <div style={{ display: "table", width: "100%" }}>
                <div
                  style={{
                    height: 200,
                    width: "100%",
                    display: "table-cell",
                    verticalAlign: "middle",
                  }}
                >
                  <a href="https://www.aerzen.com/en-ca.html" target="_blank">
                    <img
                      className="img-fluid rounded mb-2 mx-auto d-block"
                      src="./img/Aerzen.jpg"
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
              </div>
              <a href="https://www.aerzen.com/en-ca.html" target="_blank">
                <small>AERZEN</small>
              </a>
            </div>
          </div>
          {/*Aerzen*/}
        </div>
      </div>
    </div>
    {/*Disinfection Water Treatment*/}
  </div>
  {/*Municipal Water Treatment List*/}
  <h4 className="mt-2">OTHER EQUIPMENT SOLUTIONS</h4>
  <div className="accordion" id="othersList">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOneC"
          aria-expanded="true"
          aria-controls="collapseOneC"
        >
          Anaerobic Digestion and Biogas Conditioning
        </button>
      </h2>
      <div
        id="collapseOneC"
        className="accordion-collapse collapse"
        data-bs-parent="#wList"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-lg-3 col-sm-4 text-center">
              <div
                className="mb-3"
                style={{
                  border: "1px solid #cbcbcb",
                  borderRadius: "0.25rem",
                  padding: "2rem",
                }}
              >
                <a href="http://www.anaergia.com/" target="_blank">
                  {" "}
                </a>
                <div style={{ display: "table", width: "100%" }}>
                  <div
                    style={{
                      height: 200,
                      width: "100%",
                      display: "table-cell",
                      verticalAlign: "middle",
                    }}
                  >
                    <a href="http://www.anaergia.com/" target="_blank">
                      <img
                        className="img-fluid rounded mb-2 mx-auto d-block"
                        src="./img/Anaergia_-logoV2.png"
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                </div>
                <a href="http://www.anaergia.com/" target="_blank">
                  <small>Anaergia</small>
                </a>
              </div>
            </div>
            {/*Anaergia*/}
          </div>
        </div>
      </div>
    </div>
    {/*Biogas Conditioning*/}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwoC"
          aria-expanded="false"
          aria-controls="collapseTwoC"
        >
          Odour Control
        </button>
      </h2>
      <div
        id="collapseTwoC"
        className="accordion-collapse collapse"
        data-bs-parent="#waterList"
      >
        <div className="accordion-body" />
      </div>
    </div>
    {/*Odour Control*/}
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThreeC"
          aria-expanded="false"
          aria-controls="collapseThreeC"
        >
          Tanks
        </button>
      </h2>
      <div
        id="collapseThreeC"
        className="accordion-collapse collapse"
        data-bs-parent="#waterList"
      >
        <div className="accordion-body">
          <div className="row" />
        </div>
      </div>
    </div>
    {/*Disinfection Water Treatment*/}
  </div>
  {/*Others List*/}
</div>;
