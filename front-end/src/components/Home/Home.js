import React from 'react';
import './Home.css';
let Home = ({waveColor}) => {
    return (
        <div className = "home-container">
            <div className="flex-box">
                <div className = "title">
                    <h1> Hey! I'm Hillary. </h1>
                    <h2> I'm a developer and a nature lover. </h2>
                    <div>
                        <a className="title-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 mr2 dib near-white" href="#0">Resume</a>
                        <a className="title-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 dib near-white" href="#0">Contact</a>
                    </div>
                </div>
                <svg className="editorial"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave"
                    d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill={waveColor == "blue"? "#4579e2" : "#425866"}/>
                    <use xlinkHref="#gentle-wave" x="50" y="3" fill={waveColor == "blue"? "#3461c1" : "#1B2A33"}/>
                    <use xlinkHref="#gentle-wave" x="50" y="6" fill={waveColor == "blue"? "#2d55aa": "#0C1419"}/>  
                </g>
                </svg>   
                <span className="chevron">
                    <i className="fa fa-chevron-down"></i>
                </span>
            </div>
        </div>
    )
}
export default Home;
