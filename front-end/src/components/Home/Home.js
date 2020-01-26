import React from 'react';
import './Home.css';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightestWave: "#282F6B",
            mediumWave: "#151755",
            darkestWave: "#090839",
            waveColorIndex: 0,
        }
        this.changeWaveColor = this.changeWaveColor.bind(this);
    }


    changeWaveColor() {
        var colors = ["blue", "pink", "brown", "purple"];
        let nextColor = this.state.waveColorIndex < colors.length -1 ? this.state.waveColorIndex + 1 : 0;
        this.setState({waveColorIndex: nextColor});
        let currColor = colors[this.state.waveColorIndex];
        if (currColor === "blue") {
            this.setState({lightestWave: "#282F6B"});
            this.setState({mediumWave: "#151755"});
            this.setState({darkestWave: "#090839"});
        } else if (currColor === 'purple') {
            this.setState({lightestWave: "#9754CA"});
            this.setState({mediumWave: "#6337A1"});
            this.setState({darkestWave: "#280F4F"});
        } else if (currColor === "brown") {
            this.setState({lightestWave: "#D5B397"});
            this.setState({mediumWave:  "#896856"});
            this.setState({darkestWave: "#44362E"});
        } else if (currColor === "pink") {
            this.setState({lightestWave: "#e86774"});
            this.setState({mediumWave:  "#d75271"});
            this.setState({darkestWave: "#be3b57"});
            
        }

        document.getElementById("under-ocean").style.background = this.state.darkestWave;

      }

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