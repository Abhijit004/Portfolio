import React from "react";
import "./CoderCard2.css";
import CountUp from "react-countup";
import lc from "../../../src/assets/LeetcodeLogo.png";
import cc from "../../../src/assets/CodechefLogo.png";
import cf from "../../../src/assets/CodeforcesLogo.png";
import lcback from "../../../src/assets/lcback.png";
import ccback from "../../../src/assets/ccback.png";
import cfback from "../../../src/assets/cfback.png";
import { useState, useRef, useEffect } from "react";

const NumberCountAnimation = ({ start = 0, end, duration, style }) => {
    const [isVisible, setIsVisible] = useState(false);
    const countUpRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (countUpRef.current) {
            observer.observe(countUpRef.current);
        }

        return () => {
            if (countUpRef.current) {
                observer.unobserve(countUpRef.current);
            }
        };
    }, []);

    return (
        <div ref={countUpRef} className="num" style={style}>
            {isVisible && <CountUp separator="" start={start} end={end} duration={duration} />}
        </div>
    );
};

const platform = {
    leetcode: {
        primary: "#C77F1B",
        image: lc,
        backdrop: lcback,
    },
    codechef: {
        primary: "#E9843C",
        image: cc,
        backdrop: ccback,
    },
    codeforces: {
        primary: "#2196F3",
        image: cf,
        backdrop: cfback,
    },
};

const CoderCard2 = ({ pt, rating, rank, solved, link, handle }) => {
    console.log(pt);
    const style = { color: platform[pt].primary };

    return (
        <div className={"codercard2 " + pt}>
            <div className="platform">
                <img src={platform[pt].image} alt="" srcset="" />
            </div>
            <a className='handle' href = {link} no_opener no_referrer>{handle}</a>
            <div className="backdrop">
                <img src={platform[pt].backdrop} alt="" srcset="" />
            </div>

            <div className="rating">
                <span className="num" style={style}>
                    <NumberCountAnimation style={style} start={0} end={rating} duration={1.5} />
                </span>
                <span>Highest Rating</span>
            </div>
            <div className="stats">
                <div className="stat">
                    <span className="num" style={style}>
                        <NumberCountAnimation style={style} start={0} end={rank} duration={1.5} />
                    </span>
                    <span>Best Rank</span>
                </div>
                <div className="stat">
                    <span className="num" style={style}>
                        <NumberCountAnimation style={style} start={0} end={solved} duration={1.5} />
                    </span>
                    <span>Solved</span>
                </div>
            </div>
        </div>
    );
};

export default CoderCard2;
