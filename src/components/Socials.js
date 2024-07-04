import React from "react";
import SocialLink from "./SocialLink";
import LinkedIn from "../img/LinkedIn-color.svg";
import YouTube from "../img/Youtube-color.svg";
import Facebook from "../img/Facebook-color.svg";
import Instagram from "../img/Instagram-black.svg";

export default function Socials() {
  return (
    <>
      <div className="form-group social_icons">
        <SocialLink
          img={LinkedIn}
          alt="LinkedIn"
          url="https://www.linkedin.com/company/h2flow"
        ></SocialLink>
        <SocialLink
          img={YouTube}
          alt="YouTube"
          url="https://www.youtube.com/user/H2FlowEquipment"
        ></SocialLink>
        <SocialLink
          img={Facebook}
          alt="Facebook"
          url="https://www.facebook.com/pages/H2Flow/197933136904136"
        ></SocialLink>
        <SocialLink
          img={Instagram}
          alt="Instagram"
          url="https://www.instagram.com/h2flowequipment"
        ></SocialLink>
      </div>
    </>
  );
}
