import React, { useRef, useEffect, useState } from "react";
import "./components.css";
import A from "../assets/A.png";
import CountUp from "react-countup";
import {
    Github,
    Email,
    Linkedin,
    Leetcode,
    Codechef,
    Codeforces,
    Info,
    CP,
    Experience,
    Projects,
    Connect,
} from "../assets/svgvectors";

const NumberCountAnimation = ({ start = 0, end, duration, c }) => {
    const [isVisible, setIsVisible] = useState(false);
    const countUpRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (countUpRef.current) {
            observer.observe(countUpRef.current);
        }

        return () => {
            if (countUpRef.current) {
                observer.unobserve(countUpRef.current);
            }
        };
    }, []);

    return <div ref={countUpRef} className={c}>{isVisible && <CountUp separator="" start={start} end={end} duration={duration} />}</div>;
};

export function Button({ text }) {
    return (
        <button className="button" >
            <span className="text">{text}</span>
        </button>
    );
}

export function ProjectCard({ pic, heading, description, link, gitlink, techs }) {
    return (
        <div className="project-card">
            <a className="project-link" href={link} alt="" aria-label="project-link">
                <div className="project-img bouncer" style={{ background: `url("assets/${pic}")` }}></div></a>
            <div className="proj-title">
                {/* <div className="hiderx"></div> */}
                <div className="bouncer">
                    <span style={{ color: "var(--themecol)", fontSize: "1.4rem", fontWeight: "600" }}>{heading}</span>
                    <a className="a" alt="" href={`${gitlink}`}>
                        <Github color={"var(--themecol)"} cls={"proj-logo"} />
                    </a>
                </div>
            </div>
            <div className="proj-desc">
                <div className="hiderx"></div>
                <div className="bouncer">
                    <span>{description}</span>
                </div>
            </div>
            <div className="techstack">
                <div className="hiderx"></div>
                {techs.map((value, index) => {
                    return (
                        <span key={index} className="code bouncer">
                            {value}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export function ExperienceCard({ company, role, daterange, loc, desc }) {
    return (
        <div className="experience">
            <div className="left">
                <div className="comprole">
                    <div className="hiderx"></div>
                    <div className="company bouncer">{company}</div>
                    <div className="role bouncer">{role}</div>
                </div>
                <div className="dateloc">
                    <div className="hiderx"></div>
                    <div className="dates bouncer">{daterange}</div>
                    <div className="location bouncer">{loc}</div>
                </div>
            </div>
            <div className="desc">
                <div className="hiderx"></div>
                <div className="bouncer">
                    <span>{desc}</span>
                </div>
            </div>
        </div>
    );
}

export function CPcard({ web, rating, contests, problems, link }) {
    return (
        <div className="cp-card">
            <div className="website bouncer">
                <div className="hiderx"></div>
                {web == "LeetCode" ? (
                    <Leetcode color={"var(--themecol)"} />
                ) : web == "CodeChef" ? (
                    <Codechef color={"var(--themecol)"} />
                ) : (
                    <Codeforces color={"var(--themecol)"} />
                )}
                <span><a className = "cp-link" href={link} alt="" aria-label={web}>{web}</a></span>
            </div>
            <div className="rating">
                <div>
                    <NumberCountAnimation c = {"rating-big"} start={0} end={rating} duration={1.5} />
                </div>
                <div className="byline">
                    <div className="hiderx"></div>
                    <span>Highest Rating</span>
                </div>
            </div>
            <div className="more-stats">
                <div className="contests">
                    <div>{<NumberCountAnimation c = {"rating-smol"} start={0} end={contests} duration={1.5} />}</div>
                    <div className="byline">
                        <div className="hiderx"></div>
                        <span>Contests</span>
                    </div>
                </div>
                <div className="problems">
                    <div>
                        <NumberCountAnimation c = {"rating-smol"} start={0} end={problems} duration={1.5} />
                    </div>
                    <div className="byline">
                        <div className="hiderx"></div>
                        <span>Problems</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Header() {
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="contacts">
                    <a aria-label="github" className={"headlogo"} alt="" href="https://github.com/Abhijit004">
                        <div className="social-icon">
                            <Github color={"var(--themecol)"} />
                        </div>
                    </a>
                    <a aria-label="mail" className={"headlogo"} alt="" href="mailto:artistrup07@gmail.com">
                        <div className="social-icon">
                            <Email color={"var(--themecol)"} />
                        </div>
                    </a>
                    <a aria-label="linkedin" className={"headlogo"} alt="" href="https://www.linkedin.com/in/abhijit-karmakar-009ab026b/">
                        <div className="social-icon">
                            <Linkedin color={"var(--themecol)"} />
                        </div>
                    </a>
                </div>
                <a aria-label="resume" href="https://drive.google.com/file/d/1tv-6SxGW0g9-rJySIlS5IUBjo7826vbs/view?usp=drive_link"><Button text={"My Resume"} /></a>
            </div>
        </div>
    );
}

export function SideBar({f1, f2, f3, f4, f5}) {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <div className="side-bar">
            <div className="A">
                <img src={A} alt="A" />
            </div>
            <button onClick={f1} className="side-bar-btn" aria-label="about">
                <Info cls="sidebar-icon i1" />
            </button>
            <button onClick={f2} className="side-bar-btn" aria-label="projects">
                <Projects cls="sidebar-icon i2" />
            </button>
            <button onClick={f3} className="side-bar-btn" aria-label="competitive programming">
                <CP cls="sidebar-icon i3" />
            </button>
            <button onClick={f4} className="side-bar-btn" aria-label="Experience">
                <Experience cls="sidebar-icon i4" color={"var(--themecol)"} />
            </button>
            <button onClick={f5} className="side-bar-btn" aria-label="Connect">
                <Connect cls="sidebar-icon i5" />
            </button>
        </div>
    );
}

const Dynamic = () => {
    const [holder, setHolder] = useState(0);
    const [index, setIndex] = useState(0);
    let values = ["UI/UX Designer", "Web Developer", "CP enthusiast", "Gifted Artist"];
    const [typedText, setTypedText] = useState("");
    const [di, setDi] = useState(1);

    useEffect(() => {
    const interval = setInterval(() => {
        if (index === 0 && di === -1) {
            console.log("restart");
            // clearInterval(interval);
            setTypedText("");
            setIndex(0);
            setDi(1);
            setHolder((holder) => (holder + 1) % values.length);
        } else if (index < values[holder].length) {
            setIndex(index + di);
            setTypedText(values[holder].slice(0, index + 1));
        } else if (index === values[holder].length) {
            // Pause for 2 seconds
            clearInterval(interval);
            setTimeout(() => {
                setIndex(index - 1);
                setDi(-1);
            }, 2000);
        }
    }, 100); // Typing speed (adjust as needed)

    return () => clearInterval(interval);
}, [holder, values, index, di]);


    return <div className="dynamic-txts">{typedText}</div>;
};

export function ChangingTexts() {
    return (
        <div className="wrapper">
            <div className="static-txt bouncer">I'm a</div>
            <Dynamic />
        </div>
    );
}
