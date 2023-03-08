import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/index.scss";

import store from "./store";
import { Provider } from "react-redux";

import Spinner from "./components/Spinner";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Spinner />}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </Suspense>
);
