import React from "react";
import { Button, ChangingTexts } from "../../components/components";
import "./homepage.css";

function HomePage() {
    return (
        <div className="home-page sec s0">
            <div className="homepage-content">
                <div className="me-content">
                    <div className="hello">
                        <span className="hi">Hi</span>
                        <span className="comma" style={{ color: "#f05353" }}>
                            ,
                        </span>
                        <span> </span>
                        <span className="I">I</span>
                        <span className="qmark" style={{ color: "#f05353" }}>
                            '
                        </span>
                        <span className="m">m</span>
                        <span> </span>
                        <span className="abhijit"> Abhijit</span>
                    </div>
                    <div className="hello-about">
                        <ChangingTexts />
                    </div>
                    <div className="hello-desc">
                        <div className="bouncer">
                            <span>
                                Mastering both web development and competitive programming, I'm also an avid artist and
                                Rubik's Cube enthusiast, effortlessly balancing creativity with logic.
                            </span>
                        </div>
                    </div>
                    <a href="https://www.linkedin.com/in/abhijit-karmakar-009ab026b/">
                        <Button text={"Contact Me"} />
                    </a>
                </div>
                <img src={"assets/horse.png"} className="me bouncer" alt="me" />
            </div>
        </div>
    );
}

export default HomePage;
