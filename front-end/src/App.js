import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navigation from './components/Navigation/Navigation.js';
import About from './components/About/About.js';
import Logo from './components/Logo/Logo.js';
import Experience from './components/Experience/Experience.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';
import Skills from './components/Skills/Skills.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.body = React.createRef();
    this.state = {
      aboutStyle: 'about-blue',
      waveColor: 'blue',
      particlesVisible: 'particles-hidden',
      experienceStyle: 'experience-black',
      logoVisible: 'block',
      leafVisibility: 'hidden',
      portfolioStyle: 'portfolio-purple',
      contactStyle: 'contact-lavendar',
      skillsStyle: 'skills-green',
      width: 0,
      height: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }  

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    window.setInterval(this.alternateOpacityChevron, 500);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
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
      this.setState({waveColor: 'blue'});
      this.setState({logoVisible: 'block'});
      this.setState({aboutStyle: 'about-blue'});
    } else if (top > 250 && top <=650) { // before waves
      this.setState({waveColor: 'blue'});
      this.setState({aboutStyle: 'about-blue'});
      this.setState({particlesVisible: 'particles-hidden'});
      this.setState({experienceStyle: 'experience-black'});
      this.setState({logoVisible: 'block'});
    } else if (top > 650 && top <=1500) { // after waves
      this.setState({waveColor: 'black'});
      this.setState({aboutStyle: 'about-black'});
      this.setState({particlesVisible: 'particles-visible'});
      this.setState({experienceStyle: 'experience-black'});
      this.setState({logoVisible: 'none'});
      this.setState({leafVisibility: 'hidden'})
    } else if (top > 1500 && top <=2800) { // into work experience 
      this.setState({aboutStyle: 'about-green'});
      this.setState({experienceStyle: 'experience-green'});
      this.setState({leafVisibility: 'visible'});
      this.setState({logoVisible: 'none'});
      this.setState({skillsStyle: 'skills-green'});
    } else if (top > 2800 & top <= 3900) { // into Skills
      this.setState({experienceStyle: 'experience-purple'});
      this.setState({skillsStyle: 'skills-purple'});
      this.setState({portfolioStyle: 'portfolio-purple'})
      this.setState({logoVisible: 'none'});
    } else if (top > 3900 && top <= 5000) {// into portfolio 
      this.setState({skillsStyle: 'skills-lavendar'});
      this.setState({portfolioStyle: 'portfolio-lavendar'});
      this.setState({contactStyle: 'contact-lavendar'});
      this.setState({logoVisible: 'none'});
    } else if (top > 5000) {
      this.setState({contactStyle: 'contact-white'});
      this.setState({portfolioStyle: 'portfolio-white'});
      this.setState({logoVisible: 'none'});
    }
  }

  render() {
    return (
      <div className = "app-container">
        <a name="home">
          {this.state.width > 400 ?
            <div>
              {/* <Logo logoVisible={this.state.logoVisible}/> */}
              <Navigation/>
            </div>
            : ""}
          <Home waveColor={this.state.waveColor} />
        </a>
        <a name="about">
          <About particlesVisible={this.state.particlesVisible} aboutStyle={this.state.aboutStyle}/>
        </a>
        <a name="experience">
          <Experience leafVisibility={this.state.leafVisibility} experienceStyle={this.state.experienceStyle}/>
        </a>
        <a name="skills">
          <Skills skillsStyle= {this.state.skillsStyle}/>
        </a>
        <a name="portfolio">
          <Portfolio portfolioStyle={this.state.portfolioStyle}/>
        </a>
        <a name="contact">
          <Contact contactStyle={this.state.contactStyle}/>
        </a>
      </div>
    )}
}