/*
* Porfolio Tile Component. 
* The tile itself containing image and individual project descriptions (tags, demo link, source, etc.)
* Props: project - object containing information for each tile including tags, header image, tile color, descriptions, etc.
*/
import React from 'react';
import './PortfolioTile.css';
import SkillsTag from '../../SkillsTag/SkillsTag.js';

let PortfolioTile = ({project}) => {
    let icon = Object.values(project['image'])[0]

    let items = [];
    for (const [index,skill] of project['tags'].entries()) {
        items.push(<SkillsTag skill={skill} key={index}/>);
    }
    return (
        
        <div className="portfolio-card">
            <div className={"default-display " + project['tileColor']}>
                <div>
                    <h1 className="f3 lh-copy">{project['name']}</h1>
                    <img className="project-icon" src={icon} alt="header"/>
                </div>
                <div className="absolute bottom-1 flex flex-wrap justify-center">
                    {items}
                </div>
            </div>
            <div className="overlay">
                <p className="f4 lh-copy measure"> {project['description']} </p>
                <div>
                    {project['sourceLink'] ? (<a className="portfolio-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 dib near-white" href={project['sourceLink']} target="_blank" rel="noopener noreferrer" >Source</a>) : ""} 
                    {project['demoLink'] ? (<a className="portfolio-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 dib near-white" href={project['demoLink']} target="_blank" rel="noopener noreferrer" >Demo</a>) : ""}
                </div>
            </div>
        </div>
    )
}
export default PortfolioTile;
