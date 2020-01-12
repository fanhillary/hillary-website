import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav-container">
            <div className="flex">
                <a className="header-link" href="#home">Home</a> 
                <a className="header-link" href="#about">About</a> 
                <a className="header-link" href="#experience">Experience</a> 
                <a className="header-link" href="#portfolio">Portfolio</a> 
                <a className="header-link" href="#contact">Contact</a>
            </div>
        </div>
    )
}
export default Navigation;
