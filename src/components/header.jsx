import React from "react";
import "./styles/header.css";
import MainPhoto from "./mainImg";
import Info from "./info";
const Header = () => {
    return <header className="">
            <div className="header">
                <MainPhoto />
                <Info />
            </div>
    </header>
}
export default Header
