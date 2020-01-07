import React from 'react';
import './Portfolio.css';
import PortfolioTile from './PortfolioTile/PortfolioTile.js';
import FaceRecognitionImage from './face-recognition.png';
import TimeCapsuleImage from './time-capsule.png';
import DailyChallengeImage from './daily-challenge.png';
import WhatToEatImage from './what-to-eat.png';
import TritonTransitImage from './triton-transit.png';
import FlyeringRobotImage from './flyering-robot.png';
import ComputerLiteracyImage from './computer-literacy.png';
let Portfolio = ({portfolioStyle}) => {
    
    const projects = [
        {
            name: 'Face Recognition Web Application',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {FaceRecognitionImage},
            sourceLink: 'https://github.com/fanhillary/face-recognition',
            tags: ['JavaScript', 'React', 'API', 'Node.js', 'MongoDB', 'Express.js', 'HTML/CSS'],
            tileColor: 'bg-near-white',
        },
        {
            name: 'Daily Challenge Web Application',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {DailyChallengeImage},
            sourceLink: 'https://github.com/fanhillary/daily-challenge',
            demoLink: 'https://daily-random-challenge.herokuapp.com/#/',
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Node.js'],
            tileColor: 'DAD5EB',
        },
        {
            name: 'Time Capsule Web Application',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {TimeCapsuleImage},
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Node.js'],
            sourceLink: 'https://github.com/fanhillary/time-capsule',
            demoLink: 'https://time-capsule-62e6a.firebaseapp.com/',
            tileColor: 'bcb2db',
        },
        {
            name: 'What To Eat Slack Command',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {WhatToEatImage},
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Node.js'],
            sourceLink: 'https://github.com/fanhillary/what-to-eat',
            tileColor: 'bg-light-gray',
        },
        {
            name: 'Triton Transit Android App',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {TritonTransitImage},
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Node.js'],
            sourceLink: 'https://github.com/fanhillary/TritonTransit',
            tileColor: 'e9e6f3',
        },
        {
            name: 'Flyering Robot',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {FlyeringRobotImage},
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Node.js'],
            demoLink: '',
            tileColor: 'bcb2db',
        },
        {
            name: 'Computer Literacy Initiative',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {ComputerLiteracyImage},
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Node.js'],
            demoLink: 'https://www.computerliteracyinitiative.org/the-guide-to-master-your-pc/',
            tileColor: 'DAD5EB',
        }
    ]

    let items = [];
    for (const [index,project] of projects.entries()) {
        items.push(<PortfolioTile project={project} key={index}/>);
    }
    return (
        <div className={"portfolio-container " + portfolioStyle}>
            <section>
                <h1 class="f1 lh-title pb6">Portfolio</h1>
                <div>
                    <div className="flex flex-wrap justify-center">
                       {items}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Portfolio;
