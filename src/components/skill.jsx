import React from "react";
import "./styles/skills.css";
import ProgressBar from "./progressBar";

const skills = () => {
    return  <div className="skills">
            <div className="skills__title">Skills</div>
            <div className="skills__wrap">
                <ProgressBar per2="Front-End" per1="70%" />
                <ProgressBar per2="Back-End" per1="50%"/>
                <ProgressBar per2="DataBase" per1="30%"/>
            </div>
        </div>

}

export default skills