import React from 'react';
import './About.css';

let About = ({bg}) => {
    return (
        <div className={'about-container ' + bg}>
            <section>
                <h1> About Me </h1>
                <main className="pa3 pa5-ns">
                    <p className="f4 lh-copy measure">
                    Hi! I enjoy working on web applications, finding solutions to problems, and designing intuitive user experiences. 
                    </p>
                    <p className="f4 lh-copy measure">
                    My life motto is to end everyday knowing that I have learned something new or improved a skill. 
                    Some things I love are late night walks in the city, finding hidden rooftops to view stars, and sharing music I love.
                    </p>
                    <p className="f4 lh-copy measure">Here's what I'm listening to right now:</p> 
                    <p className="f4 lh-copy measure"> spotify </p>
                    <p className="f4 lh-copy measure"> spotify </p>
                    <p className="f4 lh-copy measure"> spotify </p>
                </main>
            </section>
        </div>
    )
}
export default About;
