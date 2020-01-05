import React from 'react';
import './ExperienceTile.css';
import PinkMemphis from './pink-memphis.png';
import PinkMemphisCounterpart from './pink-memphis-counterpart.png';
import TealMemphis from './teal-memphis.png';
import TealMemphisCounterpart from './teal-memphis-counterpart.png';

let ExperienceTile = ({experience}) => {
    const itemStyle = [
        {PinkMemphis}, {PinkMemphisCounterpart}, {TealMemphis}, {TealMemphisCounterpart}
    ]
    // console.log(PinkMemphis)
    console.log(itemStyle.values())
    return (
        
        <div className="card">
            <img src={PinkMemphis} alt="header"/>
            <div className="content">
                <p className="f6 lh-copy measure"> {experience['date']} </p>
                <hr></hr>
                <h1> {experience.company} </h1>
                <h3> {experience.position} </h3>
                <hr></hr>
                <p className="f5 lh-copy measure">
                    {experience.firstPoint}
                </p>
                <p className="f5 lh-copy measure">
                    {experience.secondPoint}
                </p>
            </div>
        </div>
    )
}
export default ExperienceTile;
