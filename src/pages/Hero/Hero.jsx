import React from "react";
import "./Hero.css";
import me from "../../../src/assets/abhijit.svg";
import { ChangingTexts } from "../../components/components";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="text">Hi, I'm</div>
                <div className="name">
                    <div className="colors">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="img">
                        {" "}
                        <img src={me} />
                    </div>
                </div>
            </div>
            <div className="tray">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div className="tray-img" name={`item${i}`}>
                        <img src={`/assets/tray/item${i}.svg`} key={i} alt={`Item ${i}`} />
                    </div>
                ))}
            </div>

            <div className="text">I am A</div>
            <div className="hello-about">
                <ChangingTexts />
            </div>
        </section>
    );
};

export default Hero;
