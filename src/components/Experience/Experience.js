/*
* Experience Component. Displays previous working experience.
* Holds array of ExperienceTiles. 
*/
import React from 'react';
import './Experience.css';
import ExperienceTile from './ExperienceTile/ExperienceTile.js';
import PinkMemphis from '../../images/pink-memphis.png';
import PinkMemphisCounterpart from '../../images/pink-memphis-counterpart.png';
import TealMemphis from '../../images/teal-memphis.png';
import TealMemphisCounterpart from '../../images/teal-memphis-counterpart.png';

let Experience = () => {
    // Data for each of the experience tiles
    const positions = [
        {
            date: 'August 2019 - Present',
            company: 'Cisco Systems',
            position: 'Full Stack Software Engineer',
            firstPoint: 'Built no-code framework for developers to create consumer facing API consuming tools',
            secondPoint: 'Allow users to define custom OAuth security schemes for each API called through the portal. This allowed for token generation without revealing API credentials',
            tags: ['Python', 'Docker', 'MongoDB', 'JavaScript', 'Machine Learning', 'API'],
            header: {PinkMemphis},
        },
        {
            date: 'June 2017- April 2018',
            company: 'Teradata',
            position: 'Software Engineer Intern',
            firstPoint: 'Used Angular 4 to convert 1500 page manual into a simple Web Application that guided to solve complicated upgrade dependency issues with Teradata products',
            secondPoint: 'Designed intuitive UX through iteration, mock-ups, user feedback, and gauging stakeholder requirements',
            tags: ['Angular', 'HTML/CSS', 'Docker', 'Selenium', 'UX Design'],
            header: {TealMemphis},
        },
        {
            date: 'October 2016 - March 2017',
            company: 'Mesh Education',
            position: 'Full Stack Software Engineer Intern',
            firstPoint: 'Used Django/Python and PostgreSQL to create a Web Application for real-time interaction between professors and students in lecture halls',
            secondPoint: 'Built student feedback form and professor\'s dashboard where can view analytical information including top confusing topics of the class',
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
    // create a experience tile for each element in position array
    for (const [index,position] of positions.entries()) {
        jobs.push(<ExperienceTile experience={position} key={index}/>);
    }


    return (
        <div id="experience-section" className="container">
            <div className="ml4 flex flex-wrap justify-center">
                <h1 className="subheader lh-title pb5">Work Experience</h1>
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
