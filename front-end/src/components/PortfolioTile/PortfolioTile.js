import React, { Component } from 'react';
import './PortfolioTile.css';

let PortfolioTile = ({project}) => {
    let icon = Object.values(project['image'])[0]

    return (
        
        <div className="portfolio-card">
            <div className={"default-display flex flex-wrap align-center justify-center" + project['tileColor']}>
                <img className="project-icon" src={icon} alt="header"/>
                <h2>{project['name']}</h2>
            </div>
            <div className="overlay">
                <p className="f6 lh-copy measure"> {project['description']} </p>
            </div>
        </div>
    )
}
export default PortfolioTile;
