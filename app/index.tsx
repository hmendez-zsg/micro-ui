import "core-js/stable";
import React from "react";
import { render } from "react-dom";
import "regenerator-runtime/runtime";
import App from "./src/App";

const root = document.getElementById("app-root");
render(<App />, root);
