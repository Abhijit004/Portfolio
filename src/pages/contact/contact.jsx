import React from "react";
import { Linkedin, Github, Email } from "../../assets/svgvectors";
import "./contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="bigheading">
                <div className="hiderx"></div>
                <span className="bouncer">Contact</span>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/abhijit-karmakar-009ab026b/" alt="" className="tech">
                    <div className="social-icon">
                        <Linkedin color={"var(--themecol)"} />
                    </div>
                </a>
                <a href="https://github.com/Abhijit004" alt="" className="tech">
                    <div className="social-icon">
                        <Github color={"var(--themecol)"} />
                    </div>
                </a>
                <a href="mailto:artistrup07@gmail.com" alt="" className="tech" aria-label="email">
                    <div className="social-icon">
                        <Email color={"var(--themecol)"} />
                    </div>
                </a>
            </div>
            <div className="desc">
                <div className="hiderx"></div>
                <div className="bouncer">
                    <span>
                    Got a digital mess? Let's untangle it together! Whether you need a website to dazzle or code to wrangle, I'm your tech-savvy superhero. Drop me a line; let's make web magic happen!
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
