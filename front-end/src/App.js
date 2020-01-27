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
import anime from 'animejs/lib/anime.es.js';
export default class App extends React.Component {
  constructor() {
    super();
    this.body = React.createRef();
    this.state = {
      particlesVisible: 'particles-hidden',
      logoVisible: 'block',
      leafVisibility: 'hidden',
      width: 0,
      height: 0,
      bgColorIndex: 0,
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
    this.colorAnimate();
  }

  colorAnimate() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");
    var cH;
    var cW;
    var bgColor = "#7a95e2";
    var animations = [];
    var circles = [];

    var colorPicker = (function() {
      var colors = ["#7a95e2", "#d37071","#a889d8", "#a0726f"];
      var index = 0;
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

    function removeAnimation(animation) {
      var index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    }

    function calcPageFillRadius(x, y) {
      var l = Math.max(x - 0, cW - x);
      var h = Math.max(y - 0, cH - y);
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    }

    function addClickListeners() {
      document.addEventListener("touchstart", handleEvent);
      document.addEventListener("mousedown", handleEvent);
    };

    function handleEvent(e) {
      console.log(e);
      if (e.pageY < 1500) {
        if (e.touches) { 
          e.preventDefault();
          e = e.touches[0];
        }
        var currentColor = colorPicker.current();
        var nextColor = colorPicker.next();
        var targetR = calcPageFillRadius(e.pageX, e.pageY);
        var rippleSize = Math.min(200, (cW * .4));
        var minCoverDuration = 750;
        
        var pageFill = new Circle({
          x: e.pageX,
          y: e.pageY,
          r: 0,
          fill: nextColor
        });

        
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
        
        var ripple = new Circle({
          x: e.pageX,
          y: e.pageY,
          r: 0,
          fill: currentColor,
          stroke: {
            width: 3,
            color: currentColor
          },
          opacity: 1
        });
        var rippleAnimation = anime({
          targets: ripple,
          r: rippleSize,
          opacity: 0,
          easing: "easeOutExpo",
          duration: 1100,
          complete: removeAnimation
        });
        
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
        animations.push(fillAnimation, rippleAnimation, particlesAnimation);
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
        ctx.fillRect(0, 0, cW, cH);
        animations.forEach(function(anim) {
          anim.animatables.forEach(function(animatable) {
            animatable.target.draw();
          });
        });
      }
    });

    var resizeCanvas = function() {
      cW = window.innerWidth;
      cH = window.innerHeight;
      c.width = cW * devicePixelRatio;
      c.height = cH * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    (function init() {
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      addClickListeners();
    })();
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
    var top = (window.clientYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    if (top <= 250) {
      this.setState({logoVisible: 'block'});
    } else if (top > 250 && top <=600) { // before waves
      this.setState({particlesVisible: 'particles-hidden'});
      this.setState({logoVisible: 'block'});
    } else if (top > 600 && top <=1500) { // after waves
      this.setState({particlesVisible: 'particles-visible'});
      this.setState({logoVisible: 'none'});
      this.setState({leafVisibility: 'hidden'})
    } else if (top > 1500 && top <=2800) { // into work experience 
      this.setState({leafVisibility: 'visible'});
      this.setState({logoVisible: 'none'});
    }
  }

  render() {
    return (
      <div className = "app-container">
        <div className="relative">
          <canvas id="c"></canvas>
          <a name="home">
            {this.state.width > 400 ?
              <div>
                {/* <Logo logoVisible={this.state.logoVisible}/> */}
                <Navigation/>
              </div>
              : ""}
            <Home/>
          </a>
        </div>
        <div id="under-ocean">
          <a name="about">
            <About particlesVisible={this.state.particlesVisible}/>
          </a>
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