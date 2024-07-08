import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Home from "./pages/index";
import About from "./pages/about";
import Products from "./pages/products";
import Industrial from "./pages/industrial";
import Headworks from "./pages/ProductPages/headworks";
import Footer from "./components/Footer";
import Municipal from "./pages/municipal";
import DAF from "./pages/ProductPages/daf";
import UV from "./pages/ProductPages/uv";
import Alpha from "./pages/ProductPages/DAFModels/alpha";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/contact";

const history = createHashHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/H2FlowReact" element={<Home />} />
          <Route path="/H2FlowReact/about" element={<About />} />
          <Route path="/H2FlowReact/products" element={<Products />} />
          <Route path="/H2FlowReact/industrial" element={<Industrial />} />
          <Route path="/H2FlowReact/municipal" element={<Municipal />} />
          <Route
            path="/H2FlowReact/municipal/headworks"
            element={<Headworks />}
          />
          <Route
            path="H2FlowReact/tanks"
            element="https://www.h2flowtanks.com"
          />
          <Route path="/H2FlowReact/daf" element={<DAF />} />
          <Route path="/H2FlowReact/uv" element={<UV />} />
          <Route path="/H2FlowReact/daf/alpha" element={<Alpha />} />
          <Route path="/H2FlowReact/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
