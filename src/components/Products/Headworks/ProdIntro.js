import React from "react";
import SubItem from "../SubItem";

export default function ProdIntro({ title }) {
  return (
    <>
      <div className="row title-banner my-5">
        <div className="col-md-6">
          <h2>{title}</h2>
          <SubItem
            title="Screening"
            desc="Screening is a simple and important process to remove large solids
            and protect downstream equipment. H2FLow Equipment supplies
            screening technologies for almost any water and wastewater treamtent
            application."
          ></SubItem>
          <SubItem
            title="Grit Removal"
            desc="Along with Screening, Grit removal is a key factor in a properly
            designed headworks system."
          ></SubItem>
          <SubItem
            title="Grinders and Shredders"
            desc="Grinders, shredders and macerators can be another important unit
            operation to protect downstream piping and equipment from plugging
            and clogging."
          ></SubItem>
        </div>
      </div>
    </>
  );
}
