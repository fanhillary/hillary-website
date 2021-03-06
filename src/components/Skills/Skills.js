/* 
* Skills Component section showing 4 tiles for front, back, languages, and misc skills.
*/
import React from 'react';
import './Skills.css';
import frontEndImage from '../../images/front-end.png';
import languagesImage from '../../images/languages.png';
import backendImage from '../../images/backend.png';
import miscellaneousImage from '../../images/miscellaneous.png';

let Skills = () => {
    let frontSkill = [];
    let backSkill = [];
    let languageSkill = [];
    let miscSkill = [];

    // list of skills for each tile and relevant icons for each
    let skills = {
        frontend: [{name: "HTML/CSS", icon: "fa-html5"}, {name: 'Angular', icon: 'fa-angular'}, {name: 'React.js', icon: 'fa-react'}, {name: 'User Experience Design', icon: 'fas fa-paint-brush'}, {name: 'Responsive Web Design', icon: 'fas fa-mobile-alt'}],
        backend: [{name: 'Node.js', icon: 'fa-node-js'}, {name: 'Express.js', icon: 'fas fa-mug-hot'}, {name: 'MongoDB', icon: 'fa-envira'}, {name: 'PostgreSQL', icon: 'fas fa-database'}, {name: 'Django', icon: 'fa-python'}],
        languages: [{name:'Python', icon: 'fa-python'}, {name: 'JavaScript', icon: 'fa-js-square'}, {name: 'Java', icon: 'b fa-java'}, {name: 'TypeScript', icon: 'fa-angular'}, {name: 'C', icon: 'fas fa-code'}],
        misc: [{name: 'Docker', icon: 'fa-docker'}, {name: 'Version Control/git', icon: 'fas fa-code-branch'}, {name: 'Jenkins', icon: 'b fa-jenkins'}, {name: 'socket.io', icon: 'fas fa-bolt'}, {name: 'Firebase', icon: 'fa-hotjar'}]
    }
   
    // translate skills array to dynamic html for display
    for (const element in skills) {
        for (const [index,skill] of skills[element].entries()) {
            let skillName = skill.name;
            let skillIcon = skill.icon;
            if (element === "frontend") {
                frontSkill.push(<div className="flex justify-center items-center" key={"front" + index}> <div className="mr2"><i className={"fab f4 " + skillIcon}></i></div> <div><p className="f5 lh-copy measure"> {skillName} </p></div></div>);
            } else if (element === "backend") {
                backSkill.push(<div className="flex justify-center items-center"  key={"back" + index}> <div className="mr2"><i className={"fab f4 " + skillIcon}></i></div> <div><p className="f5 lh-copy measure"> {skillName} </p></div></div>);
            } else if (element === "languages") {
                languageSkill.push(<div className="flex justify-center items-center" key={"lang" + index}> <div className="mr2"><i className={"fab f4 " + skillIcon}></i></div> <div><p className="f5 lh-copy measure"> {skillName} </p></div></div>);
            } else if (element === "misc") {
                miscSkill.push(<div className="flex justify-center items-center" key={"misc" + index}> <div className="mr2"><i className={"fab f4 " + skillIcon}></i></div> <div><p className="f5 lh-copy measure" > {skillName} </p></div></div>);
            }
        }
    }

    return (
        <div id="skills-section" className="container">
            <h1 className="subheader lh-title pb5">Skills</h1>
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
                        {backSkill}
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
