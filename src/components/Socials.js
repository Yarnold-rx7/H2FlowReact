import React from "react";
import SocialLink from "./SocialLink";

export default function Socials() {
  return (
    <>
      <div className="form-group social_icons">
        <SocialLink
          img="LinkedIn-color.svg"
          alt="LinkedIn"
          url="https://www.linkedin.com/company/h2flow"
        ></SocialLink>
        <SocialLink
          img="Youtube-color.svg"
          alt="YouTube"
          url="https://www.youtube.com/user/H2FlowEquipment"
        ></SocialLink>
        <SocialLink
          img="Facebook-color.svg"
          alt="Facebook"
          url="https://www.facebook.com/pages/H2Flow/197933136904136"
        ></SocialLink>
        <SocialLink
          img="Instagram-black.svg"
          alt="Instagram"
          url="https://www.instagram.com/h2flowequipment"
        ></SocialLink>
      </div>
    </>
  );
}
