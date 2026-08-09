import React, { useEffect, useRef } from "react";
import "./aboutme.css";
// import * as SVG from "../../assets/svgvectors";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faCss3Alt,
//     faFigma,
//     faGitAlt,
//     faGithub,
//     faHtml5,
//     faJava,
//     faJs,
//     faNodeJs,
//     faPython,
//     faReact,
// } from "@fortawesome/free-brands-svg-icons";
// import { faC, faWeight } from "@fortawesome/free-solid-svg-icons";
// import TechStack from "../../components/TechStack/TechStack";

function AboutMe() {
    const observer = useRef(null);
    const icons = ['angular', 'antd', 'canva', 'colab', 'css3', 'express', 'figma', 'git', 'github', 'html', 'java', 'javascript', 'mongodb', 'mui', 'mysql', 'nextjs', 'nodejs', 'notion', 'oracle', 'photoshop', 'python', 'react', 'render', 'sublime', 'typescript', 'vercel', 'vitejs', 'vscode'];

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
    const style = { color: "var(--text-secondary)", fontWeight: 400};
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
                                I finished my <span style={style}>B.Tech degree in Information Technology at IIEST Shibpur</span>. As a crazy Software Engineer, I love building scalable apps and tackling complex challenges across full-stack dev and machine learning. My core technical experience spans building secure, responsive web apps and RESTful services using <span style={style}>React</span>, <span style={style}>Angular</span>, <span style={style}>Node.js</span>, <span style={style}>Express</span>, and <span style={style}>MongoDB</span>.
                            </p>
                        </div>
                        <div className="para">
                            <div className="hiderx"></div>
                            <p className="bouncer">
                                I've also explored <span style={style}>Deepfake detection</span> and <span style={style}>Continual Learning</span> working with Transformer architectures, Mixture-of-Experts, and PyTorch. I also love giving back to the community—during my time leading development initiatives at CodeIIEST, I conducted technical sessions and organized competitive coding events.
                            </p>
                        </div>
                        <div className="para">
                            <div className="hiderx"></div>
                            <p className="bouncer">
                                Beyond web development, I have a strong passion for <span style={style}>competitive programming</span> and problem-solving. <span style={style}>Python</span> is my go-to language for its simplicity. Off the clock, you can find me doing speedcubing, drawing, or travelling with my friends around the world!
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
                            {icons.map((icon, i) => {
                                return (
                                    <div className="tech" key = {i}>
                                        <img src={`/assets/MyStack/${icon}.svg`} alt={icon}/>
                                        <span>{icon}</span>
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
