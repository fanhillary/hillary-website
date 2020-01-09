import React from 'react';
import './ExperienceTile.css';
import SkillsTag from '../../SkillsTag/SkillsTag.js';

let ExperienceTile = ({experience}) => {
    let header = Object.values(experience['header'])[0]

    let tags = [];
    if (experience['tags']) {
        for (const [index,skill] of experience['tags'].entries()) {
            tags.push(<SkillsTag skill={skill} key={index}/>);
        }
    }

    return (
        
        <div className="card">
            <img src={header} alt="header"/>
            <div className="experience-content">
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
                <div className="flex flex-wrap justify-center">
                    {tags}
                </div>
            </div>
        </div>
    )
}
export default ExperienceTile;
