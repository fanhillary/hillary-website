import React from 'react';
import './Logo.css';
let Logo = ({logoVisible})=> {
    return (
        <div className="logo-container"> 
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g display={logoVisible}>
                    <circle cx="50" cy="50" r="25" fill="#a7dbfb" />
                    <circle cx="50" cy="50" r="35" fill="#b2dffb" opacity="60%"/>
                    <circle cx="50" cy="50" r="45" fill ="#bde4fc" opacity="40%"/>
                    <circle cx="50" cy="50" r="50" fill ="#c8e8fc" opacity="25%"/>
                    <text x="43" y="55" fontWeight="bold" fill="white">hf</text>
                </g>
            </svg>
        </div>
    )
}
export default Logo;