import React from 'react';
import './PreviousTrack.css';

let PreviousTrack = ({track, opacity}) => {
    const trackStyle = {
        opacity: opacity,
      };
    return (
        <div >
          <h1 className="f3 lh-copy" style={trackStyle}>{track}</h1>
        </div>
    )
}
export default PreviousTrack;
