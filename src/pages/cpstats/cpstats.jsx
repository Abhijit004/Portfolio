import React from "react";
import { CPcard, ExperienceCard } from "../../components/components.jsx";
import "./cpstats.css";
import CoderCard2 from "../../components/CoderCard2/CoderCard2.jsx";
const icpc =
    "Achieved All India Rank 458 in the ICPC Asia Amritaputi 2024 prelims with my team ERROR404, securing selection for the Amritapuri Regionals, making it the first ICPC experience for me!";
export default function CPStats() {
    return (
        <div className="cp-stats sec s3">
            <div className="heading">
                <div className="hiderx"></div>
                <span className="theme-grad">CP </span>
                <span>Stats </span>
                <div className="line-r"></div>
            </div>
            <div className="cpcard-list">
                {/* <CPcard
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
                /> */}

                <CoderCard2 pt={"leetcode"} link={"https://leetcode.com/__Abhijit__/"} rank={792} rating={1912} solved={965} key={1} handle='__Abhijit__'/>
                <CoderCard2 pt={"codechef"} link={"https://www.codechef.com/users/artistrup07"} rank={46} rating={1743} solved={272} key={2} handle='artistrup07'/>
                <CoderCard2 pt={"codeforces"} link={"https://codeforces.com/profile/abhijit07cf"} rank={857} rating={1440} solved={454} key={3} handle='abhijit07cf' />
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
