import React from 'react';
import './Experience.css';
import rightLeaf from './leaf-right.png';
import rightLeafSteep from './leaf-right-steep.png';
import leftLeafSteep from './leaf-left-steep.png';
import leftLeaf from './leaf-left.png';
import tropicalLeafRight from './tropical-leaf-right.png';
import tropicalLeaf from './tropical-leaf.png';
import ExperienceTile from './ExperienceTile/ExperienceTile.js';
import PinkMemphis from './pink-memphis.png';
import PinkMemphisCounterpart from './pink-memphis-counterpart.png';
import TealMemphis from './teal-memphis.png';
import TealMemphisCounterpart from './teal-memphis-counterpart.png';

let Experience = ({leafVisibility}) => {
    const positions = [
        {
            date: 'August 2019 - Present',
            company: 'Cisco Systems',
            position: 'Software Engineer',
            firstPoint: 'Used Python to help transform the old web portal into a machine learning driven web application',
            secondPoint: 'Built API and scripts to automate collection and processing of training data for natural language processing conversant tool',
            tags: ['Python', 'Docker', 'MongoDB', 'JavaScript', 'Machine Learning', 'API'],
            header: {PinkMemphis},
        },
        {
            date: 'June 2017- April 2018',
            company: 'Teradata',
            position: 'Software Engineer Intern',
            firstPoint: 'Used Angular 4 to build a Web Application that automated a 500 page manual for solving complicated upgrade dependency issues with Teradata products',
            secondPoint: 'Designed UX for the app through iteration, mock-ups, and user feedback',
            tags: ['Angular', 'HTML/CSS', 'Docker', 'Selenium', 'UX Design'],
            header: {TealMemphis},
        },
        {
            date: 'October 2016 - March 2017',
            company: 'Mesh Education',
            position: 'Software Engineer Intern',
            firstPoint: 'Used Django/Python and PostgreSQL to create a Web Application for real-time interaction between professors and students in lecture halls',
            secondPoint: 'Follow Agile methodologies with scrum meetings, retrospectives, code reviews, continuous integration.',
            tags: ['Django/Python', 'PostgreSQL', 'Real-Time', 'Agile', 'SPA'],
            header: {TealMemphisCounterpart},
        },
        {
            date: 'Graduated: June 2019',
            company: 'University of California, San Diego',
            position: 'Computer Science B.S.',
            header: {PinkMemphisCounterpart},
        },
    ]

    
    let jobs = [];
    for (const [index,position] of positions.entries()) {
        jobs.push(<ExperienceTile experience={position} key={index}/>);
    }


    return (
        <div className="container">
            {/* <div className = {"leaf-container " + leafVisibility}>
                <img className="leaf right-leaf" src={rightLeaf} alt=""/>
                <img className="leaf right-leaf-steep" src={rightLeafSteep} alt=""/>
                <img className="leaf left-leaf-steep" src={leftLeafSteep} alt=""/>
                <img className="leaf left-leaf" src={leftLeaf} alt=""/>
                <img className="leaf tropical-leaf" src={tropicalLeaf} alt=""/>
                <img className="leaf tropical-leaf-right" src={tropicalLeafRight} alt=""/>
            </div> */}
            <div className="ml4 flex flex-wrap justify-center">
                <h1 class="subheader lh-title pb5">Work Experience</h1>
                <div className="experience-content">
                    <div className="flex flex-wrap justify-center">
                        {jobs}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;
