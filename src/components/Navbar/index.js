// Filename - "./components/Navbar.js
import React from "react";
import { NavLink } from "./NavbarElements";
import logo from "../../../src/logo.png";

const Navbar = () => {
  return (
    <>
      <head>
        <meta
          name="viewport"
          charset="utf-8"
          content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
        />

        <title>H2Flow Equipment Inc - Water and Wastewater Treatment</title>

        <meta
          name="keywords"
          content="Grinder, Clarifier, MBBR, MBR, SBR, Water Treatment, Wastewater Treatment, UV Ontario, Sludge dewatering"
        />

        <meta
          name="description"
          content="H2Flow supplies processes and equipment for water and wastewater treatment for industrial and municipal use and actively works with plant engineers & operators, consulting engineers and contractors."
        />
      </head>

      <header>
        <div class="container">
          <div class="row-12">
            <div class="language-bar">
              <div class="languageSelection">
                <a href="/" class="mr-1 active-lang">
                  ENGLISH
                </a>
                |{" "}
                <a href="/" class="ml-1">
                  FRANCAIS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex">
          <div class="col-3"></div>
          <div class="col-6">
            <div class="container pt-2 pb-4">
              <NavLink to="/H2FlowReact">
                <img
                  id="logo"
                  class="d-block mx-auto"
                  src={logo}
                  alt="H2Flow Logos"
                ></img>
              </NavLink>
            </div>
          </div>
          <div class="col-3">
            <button
              type="button"
              class="text-light btn btn-warning service-btn float-right mx-5 mt-4"
            >
              Submit Service Request!
            </button>
          </div>
        </div>

        <nav id="nav">
          <ul class="d-none d-lg-block">
            <li id="mnu_home">
              <a href="/H2FlowReact">HOME</a>
            </li>
            <li id="mnu_about">
              <NavLink to="/H2FlowReact/about">ABOUT</NavLink>
            </li>

            <li id="mnu_products">
              <NavLink to="/H2FlowReact/municipal">MUNICIPAL</NavLink>
            </li>
            <li id="mnu_industrial">
              <NavLink to="/H2FlowReact/industrial">INDUSTRIAL</NavLink>
            </li>
            <li id="mnu_industrial">
              <NavLink to="https://h2flowtanks.com">TANKS</NavLink>
            </li>
            <li id="mnu_products">
              <NavLink to="/H2FlowReact/projects">PROJECTS</NavLink>
            </li>
            <li id="mnu_mnfs">
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
          <div className="container mobileMenuBtn d-block d-lg-none">
            <ul className="text-right">
              <li>
                <a href="/H2FlowReact">MENU</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="mobileMenu d-lg-none">
        <div className="container">
          <div className="row-12">
            <ul className="mobile_items" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
