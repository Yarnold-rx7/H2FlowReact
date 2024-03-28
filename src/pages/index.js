// Filename - pages/index.js

import React from "react";
import "react-multi-carousel/lib/styles.css";
import Intro from "../components/Intro";
import SupplierSeciton from "../components/SupplierSection";
import Technologies from "../components/Technologies";
import Sectors from "../components/Sectors";
import ProjectNews from "../components/ProjectNews";
import HeaderWording from "../components/HeaderWording";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <div className="site-container">
        <div className="page-content">
          <HeaderWording></HeaderWording>
          <Intro></Intro>
          <SupplierSeciton></SupplierSeciton>
          <Technologies></Technologies>
          <Sectors></Sectors>
          <ProjectNews></ProjectNews>
        </div>
        <Footer></Footer>
      </div>
      {/* Show four images at once */}
    </div>
  );
};

export default Index;
