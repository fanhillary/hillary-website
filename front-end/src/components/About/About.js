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

let About = ({aboutStyle, particlesVisible}) => {
    return (
        <div className={'about-container ' + aboutStyle}>
            <Particles className={'particles ' + particlesVisible} params={particlesOptions} />
            <section className = "about-content"> 
                <h1> About Me </h1>
                <main className="pa3 pa5-ns">
                    <div className="pb2">
                        <h2> Hi! I'm Hillary, again. </h2>
                        <p className="f4 lh-copy measure">
                            I'm a full-stack developer.
                            I enjoy working on web applications, finding solutions to complex problems, and designing intuitive user experiences.
                            Some of my favorite technologies are ReactJS, Angular, Java, Python, and MongoDB. 
                        </p>
                    </div>
                    <div className="pb2">
                        <h2> Some Life Mottos </h2>
                        <p className="f4 lh-copy measure">
                            To get good: To end everyday knowing that I have learned something new or improved upon myself.
                        </p>
                        <p className="f4 lh-copy measure">
                          To have fun while working on things I love. :D
                        </p>
                    </div>
                    <div className="pb2">
                        <h2> I love: </h2>
                        <p className="f4 lh-copy measure">
                            Late night walks in the city, finding hidden rooftops to view stars, and sharing music I love.
                        </p>
                    </div>
                    <p className="f4 lh-copy measure">Here's what I'm listening to right now:</p> 
                    <p className="f4 lh-copy measure"> spotify </p>
                    <p className="f4 lh-copy measure"> spotify </p>
                    <p className="f4 lh-copy measure"> spotify </p>
                </main>
            </section>
        </div>
    )
}
export default About;
