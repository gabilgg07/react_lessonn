import React from "react";
import ReactDOM from "react-dom/client";

// default export-un import-u:
import App from "./App";

// named export-un import-u:
// import { App2 } from "./App";

// named export-un basqa import numuneleri:
// import { dateFormat, isUserLogged, sumCartAmmount } from "./utils";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
