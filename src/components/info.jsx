import React from "react";
import image from "../images/Me.png"
import git from "../images/github.png"
import twitter from "../images/twitter.png"
import linkdin from "../images/linkedin.png"
import facebook from "../images/facebook.png"
import "./styles/info.css";

const info = () => {
    return <div className="info">
        <div className="info__title">Hlib Arseniuk</div>
        <div className="info__untitle">Front-End Developer</div>
        <div className="Info__text">
            Some information about me:
            <ul>
                <li>I`m 14 years old.</li>
                <li>Start Programing in 2017</li>
                <li>Love playing volleyball</li>
            </ul>
        </div>
        <div className="info__un">
            <a href="#" className="info__un__item"><img src={git} alt="" /></a>
            <a href="#" className="info__un__item"><img src={twitter} alt="" /></a>
            <a href="#" className="info__un__item"><img src={linkdin} alt="" /></a>
            <a href="#" className="info__un__item"><img src={facebook} alt="" /></a>
        </div>
    </div>
}
export default info