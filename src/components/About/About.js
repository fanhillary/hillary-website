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
        currentlyPlaying: false,
      }
    }
    
    componentDidMount() {
      this.getRecentlyPlayed();
      this.interval = setInterval(() => this.getRecentlyPlayed(), 15000);
      window.setInterval(this.alternateOpacityRecentlyPlayed, 500);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    getRecentlyPlayed() {
      fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=fanhillary&api_key=6976974c003be6d3bc0da5e50fffd7cf&format=json&limit=10', {
        method: 'get',
      }).then((response) => response.json())
      .then((response) => {
        console.log(process.env.SCROBBLE_KEY);
        console.log(process.env.SCROBBLE_USER);
        var recentTracksResponse = response['recenttracks']['track'];
        var recentTracks = [];
        for (let i = 0; i < 7; i++ ) {
          if (i === 0) {
            this.setState({currentlyPlaying: recentTracksResponse[i].hasOwnProperty('@attr')});
          }
          let artist = recentTracksResponse[i].artist['#text'];
          let song = recentTracksResponse[i].name;
          recentTracks.push(artist + ' - ' + song);
        }
        this.setState({recentTracks: recentTracks});
      })
      .catch((error) => {
        console.log('error getting recently played' + error);
      });
    }
    
    alternateOpacityRecentlyPlayed() {
      const object = document.getElementById('recently-played');
      let currentOpacity  = object.style.opacity;
      if (currentOpacity == 1) { // IMPORTANT: keep as 2 equal signs bc we want to type coerce string opacity
          object.style.opacity = .7;
      } else {
          object.style.opacity = 1;
      }
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
                              I enjoy working on web apps and designing intuitive experiences.
                              Some of my favorite technologies are ReactJS, Angular, Java, Python, and MongoDB. 
                          </p>
                          <p className="f3 lh-copy">
                              People describe me as patient, team mediator, and adaptive.
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
                          <div className="flex justify-center items-center"> 
                            <div className="mr2">
                              <i className="fas fa-cloud-moon f3"></i>
                            </div> 
                            <div>
                              <p className="f3 lh-copy ">Late night walks in the city </p>
                            </div>
                          </div>
                          <div className="flex justify-center items-center"> 
                            <div className="mr2">
                              <i className="fas fa-star f3"></i>
                            </div> 
                            <div>
                              <p className="f3 lh-copy ">Finding hidden rooftops to view stars </p>
                            </div>
                          </div>
                          <div className="flex justify-center items-center"> 
                            <div className="mr2">
                              <i className="fas fa-music f3"></i>
                            </div> 
                            <div>
                              <p className="f3 lh-copy ">And sharing music I love </p>
                            </div>
                          </div>
                      </div>
                      <div className="music-container">
                        <div className="music-header">
                          {this.currentlyPlaying ? <h1 id="recently-played" className="lh-copy">Now listening to ...</h1> :
                            <h1 id="recently-played" className="lh-copy">Previously listening to ...</h1> 
                          }
                        </div>
                        <RecentlyPlayed recentTracks={this.state.recentTracks}/>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}