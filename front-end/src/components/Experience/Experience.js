import React from 'react';
import './Experience.css';

let Experience = ({experienceStyle}) => {
    return (
        <div className={"experience-container " + experienceStyle}>
            <section >
            <img className="right-leaf" src="./right-leaf.png" alt=""/>
            <img className="right-leaf" src="./tropical-leaf.png" alt=""/>
            <img className="right-leaf" src="./branch-leaf.png" alt=""/>

                <h1> Work Experience</h1>
                <main className="pa3 pa5-ns">
                    <div className="pb3">
                        <h2> Cisco Systems, Software Engineer </h2>
                        <p> August 2019 - Present </p>
                        <div className="flex-wrap">
                            <p className="f4 lh-copy measure">
                                Used Angular 4 to build a Web Application to automate system dependency solutions
                            </p>
                            <p className="f4 lh-copy measure">
                                Used Github, Jenkins, Ansible, and Docker for continuous integration
                            </p>
                            <p className="f4 lh-copy measure">
                                Designed User Experience of app through iteration and mock-ups
                            </p>
                        </div>
                    </div>
                    <div className="pb3">
                        <h2> Teradata, Software Engineer Intern </h2>
                        <p> June 2017- April 2018 </p>
                        <div className="flex-wrap">
                            <p className="f4 lh-copy measure">
                                Used Angular 4 to build a Web Application to automate system dependency solutions
                            </p>
                            <p className="f4 lh-copy measure">
                                Used Github, Jenkins, Ansible, and Docker for continuous integration
                            </p>
                            <p className="f4 lh-copy measure">
                                Designed User Experience of app through iteration and mock-ups
                            </p>
                        </div>
                    </div>
                    <div className="pb2">
                        <h2> Mesh Education, Software Engineer Intern </h2>
                        <p> October 2016 - March 2017 </p>
                        <div className="flex-wrap">
                            <p className="f4 lh-copy measure">
                                Used Django/Python and PostgreSQL to create a Web Application for real-time interaction in lecture halls
                            </p>
                            <p className="f4 lh-copy measure">
                                Documented Use Cases and Requirements with agile techniques
                            </p>
                            <p className="f4 lh-copy measure">
                                Used Google Analytics to monitor and adapt health of application
                            </p>
                        </div>
                    </div>
                   
                </main>
            </section>
        </div>
    )
}
export default Experience;
