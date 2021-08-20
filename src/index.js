import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { Styles } from "./styles";

ReactDOM.render(
  <React.Fragment>
    <Styles />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
