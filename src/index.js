import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { Styles } from "./styles";
import { firebase } from "./lib/firebase";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <Styles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
