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
