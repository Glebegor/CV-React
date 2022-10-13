import React from "react";
import "./styles/bg.css";
import background from "../images/figures/Polygon 3triangle.png";
import background2 from "../images/figures/Polygon 1.png";
import background3 from "../images/figures/Ellipse 6sunn.png";
const  bg = () => {
    return  <div className="bg-images">
        <div className="rectangle1"></div>
        <div className="l3ines1">
            <div className="l3ine l3ine__line11"></div>
            <div className="l3ine l3ine__line21"></div>
            <div className="l3ine l3ine__line31"></div>
        </div>
        <div className="circle4">
            <div className="circle__item"></div>
            <div className="circle__item"></div>
            <div className="circle__item"></div>
            <div className="circle__item"></div>
        </div>
        <div className="elips1"></div>
        <div className="square1"></div>
        <div className="square2"></div>
        <img className="triangle3" src={background2} alt=""></img>
    </div>
}
export default bg