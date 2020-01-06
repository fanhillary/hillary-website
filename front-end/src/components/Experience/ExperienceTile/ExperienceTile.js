import React from 'react';
import './ExperienceTile.css';

let ExperienceTile = ({experience}) => {
    let header = Object.values(experience['header'])[0]
    return (
        
        <div className="card">
            <img src={header} alt="header"/>
            <div className="content">
                <p className="f6 lh-copy measure"> {experience['date']} </p>
                <hr></hr>
                <h1> {experience.company} </h1>
                <h3> {experience.position} </h3>
                <hr></hr>
                {/* <ul>
                    <li> {experience.firstPoint}</li>
                    <li> {experience.secondPoint}</li>
                </ul> */}
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
