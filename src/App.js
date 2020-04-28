/* 
* App Component - core of the app that ties all the components together. 
* Defines ripple animation for app
*/
import React from 'react';
import './App.css';
import Home from './components/Home/Home.js';
import Navigation from './components/Navigation/Navigation.js';
import About from './components/About/About.js';
import Experience from './components/Experience/Experience.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Contact from './components/Contact/Contact.js';
import Skills from './components/Skills/Skills.js';
import anime from 'animejs/lib/anime.es.js';
export default class App extends React.Component {
  constructor() {
    super();
    this.body = React.createRef();
    this.state = {
      // particlesVisible: 'particles-hidden',
      // logoVisible: 'block',
      // leafVisibility: 'hidden',
      width: 0,
      height: 0,
      bgColorIndex: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  /* sets state of window high and width to scale ripple animation*/
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }  

  /* 
  * On component mount, add event binding to constantly update window dimensions on resizing and scrolling for ripple animation 
  */ 
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.setInterval(this.alternateOpacityChevron, 500);
    this.colorAnimate();
  }

 /* Ripple animation with anime.js */
  colorAnimate() {
    let canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var height;
    var width;
    var bgColor = "#a889d8";
    var animations = [];

    // rotates between color array
    var colorPicker = (function() {
      const colors = ["#a889d8", "#8ea6e7"];
      let index = 0;
      function next() {
        index = index++ < colors.length-1 ? index : 0;
        return colors[index];
      }
      function current() {
        return colors[index]
      }
      return {
        next: next,
        current: current
      }
    })();

    // remove the given animation from the array of todo animations
    function removeAnimation(animation) {
      var index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    }

    // return radius of circle to fill entire canvas window
    function calcPageFillRadius(x, y) {
      var l = Math.max(x - 0, width - x);
      var h = Math.max(y - 0, height - y);
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    }

    // click listeners to activate ripple
    function addClickListeners() {
      document.addEventListener("touchstart", handleEvent);
      document.addEventListener("mousedown", handleEvent);
    };

    // handle ripple animation
    function handleEvent(e) {
      if (e.pageY < 1500) {
        if (e.touches) { 
          e.preventDefault();
          e = e.touches[0];
        }
        // get next color to switch to
        var currentColor = colorPicker.current();
        var nextColor = colorPicker.next();

        // determine the radius of the circle to fille the ntire page
        var targetR = calcPageFillRadius(e.pageX, e.pageY);
        var rippleSize = Math.min(200, (width * .4));
        var minCoverDuration = 750;
        
        // instantiate new circle where center is at location of click
        var pageFill = new Circle({
          x: e.pageX,
          y: e.pageY,
          r: 0,
          fill: nextColor
        });

        // pageFill animation to animate growth of circle to radius of target R, filling entire page, 
        // then change background color to the pageFill circle color that just expanded and remove the circle
        var fillAnimation = anime({
          targets: pageFill,
          r: targetR,
          duration:  Math.max(targetR / 2 , minCoverDuration ),
          easing: "easeOutQuart",
          complete: function(){
            removeAnimation(fillAnimation);
            bgColor = pageFill.fill;
          }
        });
        
        // instantiate particles. Create 32 small circles with random radius, stemming from click location.
        var particles = [];
        for (var i=0; i<32; i++) {
          var particle = new Circle({
            x: e.pageX,
            y: e.pageY,
            fill: currentColor,
            r: anime.random(24, 48)
          })
          particles.push(particle);
        }

        // For each particle, translate to vertically or horizontally randomly to achieve ripple particles, then remove animation
        var particlesAnimation = anime({
          targets: particles,
          x: function(particle){
            return particle.x + anime.random(rippleSize, -rippleSize);
          },
          y: function(particle){
            return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
          },
          r: 0,
          easing: "easeOutExpo",
          duration: anime.random(1000,1300),
          complete: removeAnimation
        });

        // push the two defined animations to animations array to exectue
        animations.push(fillAnimation, particlesAnimation);
      }
    }

    function extend(a, b){
      for(var key in b) {
        if(b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }

    var Circle = function(opts) {
      extend(this, opts);
    }

    // Circule definition
    Circle.prototype.draw = function() {
      ctx.globalAlpha = this.opacity || 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      if (this.stroke) {
        ctx.strokeStyle = this.stroke.color;
        ctx.lineWidth = this.stroke.width;
        ctx.stroke();
      }
      if (this.fill) {
        ctx.fillStyle = this.fill;
        ctx.fill();
      }
      ctx.closePath();
      ctx.globalAlpha = 1;
    }

    var animate = anime({
      duration: Infinity,
      update: function() {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);
        animations.forEach(function(anim) {
          anim.animatables.forEach(function(animatable) {
            animatable.target.draw();
          });
        });
      }
    });

    // for setting width and height to calculate radius and location of circles for animation.
    var resizeCanvas = function() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    (function init() {
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      addClickListeners();
    })();
  }
  
  /* On unmount, remove listeners */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  /* Toggle opacity of element id "down" for blinking effect */
  alternateOpacityChevron() {
      const object = document.getElementById('down');
      let currentOpacity  = object.style.opacity;
      if (currentOpacity == 1) { // IMPORTANT: keep as 2 equal signs bc we want to type coerce string opacity
          object.style.opacity = .4;
      } else {
          object.style.opacity = 1;
      }
  }

  render() {
    return (
      <div className = "app-container">
        <div className="relative">
          <canvas id="canvas"></canvas>
          <a name="home">
            <Navigation/>
            <Home/>
          </a>
        </div>
        <div id="under-ocean">
          <About particlesVisible={this.state.particlesVisible}/>
          <a name="experience">
            <Experience leafVisibility={this.state.leafVisibility}/>
          </a>
          <a name="skills">
            <Skills/>
          </a>
          <a name="portfolio">
            <Portfolio/>
          </a>
          <a name="contact">
            <Contact/>
          </a>
        </div>
      </div>
    )}
}