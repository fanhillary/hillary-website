import React from 'react';
import './App.css';
import Home from './Home.js';
import Navigation from './Navigation.js';
import About from './About.js';

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop > 50) {
      console.log('50!');
      console.log(event.target);
    }
    if (scrollTop < 50) {
      console.log('<50');
    }  
  }
  render() {
    return (
      <div>
       <Navigation/>
        <Home/>
        <About/>
      </div>
      );
  }
}