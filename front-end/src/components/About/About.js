import React from 'react';
import './About.css';
import Particles from 'react-particles-js';

const particlesOptions = {
    canvas: {
      w: "100%",
      h: "100%"
    },
    particles: {
      number: { 
        value: 80,
        density: {
          enable: true, 
          value_area: 850
        }
      },
      color: {
        value: "#fff",
      },
      opacity: {
        value: .3,
        anim: {
          enable: true,
          speed: 4,
          opacity_min: 0.1,
          sync: false
        }
      },
      shape: {
        type: "star"
      },
      size: {
        value: 7,
        random: true
      },
    },
    interactivity: {
      events: {
        onresize: {
          enable: true,
          density_auto: true,
        },
        onhover: {
            enable: true,
            mode: "repulse"
        }
          
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
      }
    }
  }

let About = ({particlesVisible}) => {
    return (
        <div className="container">
            {/* <Particles className={'particles ' + particlesVisible} params={particlesOptions} /> */}
            <h1 className="subheader lh-title">About Me</h1>
            <div className = "about-content"> 
                <div className="pa5-ns tc">
                    <div className="pb2">
                        <p className="f2 b"> Hi! I'm Hillary, again </p>
                        <p className="f3 lh-copy">
                            I'm a full-stack developer.
                            I enjoy working on web applications, finding solutions to complex problems, and designing intuitive user experiences.
                            Some of my favorite technologies are ReactJS, Angular, Java, Python, and MongoDB. 
                        </p>
                    </div>
                    <div className="pb2">
                      <p className="f2 b"> Some Life Mottos </p>
                        <p className="f3 lh-copy">
                            To get good: To end everyday knowing that I have learned something new or improved upon myself.
                        </p>
                        <p className="f3 lh-copy">
                          To have fun while working on things I love. :D
                        </p>
                    </div>
                    <div className="pb2">
                      <p className="f2 b"> Things I love </p>
                        <p className="f3 lh-copy">
                            Late night walks in the city
                        </p>
                        <p className="f3 lh-copy">
                            Finding hidden rooftops to view stars
                        </p>
                        <p className="f3 lh-copy">
                            Sharing music I love.
                        </p>
                    </div>
                    <p className="f4 lh-copy">Here's what I'm listening to right now:</p> 
                    <p className="f4 lh-copy"> spotify </p>
                    <p className="f4 lh-copy"> spotify </p>
                    <p className="f4 lh-copy"> spotify </p>
                </div>
            </div>
        </div>
    )
}
export default About;
