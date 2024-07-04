import React from "react";
import { NavLink } from "./Navbar/NavbarElements";

export default function TechnologyItem({ url, title }) {
  return (
    <>
      <NavLink to={url}>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          {title}
        </button>
      </NavLink>
    </>
  );
}
