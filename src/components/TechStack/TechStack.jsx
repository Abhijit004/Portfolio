import React from "react";
import "./TechStack.css";
import img from "../../../src/assets/techstack.png";

const TechStack = () => {
    return (
        <div className="bouncer techstack-container">
            <div className="hiderx"></div>
            <img src={img} className="techstack"/>
        </div>
    );
};

export default TechStack;
