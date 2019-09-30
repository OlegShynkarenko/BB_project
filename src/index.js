import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import { BrowserRouter } from "react-router-dom";

import App from "./App/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
