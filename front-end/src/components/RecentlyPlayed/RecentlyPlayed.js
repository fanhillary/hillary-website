import React from 'react';
import PreviousTrack from './PreviousTrack/PreviousTrack.js';

let RecentlyPlayed = ({recentTracks}) => {
    var opacity = 1;
    var prevTracks = [];

    // var reversedTracks = recentTracks.slice(0).reverse();

    for (const [index,track] of recentTracks.entries()) {

        prevTracks.push(<PreviousTrack track={track} opacity={opacity} />);
        opacity = opacity-.15;
    }


    return (
        <div>
          {prevTracks}
        </div>
    )
}
export default RecentlyPlayed;
