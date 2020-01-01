import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navigation from './Navigation/Navigation.js';
import About from './components/About/About.js';
import Portfolio from './components/Portfolio/Portfolio.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.body = React.createRef();
    this.state = {
      background: 'sky-bg',
      aboutBackground: 'about-blue-container',
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
      this.setState({background: 'sky-bg'})
      this.setState({aboutBackground: 'about-blue-container'})
    } else if (top > 700 && top <=1400) {
      this.setState({background: 'ocean-bg'});
      this.setState({aboutBackground: 'about-container'})
    } else if (top > 1400) {
      this.setState({background: 'black-bg'})
      this.setState({aboutBackground: 'about-container'})
    } 
  }

  render() {
    return (
      <div className = {this.state.background}>
       <Navigation/>
        <Home/>
        <About bg={this.state.aboutBackground}/>
        <Portfolio/>
      </div>
      );
  }
}