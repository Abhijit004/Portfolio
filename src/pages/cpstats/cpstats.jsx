import React from "react";
import { CPcard, ExperienceCard } from "../../components/components.jsx";
import "./cpstats.css";
const icpc = "Achieved All India Rank 458 in the ICPC Asia Amritaputi 2024 prelims with my team ERROR404, securing selection for the Amritapuri Regionals, making it the first ICPC experience for me!"
export default function CPStats() {
    return (
        <div className="cp-stats sec s3">
            <div className="heading">
                <div className="hiderx"></div>
                <span style={{ color: "var(--themecol)" }}>CP </span>
                <span>Stats </span>
                <div className="line-r"></div>
            </div>
            <div className="cpcard-list">
                <CPcard
                    web={"LeetCode"}
                    rating={1912}
                    contests={21}
                    problems={718}
                    link={"https://leetcode.com/__Abhijit__/"}
                />
                <CPcard
                    web={"CodeChef"}
                    rating={1717}
                    contests={26}
                    problems={236}
                    link={"https://www.codechef.com/users/artistrup07"}
                />
                <CPcard
                    web={"CodeForces"}
                    rating={1403}
                    contests={38}
                    problems={359}
                    link={"https://codeforces.com/profile/abhijit07cf"}
                />
                <ExperienceCard
                    company={"ICPC"}
                    role={"Team ERROR404"}
                    daterange={"December 28th - 29th"}
                    loc={"Amritapuri Campus"}
                    desc={icpc}
                />
            </div>
        </div>
    );
}
