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
                <CPcard web={"LeetCode"} rating={1912} contests={21} problems={718} link={"https://leetcode.com/__Abhijit__/"}/>
                <CPcard web={"CodeChef"} rating={1717} contests={26} problems={236} link={"https://www.codechef.com/users/artistrup07"}/>
                <CPcard web={"CodeForces"} rating={1403} contests={38} problems={359} link={"https://codeforces.com/profile/abhijit07cf"}/>
            </div>
        </div>
    );
}
