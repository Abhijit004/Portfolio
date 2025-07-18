import React from "react";
import { ExperienceCard } from "../../components/components";
import "./experience.css";

var gdsc =
    "An extended Dev Team member, had amazing experience learning new stuffs from highly talented seniors. Developed the official website for Google Cloud Study Jams 2023, GDSC IIEST. More details above in my project section";

var codeiiest =
    "Actively woking on designing and developing the official website for CodeIIEST, which will also feature a CP ranklist as a highlight."

var mentorexp = "Mentored in a web development bootcamp, mainly in frontend development. Conducted multiple online sessions where I guided participants through live project builds, offering hands-on experience and practical insights into development processes."

var accenture = "As an Advanced Application Engineering Intern at Accenture, I developed an Angular web app with JWT authentication, routing, and dependency injection, then integrated it with a MERN backend (MongoDB Atlas) for full CRUD operations and seamless communication. Additionally, I designed and tested RESTful APIs using ASP.NET Core and C#, applying OOP principles."

export default function Experience() {
    return (
        <div className="experience-section sec s4">
            <div className="heading">
                <div className="hiderx"></div>
                <div className="line"></div>
                <span classname='theme-grad'>Experience</span>
                <div className="line-r"></div>
            </div>
            <div className="exp-list">
                <ExperienceCard
                    company={"Accenture"}
                    role={"AEH Intern"}
                    daterange={"May 2025 - July 2025"}
                    loc={"Bangalore"}
                    desc={accenture}
                />
                <ExperienceCard
                    company={"DevCamp"}
                    role={"Mentor"}
                    daterange={"June 2024 - July 2024"}
                    loc={"Shibpur"}
                    desc={mentorexp}
                />
                <ExperienceCard
                    company={"CodeIIEST"}
                    role={"Web Developer"}
                    daterange={"Sept 2024 - Present"}
                    loc={"Shibpur"}
                    desc={codeiiest}
                />
                <ExperienceCard
                    company={"GDSC-IIEST"}
                    role={"Dev Team"}
                    daterange={"Sept 2024 - Present"}
                    loc={"Shibpur"}
                    desc={gdsc}
                />
            </div>
        </div>
    );
}
