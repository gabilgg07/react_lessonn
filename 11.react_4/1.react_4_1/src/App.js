import React from "react";
import Pages from "./components/Pages";
import { NavbarP, FooterP } from "./components/PageElements";

function App() {
  return (
    <div>
      <NavbarP />
      <Pages />
      <FooterP text="Footer" />
    </div>
  );
}

export default App;
