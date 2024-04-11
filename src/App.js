import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Products from "./pages/products";
import Industrial from "./pages/industrial";
import Headworks from "./pages/ProductPages/headworks";
import Footer from "./components/Footer";
import Municipal from "./pages/municipal";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/H2FlowReact" element={<Home />} />
          <Route path="/H2FlowReact/home" element={<Home />} />
          <Route path="/H2FlowReact/about" element={<About />} />
          <Route path="/H2FlowReact/products" element={<Products />} />
          <Route path="/H2FlowReact/industrial" element={<Industrial />} />
          <Route path="/H2FlowReact/municipal" element={<Municipal />} />
          <Route
            path="H2FlowReact/municipal/headworks"
            element={<Headworks />}
          />
          <Route
            path="H2FloeReact/tanks"
            element="https://www.h2flowtanks.com"
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
