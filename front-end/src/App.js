import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Navigation from './Navigation.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
       <Navigation/>
        <Home/>
      </div>
      );
  }
}