import React from "react";
import "./styles/SkillsStepTwo.css";
import hacker from "../images/hackerMain.png"
const SkillsStepTwo = () => {
    return <div className="SkillsStepTwo">
        <div className="SkillsStepTwo__first__inner">
            <img className="SkillStepTwo__fir__img" src={hacker} alt="" />
            <div className="SkillStepTwo__fir__text">Knowledges</div>
        </div>
        <div className="SkillsStepTwo__sec__inner">
            <div className="SkillsStepTwo__sec__line"></div>
            <div className="SkillsStepTwo__sec__wrap">
                <div className="SkillsStepTwo__tech">HTML,CSS(LESS, SASS), JS</div>
                <div className="SkillsStepTwo__tech">Typescript</div>
                <div className="SkillsStepTwo__tech">Git, GitLab</div>
                <div className="SkillsStepTwo__tech">React.js</div>
                <div className="SkillsStepTwo__tech">Python</div>
                <div className="SkillsStepTwo__tech">Django</div>
                <div className="SkillsStepTwo__tech">Docker</div>
                <div className="SkillsStepTwo__tech">Linux</div>
            </div>
        </div>
    </div>
}
export default SkillsStepTwo