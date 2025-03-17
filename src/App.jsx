import React, { useEffect, useRef, useState } from "react";
import { Header, SideBar } from "./components/components.jsx";
import HomePage from "./pages/homepage/homepage.jsx";
import AboutMe from "./pages/aboutme/aboutme.jsx";
import Projects from "./pages/projects/projects.jsx";
import CPStats from "./pages/cpstats/cpstats.jsx";
import Experience from "./pages/experience/experience.jsx";
import "./index.css";
import Contact from "./pages/contact/contact.jsx";

function App() {
    const [observer, lineController, text, section] = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [active, setActive] = useState("");

    useEffect(() => {
        // Initialize IntersectionObserver when the component mounts
        observer.current = new IntersectionObserver(slider, { threshold: 0.1 });
        lineController.current = new IntersectionObserver(liner, { threshold: 0.1 });
        text.current = new IntersectionObserver(texter, { threshold: 0.1 });
        section.current = new IntersectionObserver(sectionViewManager, { threshold: 0.1 });

        // Fetching all boxes and setting them on observe by the observer object
        const boxes = document.querySelectorAll(".hiderx");
        boxes.forEach((box) => {
            observer.current.observe(box);
        });

        const lines = document.querySelectorAll(".line, .line-r");
        lines.forEach((box) => {
            lineController.current.observe(box);
        });

        const texts = document.querySelectorAll(".bouncer");
        texts.forEach((box) => {
            text.current.observe(box);
        });

        const sections = document.querySelectorAll(".sec");
        sections.forEach((box) => {
            section.current.observe(box);
        });

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            observer.current.disconnect();
            lineController.current.disconnect();
            text.current.disconnect();
            section.current.disconnect();
        };
    }, []);
    const slider = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("shower");
            }
        });
    };
    const liner = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("line-render");
            }
        });
    };

    const sectionViewManager = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActive(entry.target.classList[2]);
            }
        });
    };

    const texter = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("text-showup");
            }
        });
    };

    const [about, projects, cpstats, exp, contact] = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const goabout = () => {
        about.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const goprojects = () => {
        projects.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const gocpstats = () => {
        cpstats.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const goexp = () => {
        exp.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const gocontact = () => {
        contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return (
        <>
            <SideBar f1={goabout} f2={goprojects} f3={gocpstats} f4={goexp} f5={gocontact} activate = {active}/>
            <div className="root-content">
                <Header />
                <div className="sections">
                    <HomePage />
                    <div style={{marginTop: "5rem", paddingTop: "100px" }} ref={about}><AboutMe  /></div>
                    <div style={{marginTop: "5rem", paddingTop: "100px"}} ref={projects}><Projects /></div>
                    <div style={{marginTop: "5rem", paddingTop: "100px"}} ref={cpstats}><CPStats /></div>
                    <div style={{marginTop: "5rem", paddingTop: "100px"}} ref={exp}><Experience /></div>
                    <div style={{marginTop: "5rem", paddingTop: "100px"}} ref={contact}><Contact /></div>
                </div>
                <span className="credits">Made with ❤️ By <a href="#">Abhijit Karmakar</a></span>
            </div>
        </>
    );
}

export default App;
