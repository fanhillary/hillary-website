import React from 'react';
import './Experience.css';
import rightLeaf from './leaf-right.png';
import rightLeafSteep from './leaf-right-steep.png';
import leftLeafSteep from './leaf-left-steep.png';
import leftLeaf from './leaf-left.png';
import tropicalLeafRight from './tropical-leaf-right.png';
import tropicalLeaf from './tropical-leaf.png';
import ExperienceTile from '../ExperienceTile/ExperienceTile.js';
let Experience = ({experienceStyle, leafVisibility}) => {
    const positions = [
        {
            date: 'August 2019 - Present',
            company: 'Cisco Systems',
            position: 'Software Engineer',
            firstPoint: 'Worked with Python, Angular, Docker, and MongoDB to build a natural language processing search engine.',
            secondPoint: 'Follow Agile methodologies with scrum meetings, retrospectives, code reviews, continuous integration.'
        },
        {
            date: 'June 2017- April 2018',
            company: 'Teradata',
            position: 'Software Engineer Intern',
            firstPoint: 'Used Angular 4 to build a Web Application that guides user to fix system dependency solutions',
            secondPoint: 'Designed UX and flow of app through iteration and mock-ups'
        },
        {
            date: 'October 2016 - March 2017',
            company: 'Mesh Education',
            position: 'Software Engineer Intern',
            firstPoint: 'Used Django/Python and PostgreSQL to create a Web Application for real-time interaction between professors and students in lecture halls',
            secondPoint: 'Documented Use Cases and Requirements with agile techniques',
        },
        {
            date: 'Graduated: June 2019',
            company: 'University of California, San Diego',
            position: 'Computer Science B.S.',
        },
    ]

    // let items = [];
    // for (const [index,position] of positions.entries()) {
    //     console.log(position);
    //     items.push(<ExperienceTile experience={position} key={index}/>);
    // }


    return (
        <div className={"experience-container " + experienceStyle}>
            <div className = {"leaf-container " + leafVisibility}>
                <img className="leaf right-leaf" src={rightLeaf} alt=""/>
                <img className="leaf right-leaf-steep" src={rightLeafSteep} alt=""/>
                <img className="leaf left-leaf-steep" src={leftLeafSteep} alt=""/>
                <img className="leaf left-leaf" src={leftLeaf} alt=""/>
                <img className="leaf tropical-leaf" src={tropicalLeaf} alt=""/>
                <img className="leaf tropical-leaf-right" src={tropicalLeafRight} alt=""/>
            </div>
            <div className="w-50">
                <h1> Work Experience</h1>
                <div className="flex flex-wrap justify-center">
                    <ExperienceTile experience={positions[0]}/>
                    <ExperienceTile experience={positions[1]}/>
                    <ExperienceTile experience={positions[2]}/>
                    <ExperienceTile experience={positions[3]}/>
                </div>
            </div>
        </div>
    )
}
export default Experience;
