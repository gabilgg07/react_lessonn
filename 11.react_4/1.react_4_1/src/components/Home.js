import React from "react";
import { TitleP, SectionP } from "./PageElements";

const Home = () => {
  return (
    <>
      <TitleP text="Home Page" />
      <SectionP
        id="first_Section"
        text="Home First Section"
        classN="bg_img"
        imgId={1}
      />
      <SectionP
        id="first_Section"
        text="Home First Section"
        classN="bg_img my-2"
        imgId={4}
      />
      <SectionP
        id="first_Section"
        text="Home First Section"
        classN="bg_img"
        imgId={5}
      />
      <SectionP
        id="first_Section"
        text="Home First Section"
        classN="bg_img my-2"
        imgId={6}
      />
      <SectionP
        id="first_Section"
        text="Home First Section"
        classN="bg_img"
        imgId={7}
      />
      <SectionP id="last_Section" text="Home Last Section" />
    </>
  );
};

export default Home;
