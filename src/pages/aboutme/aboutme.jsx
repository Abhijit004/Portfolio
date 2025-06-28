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
import TechStack from "../../components/TechStack/TechStack";

function AboutMe() {
    const observer = useRef(null);
    const icons = [];
    for (let i = 1; i <= 18; i++) {
        icons.push(i);
    }

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
                    <span className="theme-grad"> Me</span>
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
                                go-to language for its simplicity. Additionally, I mentor aspiring developers and have
                                conducted sessions on Git, GitHub, and frontend development.
                            </p>
                        </div>
                    </div>
                    <div className="tech-stack">
                        <div className="heading">
                            <div className="hiderx"></div>
                            <div className="bouncer">
                                <span>What I</span>
                                <span className="theme-grad"> Love</span>
                            </div>
                        </div>
                        <div className="tech-list">
                            {icons.map((i) => {
                                return (
                                    <div className="tech">
                                        <img src={`/assets/MyStack/icon${i}.svg`} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* <TechStack /> */}
        </div>
    );
}

export default AboutMe;
