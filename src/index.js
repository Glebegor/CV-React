import ReactDOM from "react-dom/client";
import React from "react";

import Header from "./components/header";
import Bgitems from "./components/background";
import Skills from "./components/skill";
import SkillsStepTwo from "./components/SkillsStepTwo";

import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Header />
    <Skills />
    <SkillsStepTwo />
    <Bgitems />
  </React.StrictMode>
)

