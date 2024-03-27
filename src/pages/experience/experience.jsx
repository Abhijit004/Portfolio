import React from "react";
import { ExperienceCard } from "../../components/components";
import "./experience.css";

var gdsc =
    "An extended Dev Team member, had amazing experience learning new stuffs from highly talented seniors. Developed the official website for Google Cloud Study Jams 2023, GDSC IIEST. More details above in my project section";

var codeiiest =
    "Actively woking on designing and developing the official website for CodeIIEST, which will also feature a CP ranklist as a highlight."

export default function Experience() {
    return (
        <div className="experience-section">
            <div className="heading">
                <div className="hiderx"></div>
                <div className="line"></div>
                <span>Experience</span>
                <div className="line-r"></div>
            </div>
            <div className="exp-list">
                <ExperienceCard
                    company={"GDSC-IIEST"}
                    role={"Dev Team"}
                    daterange={"Sept 2024 - Present"}
                    loc={"Shibpur"}
                    desc={gdsc}
                />
                <ExperienceCard
                    company={"CodeIIEST"}
                    role={"Web Developer"}
                    daterange={"Setp 2024 - Present"}
                    loc={"Shibpur"}
                    desc={codeiiest}
                />
            </div>
        </div>
    );
}
