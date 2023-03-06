import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Spinner from "./components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<Spinner />}>
    <Router>
      <App />
    </Router>
  </Suspense>
);
