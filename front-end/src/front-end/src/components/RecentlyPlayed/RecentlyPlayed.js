import React from 'react';
import PreviousTrack from './PreviousTrack/PreviousTrack.js';
import './RecentlyPlayed.css';
let RecentlyPlayed = ({recentTracks}) => {
    var opacity = 1;
    var prevTracks = [];

    for (const [index,track] of recentTracks.entries()) {
        prevTracks.push(<PreviousTrack track={track} key={index} opacity={opacity} />);
        opacity = opacity-.15;
    }

    return (
        <div className="recently-played-modal">
          {prevTracks}
        </div>
    )
}
export default RecentlyPlayed;
