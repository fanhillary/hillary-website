import React from 'react';
import './Skills.css';
import frontEndImage from './front-end.png';
import languagesImage from './languages.png';
import backendImage from './backend.png';
import miscellaneousImage from './miscellaneous.png';

let Skills = ({skillsStyle}) => {
    let skills = {
        frontend: ['HTML/CSS', 'Angular', 'React.js', 'JavaScript', 'User Experience Design', 'Responsive Web Design'],
        backend: ['Django', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
        languages: ['Python', 'JavaScript', 'Java', 'TypeScript', 'C'],
        misc: ['Docker', 'Version Control/git', 'Selenium Webdriver', 'Jenkins', 'Heroku', 'Firesbase']
    }
   
    let frontSkill = [];
    for (const [index,skill] of skills.frontend.entries()) {
        frontSkill.push(<p className="f5 lh-copy measure" key={index}> {skill} </p>);
    }

    let backskill = [];
    for (const [index,skill] of skills.backend.entries()) {
        backskill.push(<p className="f5 lh-copy measure" key={index}> {skill} </p>);
    }

    let languageSkill = [];
    for (const [index,skill] of skills.languages.entries()) {
        languageSkill.push(<p className="f5 lh-copy measure" key={index}> {skill} </p>);
    }

    let miscSkill = [];
    for (const [index,skill] of skills.misc.entries()) {
        miscSkill.push(<p className="f5 lh-copy measure" key={index}> {skill} </p>);
    }
    return (
        <div className={"container " + skillsStyle}>
            <h1 className="f1 lh-title pb6">Skills</h1>
            <div className="ml4 flex flex-wrap justify-center">
                <div className="skill-card card">
                    <img src={frontEndImage} alt="header"/>
                    <div className="experience-content">
                        <h1> Front End </h1>
                        {frontSkill}
                    </div>
                </div>
                <div className="skill-card card">
                    <img src={backendImage} alt="header"/>
                    <div className="experience-content">
                        <h1> Back End </h1>
                        {backskill}
                    </div>
                </div>
                <div className="skill-card card">
                    <img src={languagesImage} alt="header"/>
                    <div className="experience-content">
                        <h1> Languages </h1>
                        {languageSkill}
                    </div>
                </div>
                <div className="skill-card card">
                    <img src={miscellaneousImage} alt="header"/>
                    <div className="experience-content">
                        <h1> Miscellaneous </h1>
                        {miscSkill}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;
