import React from "react";
import "./styles/progressBar.css"

const progressBar = (per) => {
    return <div className="skill__choise">
            <div className="skill">
                <div className="outer">
                    <div className="inner">
                        <div className="number">
                            {per.per1}
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400px" height="400px">
                     <defs>
                         <linearGradient id="GradientColor">
                             <stop offset="100%" stop-color="" />
                         </linearGradient>
                     </defs>
                    <circle cx="200" cy="200" r="155" className="circleStand2" stroke-linecap="round" />
                </svg>
            </div>
            <div className="skills__underText">{per.per2}</div>
        </div>
}

export default progressBar