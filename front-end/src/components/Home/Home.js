import React from 'react';
import './Home.css';
import resume from './Resume_HFan.pdf';
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


    changeWaveColor(e) {
        if (e.pageY < 1500) {
            var colors = ["blue", "brown", "purple", "pink"];
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
            } else if (currColor === "brown") {
                this.setState({lightestWave: "#7a5f52"});
                this.setState({mediumWave:  "#463730"});
                this.setState({darkestWave: "#271f1a"});
            } else if (currColor === "pink") {
                this.setState({lightestWave: "#eb828c"});
                this.setState({mediumWave:  "#dc6882"});
                this.setState({darkestWave: "#c84f6a"});
                
            }

            document.getElementById("under-ocean").style.background = this.state.darkestWave;
        }
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
                            <h1 className="f-headline lh-title">Hey!</h1>
                            <h1 className="f-headline lh-title pl3">I'm Hillary.</h1>
                        </div>
                        <h2> A developer and nature lover </h2>
                    </div>
                    <div>
                        <a className="title-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 mr2 dib near-white" href={resume} download>Resume</a>
                        <a className="title-button f4 grow no-underline br-pill ba bw1 ph3 pv2 mb4 dib near-white" href="#contact">Contact</a>
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