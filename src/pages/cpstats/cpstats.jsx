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
                <CPcard web={"LeetCode"} rating={1760} contests={15} problems={507} link={"https://leetcode.com/__Abhijit__/"}/>
                <CPcard web={"CodeChef"} rating={1653} contests={23} problems={214} link={"https://www.codechef.com/users/artistrup07"}/>
                <CPcard web={"CodeForces"} rating={1402} contests={31} problems={264} link={"https://codeforces.com/profile/abhijit07cf"}/>
            </div>
        </div>
    );
}
