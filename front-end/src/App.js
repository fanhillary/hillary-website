import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navigation from './Navigation/Navigation.js';
import About from './components/About/About.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Particles from 'react-particles-js';


const particlesOptions = {
    particles: {
      number: { 
        value: 80,
        density: {
          enable: true, 
          value_area: 800
        }
      },
      color: {
        value: "#fff",
      },
      opacity: {
        value: .4,
        anim: {
          enable: true,
          speed: 8,
          opacity_min: 0.1,
          sync: false
        }
      },
      shape: {
        type: "circle"
         // type: "image",
        // image: {
        //    src: "../public/star.png",
        //    width: 1,
        //    height: 1
        // }   
      },
      size: {
        value: 4,
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
      aboutBackground: 'about-blue-container',
      waveColor: 'blue',
      particlesVisible: 'particles-hidden'
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(e) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top <= 700) {
      this.setState({waveColor: 'blue'})
      this.setState({aboutBackground: 'about-blue'})
      this.setState({particlesVisible: 'particles-hidden'})

    } else if (top > 700 && top <=1400) {
      this.setState({waveColor: 'black'})
      this.setState({aboutBackground: 'about-black'})
      this.setState({particlesVisible: 'particles-visible'})

    } else if (top > 1400) {
      this.setState({waveColor: 'black'})
      this.setState({aboutBackground: 'about-black'})
      this.setState({particlesVisible: 'particles-visible'})

    } 
  }

  render() {
    return (
      <div className = "sky-bg">

        <Navigation/>
        <Home waveColor={this.state.waveColor} />
        <Particles className={'particles ' + this.state.particlesVisible} params={particlesOptions} />
        <About bg={this.state.aboutBackground}/>
        <Portfolio/>
      </div>
    )}
}