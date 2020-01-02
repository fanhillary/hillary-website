import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navigation from './components/Navigation/Navigation.js';
import About from './components/About/About.js';
import Logo from './components/Logo/Logo.js';
import Particles from 'react-particles-js';
import Experience from './components/Experience/Experience.js';


const particlesOptions = {
    canvas: {
      w: "100%",
      h: "850px"
    },
    particles: {
      number: { 
        value: 80,
        density: {
          enable: true, 
          value_area: 850
        }
      },
      color: {
        value: "#fff",
      },
      opacity: {
        value: .3,
        anim: {
          enable: true,
          speed: 4,
          opacity_min: 0.1,
          sync: false
        }
      },
      shape: {
        type: "star"
      },
      size: {
        value: 6,
        random: true
      },
    },
    interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
      }
    }
  }

export default class App extends React.Component {
  constructor() {
    super();
    this.body = React.createRef();
    this.state = {
      aboutBackground: 'about-blue',
      waveColor: 'blue',
      particlesVisible: 'particles-hidden',
      experienceStyle: 'porfolio-black',
      logoVisible: 'block',
      ifSunset: 'sky',
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);

    window.setInterval(this.alternateOpacityChevron, 500);

  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  alternateOpacityChevron() {
      const object = document.getElementById('down');
      const currentOpacity  = object.style.opacity;
      if (currentOpacity === 1) {
          object.style.opacity = .4;
      } else if (currentOpacity === .4) {
          object.style.opacity = 1;
      }
  }
  
  handleScroll(e) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top <= 250) {
      this.setState({ifSunset: 'sky'})
    } else if (top > 250 && top <=650) { // before waves
      this.setState({ifSunset: 'sunset'})
      this.setState({waveColor: 'blue'});
      this.setState({aboutBackground: 'about-blue'});
      this.setState({particlesVisible: 'particles-hidden'});
      this.setState({experienceStyle: 'experience-black'});
      this.setState({logoVisible: 'inherit'});
    } else if (top > 650 && top <=1600) { // after waves
      this.setState({waveColor: 'black'});
      this.setState({aboutBackground: 'about-black'});
      this.setState({particlesVisible: 'particles-visible'});
      this.setState({experienceStyle: 'experience-black'});
      this.setState({logoVisible: 'none'});

    } else if (top > 1600) {
      this.setState({aboutBackground: 'about-green'});
      this.setState({experienceStyle: 'experience-green'});
    } 
  }

  render() {
    return (
      <div className = {this.state.ifSunset === "sunset"? "sunset-bg" : "sky-bg"}>
        <Logo logoVisible={this.state.logoVisible}/>
        <Navigation/>
        <Home waveColor={this.state.waveColor} />
        <Particles className={'particles ' + this.state.particlesVisible} params={particlesOptions} />
        <About aboutBackground={this.state.aboutBackground}/>
        <Experience experienceStyle={this.state.experienceStyle}/>
      </div>
    )}
}