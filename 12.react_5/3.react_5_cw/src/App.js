import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Countries from "./components/Countries";

const CountryDetails = React.lazy(() => import("./components/CountryDetails"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
