import React from 'react';
import './Home.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightestWave: "#4579e2",
            mediumWave: "#3461c1",
            darkestWave: "#2d55aa",
            waveColorIndex: 0,
        }
        this.changeWaveColor = this.changeWaveColor.bind(this);
    }


    changeWaveColor() {
        var colors = ["blue", "black", "pink", "yellow"];
        let nextColor = this.state.waveColorIndex < colors.length -1 ? this.state.waveColorIndex + 1 : 0;
        this.setState({waveColorIndex: nextColor});
        if (colors[this.state.waveColorIndex] === "blue") {
            this.setState({lightestWave: "#4579e2"});
            this.setState({mediumWave: "#3461c1"});
            this.setState({darkestWave: "#2d55aa"});
            document.body.style.background = "#2d55aa";

        } else if (colors[this.state.waveColorIndex] === 'black') {
            this.setState({lightestWave: "#425866"});
            this.setState({mediumWave: "#1B2A33"});
            this.setState({darkestWave: "#0C1419"});
            document.body.style.background = "#0C1419";

        }
      }

    componentDidMount() {
        document.addEventListener("touchstart", this.changeWaveColor);
        document.addEventListener("mousedown", this.changeWaveColor);
        
    }
    
    render() {
        
        return (
            <div className = "home-container">
                <div className="flex-box">
                    <div className = "title">
                        <div className = "flex flex-wrap justify-center">
                            <h1> Hey! </h1>
                            <h1 className="pl3"> I'm Hillary. </h1>
                        </div>
                        <h2> A developer and nature lover </h2>
                    </div>
                    <div>
                        <a className="title-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 mr2 dib near-white" href="#0">Resume</a>
                        <a className="title-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 dib near-white" href="#0">Contact</a>
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
                        <use xlinkHref="#gentle-wave" x="50" y="0" fill={this.state.lightestWave}/>
                        <use xlinkHref="#gentle-wave" x="50" y="3" fill={this.state.mediumWave}/>
                        <use xlinkHref="#gentle-wave" x="50" y="6" fill={this.state.darkestWave}/>  
                    </g>
                    </svg>   
                    <span className="chevron">
                        <a href="#about">
                            <i id ="down" className="fa fa-chevron-down"></i>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
}