import React from 'react';
import './About.css';
import Particles from 'react-particles-js';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed.js';
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
  export default class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recentTracks: [],
      }
    }
    
    componentDidMount() {
      this.getRecentlyPlayed();
      this.interval = setInterval(() => this.getRecentlyPlayed(), 15000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    getRecentlyPlayed() {
      fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=fanhillary&api_key=6976974c003be6d3bc0da5e50fffd7cf&format=json', {
        method: 'get',
      }).then((response) => response.json())
      .then((response) => {
        var recentTracksResponse = response['recenttracks']['track'];
        var recentTracks = [];

        for (let i = 0; i < 7; i++ ) {
          let artist = recentTracksResponse[i].artist['#text'];
          let song = recentTracksResponse[i].name;
          recentTracks.push(artist + ' - ' + song);
        }
        this.setState({recentTracks: recentTracks});
        console.log(this.state.recentTracks);
      });
    }
    
    render() {
      let {particlesVisible} = this.props;

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
                      <div className="music-container">
                        <div className="music-header">
                          <h1 className="lh-copy">I am currently listening to:</h1> 
                        </div>
                        <RecentlyPlayed recentTracks={this.state.recentTracks}/>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}