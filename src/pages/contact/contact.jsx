import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className="contact sec s5">
            <div className="bigheading">
                <div className="hiderx"></div>
                <span className="bouncer theme-grad">Contact</span>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/abhijit-karmakar-009ab026b/" alt="" className="tech" target="_blank">
                    <div className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </div>
                </a>
                <a href="https://github.com/Abhijit004" alt="" className="tech" target="_blank">
                    <div className="social-icon">
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                    </div>
                </a>
                <a href="mailto:artistrup07@gmail.com" alt="" className="tech" aria-label="email" target="_blank">
                    <div className="social-icon">
                    <FontAwesomeIcon icon={faEnvelope} size="1x" />
                    </div>
                </a>
            </div>
            <div className="desc">
                <div className="hiderx"></div>
                <div className="bouncer">
                    <span>
                    Feel free to reach out to me for collaborations, opportunities, or just to say hello! I'm always eager to connect and explore new ventures.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
