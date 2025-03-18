import React from "react";
import { ProjectCard } from "../../components/components";
import "./projects.css";

var weatherapp =
    "A responsive Weather App made using Weathermap API, which can provide realtime weather information and prediction of next 5 days.";
var gcsj =
    "Teamed up with my brother and fellow batchmate Soumyajit Karmakar to build a website for Google Cloud Study Jams, IIEST Shibpur.";
var tictactoe = `A simple tic-tac-toe game made using React. My first react project, thanks to a great "Learning By doing" tic-tac-toe project from React's official website.`;
var portfolio =
    "An elegant, responsive portfolio inspired from TomIsLoading's design. Carefully chosen theme colors and crafted scroll animations makes it complete.";
var cpdsa =
    "Designed and co-developed a website that attracted over 650 unique IP addresses and over 2,000 page visits within seven days of its launch (as per Vercel analytics).";
var calculator =
    "A basic calculator with glassmorphism UI, using only plain HTML, CSS and Vanilla Javascript. Provided light and dark mode features to enhance user experience.";
var rebeca = "Developed authentication for Rebeca fest website, implementing Google login for IIESTians and a passkey-based access system. Managed client, server, and admin modules for user registration and event management."

var instruo = "Led the complete design and development of the Instruo website, focusing on an intuitive UI/UX and seamless event interactions to enhance the fest experience, which featured 20+ events and 100+ participations accross all events."
function Projects() {
    return (
        <div className="projects sec s2">
            <div className="heading">
                <div className="hiderx"></div>
                <div className="line"></div>
                <div className="bouncer">
                    <span style={{ color: "var(--themecol)", paddingRight: "5px" }}>My</span>
                    <span>Projects</span>
                </div>
            </div>
            <div className="project-list">
                <ProjectCard
                    techs={["CSS", "HTML", "JavaScript", "React", "MongoDB", "Mongoose", "Express", "MUI", "Ant Design", "API", "Figma"]}
                    pic={"proj-rebeca.png"}
                    heading={"Rebeca"}
                    description={rebeca}
                    link={"https://rebeca.in"}
                    gitlink={"https://github.com/Soumyajit0803/rebeca-v2"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "JavaScript", "React", "Ant Design", "API", "Figma"]}
                    pic={"proj-instruo.png"}
                    heading={"Instruo"}
                    description={instruo}
                    link={"https://instruo.tech"}
                    gitlink={"https://github.com/Abhijit004/InstruoMain2k24"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React", "Material UI", "API"]}
                    pic={"cpdsa.webp"}
                    heading={"CP DSA Bootcamp"}
                    description={cpdsa}
                    link={"https://cp-dsa-bootcamp.vercel.app/"}
                    gitlink={"https://github.com/Soumyajit0803/cp-dsa-bootcamp"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React"]}
                    pic={"proj-portfolio.webp"}
                    heading={"Portfolio"}
                    description={portfolio}
                    link={"https://abhijit-karmakar.vercel.app/"}
                    gitlink={"https://github.com/Abhijit004/Portfolio"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React", "ChartJS", "API"]}
                    pic={"proj-weather.webp"}
                    heading={"Weather App"}
                    description={weatherapp}
                    link={"https://weather-app-abhijit004.vercel.app/"}
                    gitlink={"https://github.com/Abhijit004/Weather-App"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React", "Material UI"]}
                    pic={"proj-gcsj.webp"}
                    heading={"GCSJ-IIEST"}
                    description={gcsj}
                    link={"https://gcsj-iiests.vercel.app/"}
                    gitlink={"https://github.com/dsc-iiest/gcsj-website"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React"]}
                    pic={"proj-tictactoe.webp"}
                    heading={"Tic Tac Toe"}
                    description={tictactoe}
                    link={"https://tic-tac-7sssu0s1f-abhijit004.vercel.app/"}
                    gitlink={"https://github.com/Abhijit004/tic-tac-toe"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Vanilla Javascript"]}
                    pic={"calculator.webp"}
                    heading={"Basic Calculator"}
                    description={calculator}
                    link={"https://abhijit004.github.io/Basic-Calculator/"}
                    gitlink={"https://github.com/Abhijit004/tic-tac-toe"}
                />
            </div>
        </div>
    );
}

export default Projects;
