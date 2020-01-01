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
        value: 100,
        density: {
          enable: true, 
          value_area: 800
        }
      }
    }
  }

export default class App extends React.Component {
  constructor() {
    super();
    this.body = React.createRef();
    this.state = {
      aboutBackground: 'about-blue-container',
      waveColor: 'blue'
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
    } else if (top > 700 && top <=1400) {
      this.setState({waveColor: 'black'})
      this.setState({aboutBackground: 'about-black'})
    } else if (top > 1400) {
      this.setState({waveColor: 'black'})
      this.setState({aboutBackground: 'about-black'})
    } 
  }

  render() {
    return (
      // <div className = {this.state.background}>
      <div className = "sky-bg">

        <Navigation/>
        <Home waveColor={this.state.waveColor} />
        <Particles className='particles' params={particlesOptions} />
        <About bg={this.state.aboutBackground}/>
        <Portfolio/>
      </div>
    )}
}