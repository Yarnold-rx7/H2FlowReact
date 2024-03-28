import React from "react";

export default function SocialLink({ url, img, alt }) {
  const image = `../img/${img}`;
  return (
    <>
      <a href={url}>
        <div
          style={{
            padding: "0.35rem",
            display: "inline-block",
            background: "rgba(255, 255, 255, 1)",
            borderRadius: "0.25rem",
            height: 36,
            width: 36,
          }}
        >
          <img className="w-100 h-100" src={image} alt={alt} />
        </div>
      </a>
    </>
  );
}
