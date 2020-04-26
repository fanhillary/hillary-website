/*
* Portfolio Component. Displays projects and exgracurriculars previously worked on.
* Holds array of Portfolio Tiles.
*/
import React from 'react';
import './Portfolio.css';
import PortfolioTile from './PortfolioTile/PortfolioTile.js';
import FaceRecognitionImage from '../../images/face-recognition.png';
import TimeCapsuleImage from '../../images/time-capsule.png';
import DailyChallengeImage from '../../images/daily-challenge.png';
import WhatToEatImage from '../../images/what-to-eat.png';
import TritonTransitImage from '../../images/triton-transit.png';
import FlyeringRobotImage from '../../images/flyering-robot.png';
import ComputerLiteracyImage from '../../images/computer-literacy.png';
let Portfolio = () => {
    
    // data for each of the projects to display
    const projects = [
        {
            name: 'Face Recognition Web App',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {FaceRecognitionImage},
            sourceLink: 'https://github.com/fanhillary/face-recognition',
            demoLink: 'https://face-recognition-hifan.herokuapp.com',
            tags: ['JavaScript', 'React', 'PostgreSQL', 'Node.js',  'Express.js'],
            tileColor: 'bg-near-white',
        },
        {
            name: 'Daily Challenge Web App',
            description: 'SPA application that gives user a randomly generated challenge everyday and fun analytics to track progress',
            image: {DailyChallengeImage},
            sourceLink: 'https://github.com/fanhillary/daily-challenge',
            demoLink: 'https://fanhillary.github.io/daily-challenge/',
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Google Charts API'],
            tileColor: 'DAD5EB',
        },
        {
            name: 'Time Capsule Web App',
            description: 'A diary that gives you a new prompt every day and displays your previous year\'s responses',
            image: {TimeCapsuleImage},
            tags: ['React', 'Firebase', 'HTML/CSS', 'Prompt Generation', 'Node.js'],
            sourceLink: 'https://github.com/fanhillary/time-capsule',
            demoLink: 'https://time-capsule-62e6a.firebaseapp.com/',
            tileColor: 'bcb2db',
        },
        {
            name: 'What To Eat Slack Command',
            description: 'Slack Messaging App slash command that displays three random restaurant options in the provided area',
            image: {WhatToEatImage},
            tags: ['Yelp API', 'Conversational Bot', 'HTML/CSS', 'Express.js', 'Node.js'],
            sourceLink: 'https://github.com/fanhillary/what-to-eat',
            tileColor: 'bg-light-gray',
        },
        {
            name: 'Triton Transit Android App',
            description: 'Helps UCSD students by displaying accurate arrival times, real-time routes of bus lines, and nearby bus stops',
            image: {TritonTransitImage},
            tags: ['Android Studio', 'Java', 'XML', 'Google Map API', 'HTML/CSS'],
            sourceLink: 'https://github.com/fanhillary/TritonTransit',
            tileColor: 'e9e6f3',
        },
        {
            name: 'Flyering Robot',
            description: 'A bluetooth-controlled arduino robot that helped my club organization flyer posters and attract newcomers during recruiting week',
            image: {FlyeringRobotImage},
            tags: ['Arduino', 'Java', 'XML', 'Project Management'],
            demoLink: '',
            tileColor: 'bcb2db',
        },
        {
            name: 'Computer Literacy Initiative',
            description: 'Co-author of a guide that teaches all the necessary skills on a PC. We used this curriculum to hold classes for the elderly and children.',
            image: {ComputerLiteracyImage},
            tags: ['Writing', 'Publication', 'Tutoring', 'Photoshop'],
            demoLink: 'https://www.computerliteracyinitiative.org/the-guide-to-master-your-pc/',
            tileColor: 'DAD5EB',
        }
    ]

    let items = [];
    // create a porfolio tile for each of the projects listed in array
    for (const [index,project] of projects.entries()) {
        items.push(<PortfolioTile project={project} key={index}/>);
    }
    return (
        <div className="container">
            <h1 className="subheader lh-title pb5">Portfolio</h1>
            <div>
                <div>
                    <div className="flex flex-wrap justify-center">
                       {items}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;
