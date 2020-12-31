import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReactQueryDevtools } from "react-query-devtools";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <ReactQueryDevtools initialIsOpen={false} />
  </React.StrictMode>,
  document.getElementById("root")
);
