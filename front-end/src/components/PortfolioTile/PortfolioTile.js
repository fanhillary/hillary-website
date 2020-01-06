import React from 'react';
import './PortfolioTile.css';
import TimeCapsuleIcon from './time-capsule-icon.png'

let PortfolioTile = () => {
    return (
        <div className="portfolio-card">
            <img className="icon" src={TimeCapsuleIcon} alt="header"/>
        </div>
    )
}
export default PortfolioTile;
