import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navigation from './components/Navigation/Navigation.js';
import About from './components/About/About.js';
import Logo from './components/Logo/Logo.js';
import Experience from './components/Experience/Experience.js';


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
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);

    window.setInterval(this.alternateOpacityChevron, 500);

  }
  
  componentWillUnmount() {
    // clearInterval(this.toggleOpacity);
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
      this.setState({ifSunset: 'sky-bg'})
      
    } else if (top > 250 && top <=650) { // before waves
      this.setState({ifSunset: 'sunset-bg'})
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
      // <div className = {this.state.ifSunset === "sunset"? "sunset-bg" : "sky-bg"}>
      <div className = {"app-container + " + this.state.ifSunset}>
        <Logo logoVisible={this.state.logoVisible}/>
        <Navigation/>
        <Home waveColor={this.state.waveColor} />
        <About particlesVisible={this.state.particlesVisible} aboutBackground={this.state.aboutBackground}/>
        <Experience experienceStyle={this.state.experienceStyle}/>
      </div>
    )}
}