/*
* Home component, title/landing screen.
* Includes ripple effect, greeting message, resume download links.
*/
import React from 'react';
import './Home.css';
import resume from './Resume_HFan.pdf';
import { Link } from "react-scroll";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // colors of each wave
            lightestWave: "#9754CA",
            mediumWave: "#6337A1",
            darkestWave: "#280F4F",
            waveColorIndex: 0,
        }
        this.changeWaveColor = this.changeWaveColor.bind(this);
    }

    /*
    * Function Name: changeWaveColor(e)
    * Description: Switches amongst colors of waves.
    * Param: e - click event for determining whether to activate ripple or not.
    */
    changeWaveColor(e) {
        if (e.pageY < 1500) {
            var colors = ["purple", "blue"]; // color array to rotate between
            let nextColor = this.state.waveColorIndex < colors.length -1 ? this.state.waveColorIndex + 1 : 0;
            this.setState({waveColorIndex: nextColor});
            let currColor = colors[this.state.waveColorIndex];
            if (currColor === "blue") {
                this.setState({lightestWave: "#282F6B"});
                this.setState({mediumWave: "#151755"});
                this.setState({darkestWave: "#0c0a4a"});
            } else if (currColor === 'purple') {
                this.setState({lightestWave: "#9754CA"});
                this.setState({mediumWave: "#6337A1"});
                this.setState({darkestWave: "#280F4F"});
            }

            document.getElementById("under-ocean").style.background = this.state.darkestWave;
        }
      }

    /*
    * On mount, set up click events for mobile and desktop and set waves to default color.
    */
    componentDidMount() {
        document.addEventListener("touchstart", this.changeWaveColor);
        document.addEventListener("mousedown", this.changeWaveColor);
        document.getElementById("under-ocean").style.background = this.state.darkestWave;
    }
    
    render() {
        
        return (
            <div className = "home-container">
                <div className="flex-box">
                    <div className = "title">
                        <div className = "flex flex-wrap justify-center">
                            <h1 id="hey-title" className="greeting f-headline lh-title">Hey!</h1>
                            <h1 className="greeting f-headline lh-title pl3">I'm Hillary</h1>
                        </div>
                        <h2> A developer who puts the customers first.</h2>
                    </div>
                    <div className="title-button-container justify-center">
                        <div>
                            <a className="title-button no-underline near-white bg-animate bg-dark-gray hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://github.com/fanhillary" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <div className="home-icon">
                                    <i class="fab fa-github"></i>
                                </div>
                                <span className="f6 ml3 pr2">GitHub</span>
                            </a>
                            <a className="title-button no-underline near-white bg-animate bg-dark-gray hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://www.linkedin.com/in/fanhillary/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                                <div className="home-icon">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                            <span className="f6 ml3 pr2">LinkedIn</span>
                            </a>
                        </div>
                        <div>
                            <a className="title-button no-underline near-white bg-animate bg-dark-gray hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href={resume} download title="Resume">
                                <div className="home-icon">
                                    <i class="fas fa-pencil-alt"></i>
                                </div> 
                                <span className="f6 ml3 pr2">Resume</span>
                            </a>
                        </div>
                    </div>
                    <p>Email @ <b>hillary.fan123@gmail.com</b></p>
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
                        <use xlinkHref="#gentle-wave" x="50" y="0" fill={this.state.lightestWave}/>
                        <use xlinkHref="#gentle-wave" x="50" y="3" fill={this.state.mediumWave}/>
                        <use xlinkHref="#gentle-wave" x="50" y="6" fill={this.state.darkestWave}/>  
                    </g>
                    </svg>   
                    <span className="chevron">
                        <Link to="about-section" smooth={true} duration={300}>
                            <i id ="down" className="fa fa-chevron-down"></i>
                        </Link>
                    </span>
                </div>
            </div>
        )
    }
}