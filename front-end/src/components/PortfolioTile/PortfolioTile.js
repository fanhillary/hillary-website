import React from 'react';
import './PortfolioTile.css';
import TimeCapsule from './time-capsule.png'

let PortfolioTile = () => {
    return (
        <div className="portfolio-card">
            <img src={TimeCapsule} alt="header"/>
            <div className="content">
            </div>
        </div>
    )
}
export default PortfolioTile;
