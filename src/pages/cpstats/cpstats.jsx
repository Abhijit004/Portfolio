import React from "react";
import { CPcard } from "../../components/components.jsx";
import "./cpstats.css";

export default function CPStats() {
    return (
        <div className="cp-stats sec s3" >
            <div className="heading">
                <div className="hiderx"></div>
                <span style={{ color: "var(--themecol)" }}>CP </span>
                <span>Stats </span>
                <div className="line-r"></div>
            </div>
            <div className="cpcard-list">
                <CPcard web={"LeetCode"} rating={1760} contests={17} problems={665} link={"https://leetcode.com/__Abhijit__/"}/>
                <CPcard web={"CodeChef"} rating={1716} contests={26} problems={234} link={"https://www.codechef.com/users/artistrup07"}/>
                <CPcard web={"CodeForces"} rating={1403} contests={34} problems={322} link={"https://codeforces.com/profile/abhijit07cf"}/>
            </div>
        </div>
    );
}
