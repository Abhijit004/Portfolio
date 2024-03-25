import React from "react";
import { CPcard } from "../../components/components.jsx";
import "./cpstats.css";

export default function CPStats() {
    return (
        <div className="cp-stats" >
            <div className="heading">
                <div className="hiderx"></div>
                <span style={{ color: "var(--themecol)" }}>CP </span>
                <span>Stats </span>
                <div className="line-r"></div>
            </div>
            <div className="cpcard-list">
                <CPcard web={"LeetCode"} rating={1682} contests={11} problems={340} link={"https://leetcode.com/__Abhijit__/"}/>
                <CPcard web={"CodeChef"} rating={1653} contests={19} problems={187} link={"https://www.codechef.com/users/artistrup07"}/>
                <CPcard web={"CodeForces"} rating={1212} contests={22} problems={174} link={"https://codeforces.com/profile/abhijit07cf"}/>
            </div>
        </div>
    );
}
