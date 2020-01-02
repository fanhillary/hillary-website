import React from 'react';
import './About.css';

let About = ({aboutBackground}) => {
    return (
        <div className={'about-container ' + aboutBackground}>
            <section>
                <h1> About Me </h1>
                <main className="pa3 pa5-ns">
                    <div className="pb2">
                        <h2> Hi! I'm Hillary, again. </h2>
                        <p className="f4 lh-copy measure">
                            I am a full-stack developer.
                            I enjoy working on web applications, finding solutions to complex problems, and designing intuitive user experiences.
                            Some of my favorite technologies are ReactJS, Angular, Java, Python, and MongoDB. 
                        </p>
                    </div>
                    <div className="pb2">
                        <h2> Life Motto </h2>
                        <p className="f4 lh-copy measure">
                            To end everyday knowing that I have learned something new or improved upon myself.
                        </p>
                    </div>
                    <div className="pb2">
                        <h2> I love: </h2>
                        <p className="f4 lh-copy measure">
                            Late night walks in the city, finding hidden rooftops to view stars, and sharing music I love.
                        </p>
                    </div>
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
