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
            name: 'Face Recognition Web App',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {FaceRecognitionImage},
            sourceLink: 'https://github.com/fanhillary/face-recognition',
            demoLink: 'https://face-recognition-hifan.herokuapp.com',
            tags: ['JavaScript', 'React', 'API', 'PostgreSQL', 'Node.js',  'Express.js', 'HTML/CSS'],
            tileColor: 'bg-near-white',
        },
        {
            name: 'Daily Challenge Web App',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {DailyChallengeImage},
            sourceLink: 'https://github.com/fanhillary/daily-challenge',
            demoLink: 'https://daily-random-challenge.herokuapp.com/#/',
            tags: ['React', 'Firebase', 'HTML/CSS', 'Heroku', 'Node.js', 'Google Charts API'],
            tileColor: 'DAD5EB',
        },
        {
            name: 'Time Capsule Web App',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {TimeCapsuleImage},
            tags: ['React', 'Firebase', 'HTML/CSS', 'Prompt Generation', 'Node.js'],
            sourceLink: 'https://github.com/fanhillary/time-capsule',
            demoLink: 'https://time-capsule-62e6a.firebaseapp.com/',
            tileColor: 'bcb2db',
        },
        {
            name: 'What To Eat Slack Command',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {WhatToEatImage},
            tags: ['Yelp API', 'Conversational Bot', 'HTML/CSS', 'Express.js', 'Node.js'],
            sourceLink: 'https://github.com/fanhillary/what-to-eat',
            tileColor: 'bg-light-gray',
        },
        {
            name: 'Triton Transit Android App',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {TritonTransitImage},
            tags: ['Android Studio', 'Java', 'XML', 'Google Map API', 'HTML/CSS'],
            sourceLink: 'https://github.com/fanhillary/TritonTransit',
            tileColor: 'e9e6f3',
        },
        {
            name: 'Flyering Robot',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {FlyeringRobotImage},
            tags: ['Arduino', 'Java', 'XML'],
            demoLink: '',
            tileColor: 'bcb2db',
        },
        {
            name: 'Computer Literacy Initiative',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: {ComputerLiteracyImage},
            tags: ['Writing', 'Publication'],
            demoLink: 'https://www.computerliteracyinitiative.org/the-guide-to-master-your-pc/',
            tileColor: 'DAD5EB',
        }
    ]

    let items = [];
    for (const [index,project] of projects.entries()) {
        items.push(<PortfolioTile project={project} key={index}/>);
    }
    return (
        <div className={"container " + portfolioStyle}>
            <h1 className="f1 lh-title pb6">Portfolio</h1>
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
