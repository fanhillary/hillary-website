import React from 'react';
import './App.css';
import Home from './Home.js';
import Navigation from './Navigation.js';
import About from './About.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.body = React.createRef();
    this.state = {
      background: 'sky-bg',
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(e) {
    if (window.scrollY > 700) {
      this.setState({background: 'ocean-bg'})
      // and remove about.css background color
    } else if (window.scrollY > 1000) {
      this.setState({background: 'black-bg'})
    } else if (window.scrollY <= 500) {
      this.setState({background: 'sky-bg'})
      // and add about.css background color
    }
  }

  render() {
    return (
      <div className = {this.state.background}>
       <Navigation/>
        <Home/>
        <About/>
      </div>
      );
  }
}