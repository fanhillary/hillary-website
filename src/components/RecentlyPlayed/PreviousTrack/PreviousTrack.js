/*
 * Previous Track component for displaying each song title and artist. 
 * Props: track - track name and artist string
 *        opacity - opacity of display song and title name in.
 */
import React from 'react';

let PreviousTrack = ({track, opacity}) => {
    const trackStyle = {
        opacity: opacity,
      };
    return (
        <div >
          <h1 className="f3 lh-copy w3-animate-fading" style={trackStyle}>{track}</h1>
        </div>
    )
}
export default PreviousTrack;
