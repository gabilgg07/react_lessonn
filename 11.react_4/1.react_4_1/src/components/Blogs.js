import React from "react";
import { TitleP, SectionP } from "./PageElements";

const Blogs = () => {
  return (
    <>
      <TitleP text="Blogs Page" />
      <SectionP
        id="first_Section"
        text="Blogs First Section"
        classN="bg_img"
        imgId={9}
      />
      <SectionP
        id="first_Section"
        text="Blogs First Section"
        classN="bg_img"
        imgId={8}
      />
      <SectionP
        id="first_Section"
        text="Blogs First Section"
        classN="bg_img"
        imgId={2}
      />
      <SectionP
        id="first_Section"
        text="Blogs First Section"
        classN="bg_img"
        imgId={10}
      />
      <SectionP
        id="first_Section"
        text="Blogs First Section"
        classN="bg_img"
        imgId={11}
      />
      <SectionP id="last_Section" text="Blogs Last Section" />
    </>
  );
};

export default Blogs;
