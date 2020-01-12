import React from 'react';
import './Skills.css';

let Skills = ({skillsStyle}) => {
   
    return (
        <div className={"container " + skillsStyle}>
            <h1 className="f1 lh-title pb6">Skills</h1>
            <div className="ml4 flex flex-wrap justify-center">
                <div className="card">
                    <img src="" alt="header"/>
                    <div className="experience-content">
                        <h1> Front End </h1>
                        <p className="point f5 lh-copy measure">
                            HTML/CSS
                        </p>
                        <p className="point f5 lh-copy measure">
                            Angular
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="header"/>
                    <div className="experience-content">
                        <h1> Back End </h1>
                        <p className="point f5 lh-copy measure">
                            HTML/CSS
                        </p>
                        <p className="point f5 lh-copy measure">
                            Angular
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="header"/>
                    <div className="experience-content">
                        <h1> Database </h1>
                        <p className="point f5 lh-copy measure">
                            HTML/CSS
                        </p>
                        <p className="point f5 lh-copy measure">
                            Angular
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="header"/>
                    <div className="experience-content">
                        <h1> Miscellaneous </h1>
                        <p className="point f5 lh-copy measure">
                            HTML/CSS
                        </p>
                        <p className="point f5 lh-copy measure">
                            Angular
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;
