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
    // fetch('https://api.spotify.com/v1/me/player/recently-played', {
    //   method: 'get',
    //   headers: { 
    //     'Content-Type': 'application/json',
    //     'Authorization': token
    //   },
    //   body: JSON.stringify({

    //   })
    // }).then((response) => response.json())
    // .then((response) => console.log(response));

    fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=fanhillary&api_key=6976974c003be6d3bc0da5e50fffd7cf&format=json', {
      method: 'get',
    }).then((response) => response.json())
    .then((response) => {
      var recentTracks = response['recenttracks']['track'];
      console.log(recentTracks)});
    
  
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
                        <p className="f3 lh-copy">
                            People describe me as patient, mediator, flexible, and calm like water.
                        </p>
                    </div>
                    <div className="pb2">
                      <p className="f2 b"> My Life Motto </p>
                        <p className="f3 lh-copy">
                            To end everyday knowing that I have learned something new or improved upon myself.
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
                            And sharing music I love
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
