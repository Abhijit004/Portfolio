import React from "react";
import { ProjectCard } from "../../components/components";
import "./projects.css";

var weatherapp = "A responsive Weather App made using Weathermap API, which can provide realtime weather information and prediction of next 5 days."
var gcsj = "Teamed up with my brother and fellow batchmate Soumyajit Karmakar to build a website for Google Cloud Study Jams, IIEST Shibpur."
var tictactoe = `A simple tic-tac-toe game made using React. My first react project, thanks to a great "Learning By doing" tic-tac-toe project from React's official website.`
var portfolio = "An elegant, responsive portfolio inspired from TomIsLoading's design. Carefully chosen theme colors and crafted scroll animations makes it complete."

function Projects() {
    return (
        <div className="projects">
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
                    techs={["CSS", "HTML", "Javascript", "React", "ChartJS"]}
                    pic={"proj-weather.png"}
                    heading={"Weather App"}
                    description={weatherapp}
                    link={"https://weather-app-abhijit004.vercel.app/"}
                    gitlink={"https://github.com/Abhijit004/Weather-App"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React", "Material UI"]}
                    pic={"proj-gcsj.png"}
                    heading={"GCSJ-IIEST"}
                    description={gcsj}
                    link={"https://gcsj-iiests.vercel.app/"}
                    gitlink={"https://github.com/dsc-iiest/gcsj-website"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React"]}
                    pic={"proj-tictactoe.png"}
                    heading={"Tic Tac Toe"}
                    description={tictactoe}
                    link={"https://tic-tac-7sssu0s1f-abhijit004.vercel.app/"}
                    gitlink={"https://github.com/Abhijit004/tic-tac-toe"}
                />
                <ProjectCard
                    techs={["CSS", "HTML", "Javascript", "React"]}
                    pic={"proj-portfolio.jpg"}
                    heading={"Portfolio"}
                    description={portfolio}
                    link={"https://abhijit-karmakar.vercel.app/"}
                    gitlink={"https://github.com/Abhijit004/Weather-App"}
                />
            </div>
        </div>
    );
}

export default Projects;
