import React from 'react';
import './Portfolio.css';
import PortfolioTile from '../PortfolioTile/PortfolioTile.js';

let Portfolio = ({portfolioStyle}) => {
    const projects = [
        {
            name: 'Face Recognition',
            description: 'Uses Clarifai API to allow users to enter a picture image to detect the face in the photo',
            image: '',
            link: '',
            tileColor: '',
        },
    ]

    return (
        <div className={"portfolio-container " + portfolioStyle}>
            <section>
                <h1 className="pb6"> Work Experience</h1>
                <div className="portfolio-content">
                    <div className="flex flex-wrap justify-center tl">
                        <PortfolioTile/>
                        <PortfolioTile/>
                        <PortfolioTile/>
                        <PortfolioTile/>
                        <PortfolioTile/>
                        <PortfolioTile/>
                        <PortfolioTile/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Portfolio;
