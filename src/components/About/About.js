/* Component: About
* About Me Section (Hobbies, Motto)
*/
import React from 'react';
import './About.css';
// import Particles from 'react-particles-js';
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed.js';
import ProfessionalHeadshot from '../../images/professional-headshot.jpg';
// temporarily unused particles
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
        recentTracks: [], // list of the 7 most recently played songs, updated every 15 seconds
        currentlyPlaying: false,  // boolean indicating whether music is playing currently.
      }
    }
    
    /*
    * On mount, get recently played songs from backend and set timer interval to check every 15 seconds.
    */
    componentDidMount() {
      this.getRecentlyPlayed();
      this.interval = setInterval(() => this.getRecentlyPlayed(), 15000);
      window.setInterval(this.alternateOpacityRecentlyPlayed, 500);
    }

    /*
    * Discontinue timer interval on unmount
    */
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    /*
    * Gets most recently played songs on spotify account from the backend /getRecentTracks API. 
    * Set recentTracks state to the top 7 most recent songs (titles and artist).
    * Set currentlyPlaying state to true if most recent song is playing currently.
    */
    getRecentlyPlayed() {
      fetch('https://hillary-fan-server.herokuapp.com/getRecentTracks',{ 
        method: "GET",
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                },
      })
      .then((response) => response.json())
      .then((response) => {
        if (response === 'Error') {
          console.log('error getting recently played')
        } else {
          // parse for song name and artist for the top 7 most recently played songs
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
        }
      });
    }
    
    /*
    * Alternates the opacity of "Recently Played" text for a blinking effect.
    */
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
      // let {particlesVisible} = this.props;

      return (
          <div id="about-section" className="container">
              {/* <Particles className={'particles ' + particlesVisible} params={particlesOptions} /> */}
              <h1 className="subheader lh-title">About Me</h1>
              <div className = "about-content"> 
                  <div className="introduction-container">
                      <img className="headshot" src={ProfessionalHeadshot} alt="header"/>
                      <div>
                          <div className="tc">
                            <div className="pb2 flex justify-center">
                                <div className="w-80">
                                  <p className="f2 b tc"> A Short Introduction </p>
                                  <p className="f3 lh-copy">
                                    Hi! Nice to meet you. I'm a full-stack developer who is always looking for a challenge and constantly striving towards self-improvement.
                                  </p>
                                  <p className="f3 lh-copy">
                                    I enjoy building and designing intuitive web apps.
                                    My favorite technologies are ReactJS, Angular, Python, and MongoDB. 
                                  </p>
                                  <p className="f3 lh-copy">
                                    I spend most of my free time building side projects, playing board games, and hilariously failing at yoga poses.
                                  </p>
                                </div>
                            </div>
                            <div className="pb2">
                              <p className="f2 b tc"> My Motto </p>
                                <p className="f3 lh-copy">
                                  Keep it intuitive and simple.
                                </p>
                                <p className="f3 lh-copy">
                                  Listen to the customer's needs.
                                </p>
                            </div>
                          </div>
                      </div>
                  </div>
                <div>
                  <div className="tc mt6">
                    <div className="pb2">
                      <p className="f2 b"> Things I love </p>
                        <div className="flex justify-center items-center"> 
                          <div className="mr2">
                            <i className="fas fa-gem f3"></i>
                          </div> 
                          <div>
                            <p className="f3 lh-copy ">Experimenting with makeup </p>
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
                  </div>
                  <div className="flex justify-center">
                    <div className="music-container">
                      <div className="music-header">
                        {this.state.currentlyPlaying ? <h1 id="recently-played" className="lh-copy">Now listening to ...</h1> :
                          <h1 id="recently-played" className="lh-copy">Previously listening to ...</h1> 
                        }
                      </div>
                      <RecentlyPlayed recentTracks={this.state.recentTracks}/>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      )
    }
}