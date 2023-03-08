// import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import SongsPage from "./components/SongsPage";

const Shrtcode = React.lazy(() => import("./components/Shrtcode"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<SongsPage />} />
        <Route path="/shrtcode" element={<Shrtcode />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
