import { render } from "react-dom";
import React from "react";
import App from "./components/App";

require('../../public/scss/main.scss');

const containerEl = document.getElementById("container");

render(
  <App/>,
  containerEl
);
