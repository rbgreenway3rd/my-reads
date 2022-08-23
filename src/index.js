import React from "react";
import ReactDOM from "react-dom/client";
import MyReadsApp from "./MyReadsApp";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <MyReadsApp />
  </Router>
);
