import React, { useEffect, useRef } from "react";
import "./aboutme.css";
import * as SVG from "../../assets/svgvectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faFigma,
    faGitAlt,
    faGithub,
    faHtml5,
    faJava,
    faJs,
    faNodeJs,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
    const observer = useRef(null);

    useEffect(() => {
        // Initialize IntersectionObserver when the component mounts
        observer.current = new IntersectionObserver(slider, { threshold: 0.5 });

        // Fetching all boxes and setting them on observe by the observer object
        const boxes = document.querySelectorAll(".tech");
        boxes.forEach((box) => {
            observer.current.observe(box);
        });

        return () => {
            observer.current.disconnect();
        };
    }, []);

    const slider = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("tech-showup");
            }
        });
    };
    return (
        <div className="about-me sec s1">
            <div>
                <div className="heading bouncer">
                    <div className="hiderx"></div>
                    <span>About</span>
                    <span style={{ color: "var(--themecol)" }}> Me</span>
                    <div className="line-r"></div>
                </div>
                <div className="about-content">
                    <div className="about-desc">
                        <div className="para">
                            <div className="hiderx"></div>
                            <p className="bouncer">
                                I am currently pursuing a B.Tech in Information Technology from IIEST, Shibpur, and I am
                                in my third year. My journey in development started with self-learning, and over time, I
                                have led multiple projects that have strengthened my problem-solving and technical
                                expertise.
                            </p>
                        </div>
                        <div className="para">
                            <div className="hiderx"></div>
                            <p className="bouncer">
                                As a passionate web developer, I specialize in building intuitive and user-friendly
                                interfaces. I primarily use Figma for UI/UX brainstorming and design. I work extensively
                                with React, along with Material UI and Ant Design. I have led the design and development
                                of websites for college fests like Instruo and Rebeca, integrating advanced frontend
                                techniques.
                            </p>
                        </div>
                        <div className="para">
                            <div className="hiderx"></div>
                            <p className="bouncer">
                                Beyond web development, I have a strong passion for competitive programming and
                                problem-solving (Recently competed in the ICPC Amritapuri Regionals!). Python is my
                                go-to language for its simplicity. Additionally, I mentor
                                aspiring developers and have conducted sessions on Git, GitHub, and frontend
                                development.
                            </p>
                        </div>
                    </div>
                    <div className="tech-stack">
                        <div className="heading">
                            <div className="hiderx"></div>
                            <div className="bouncer">
                                <span>What I</span>
                                <span style={{ color: "var(--themecol)" }}> Love</span>
                            </div>
                        </div>
                        <div className="tech-list">
                            <FontAwesomeIcon className="tech" icon={faHtml5} size="2x" />
                            <FontAwesomeIcon className="tech" icon={faCss3Alt} size="2x" color={"var(--themecol)"} />
                            <FontAwesomeIcon className="tech" icon={faJs} size="2x" />
                            <FontAwesomeIcon className="tech" icon={faNodeJs} size="2x" color={"var(--themecol)"} />
                            <FontAwesomeIcon className="tech" icon={faReact} size="2x" />
                            <FontAwesomeIcon className="tech" icon={faPython} size="2x" color={"var(--themecol)"} />
                            <FontAwesomeIcon className="tech" icon={faC} size="2x" />
                            <FontAwesomeIcon className="tech" icon={faJava} size="2x" color={"var(--themecol)"} />
                            <SVG.DBMS cls="tech" color={"#fff"} />
                            <SVG.SQL cls="tech" color={"var(--themecol)"} />
                            <FontAwesomeIcon icon={faGitAlt} className={"tech"} size="2x" />
                            <FontAwesomeIcon icon={faGithub} className={"tech"} size="2x" color={"var(--themecol)"} />
                            <SVG.MUI cls="tech" color={"#fff"} />
                            <SVG.Canva cls="tech" color={"var(--themecol)"} />
                            <FontAwesomeIcon icon={faFigma} className={"tech"} size="2x" />
                            <SVG.Chartjs cls="tech" color={"#fff"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
