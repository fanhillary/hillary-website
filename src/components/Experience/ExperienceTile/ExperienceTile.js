/*
* Experience Tile Component. 
* The tile itself containing data for individual job positions (company, description, tags)
*/
import React from 'react';
import './ExperienceTile.css';
import SkillsTag from '../../SkillsTag/SkillsTag.js';

let ExperienceTile = ({experience}) => {
    let header = Object.values(experience['header'])[0];
    let tags = [];

    // from the position array in Experience.js, create skillstag component for each skill listed.
    if (experience['tags']) {
        for (const [index,skill] of experience['tags'].entries()) {
            tags.push(<SkillsTag skill={skill} key={index}/>);
        }
    }

    return (
        
        <div className="card">
            <img className="experience-image" src={header} alt="header"/>
            <div className="experience-content">
                <p className="f6 lh-copy measure"> {experience['date']} </p>
                <h1> {experience.company} </h1>
                <h3> {experience.position} </h3>
                <p className="point f5 lh-copy measure">
                    {experience.firstPoint}
                </p>
                <p className="point f5 lh-copy measure">
                    {experience.secondPoint}
                </p>
                <div className="flex flex-wrap justify-center">
                    {tags}
                </div>
            </div>
        </div>
    )
}
export default ExperienceTile;
