import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navigation from './components/Navigation/Navigation.js';
import About from './components/About/About.js';
import Logo from './components/Logo/Logo.js';
import Experience from './components/Experience/Experience.js';
import Portfolio from './components/Portfolio/Portfolio.js';


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
      ifSunset: 'sky-bg',
      leafVisibility: 'hidden',
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
      let currentOpacity  = object.style.opacity;
      if (currentOpacity == 1) { // keep as 2 equal signs
          object.style.opacity = .4;
      } else {
          object.style.opacity = 1;
      }
  }
  
  handleScroll(e) {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    if (top <= 250) {
      this.setState({ifSunset: 'sky-bg'});
      this.setState({waveColor: 'blue'});
      this.setState({logoVisible: 'block'});
      this.setState({aboutBackground: 'about-blue'});
    } else if (top > 250 && top <=650) { // before waves
      this.setState({ifSunset: 'sunset-bg'})
      this.setState({waveColor: 'blue'});
      this.setState({aboutBackground: 'about-blue'});
      this.setState({particlesVisible: 'particles-hidden'});
      this.setState({experienceStyle: 'experience-black'});
      this.setState({logoVisible: 'block'});
    } else if (top > 650 && top <=1500) { // after waves
      this.setState({waveColor: 'black'});
      this.setState({aboutBackground: 'about-black'});
      this.setState({particlesVisible: 'particles-visible'});
      this.setState({experienceStyle: 'experience-black'});
      this.setState({logoVisible: 'none'});
      this.setState({leafVisibility: 'hidden'})
    } else if (top > 1500) { // into work experience 
      this.setState({aboutBackground: 'about-green'});
      this.setState({experienceStyle: 'experience-green'});
      this.setState({leafVisibility: 'visible'})
    } 
  }

  render() {
    return (
      // <div className = {this.state.ifSunset === "sunset"? "sunset-bg" : "sky-bg"}>
      <div className = {"app-container + " + this.state.ifSunset}>
        <Logo logoVisible={this.state.logoVisible}/>
        <Navigation/>
        <a name="home">
          <Home waveColor={this.state.waveColor} />
        </a>
        <a name="about">
          <About particlesVisible={this.state.particlesVisible} aboutBackground={this.state.aboutBackground}/>
        </a>
        <a name="experience">
          <Experience leafVisibility={this.state.leafVisibility} experienceStyle={this.state.experienceStyle}/>
        </a>
        <a name="portfolio">
          <Portfolio/>
        </a>
      </div>
    )}
}