/*
* Navigation bar component at top of page. 
* Holds relevant anchor links and external links to github and linkedin pages.
*/
import React from 'react';
import './Navigation.css';
import { Link } from "react-scroll";

let Navigation = () => {
    return (
        <div className="nav-container">
            <div className="flex">
                <Link className="link-padding" to="about-section" smooth={true} duration={300}>
                    <p className="header-link">About</p> 
                </Link>
                <Link className="link-padding" to="experience-section" smooth={true} duration={500}>
                    <p className="header-link">Experience</p> 
                </Link>
                <Link className="link-padding" to="portfolio-section" smooth={true} duration={700}>
                    <p className="header-link">Portfolio</p> 
                </Link>
                <Link className="link-padding" to="skills-section" smooth={true} duration={600}>
                    <p className="header-link">Skills</p> 
                </Link>
            </div>
        </div>
    )
}
export default Navigation;
