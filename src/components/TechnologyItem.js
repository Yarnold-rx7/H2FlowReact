import React from "react";

export default function TechnologyItem({ url, title }) {
  return (
    <>
      <a href={url}>
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          {title}
        </button>
      </a>
    </>
  );
}
