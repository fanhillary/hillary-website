import React from 'react';
import './Portfolio.css';

let Portfolio = () => {
    return (
        <div>
            <section >
                <h1> Portfolio</h1>
                <main className="pa3 pa5-ns">
                    <div className="pb3">
                        <h2> Cisco Systems, Software Engineer </h2>
                        <p> August 2019 - Present </p>
                        <div className="flex-wrap">
                            <p className="f4 lh-copy measure">
                                Worked with Python, Angular, Docker, and MongoDB to build a natural language processing search engine.
                            </p>
                            <p className="f4 lh-copy measure">
                                Follow Agile methodologies with scrum meetings, retrospectives, code reviews, continuous integration.
                            </p>
                        </div>
                    </div>
                    <div className="pb3">
                        <h2> Teradata, Software Engineer Intern </h2>
                        <p> June 2017- April 2018 </p>
                        <div className="flex-wrap">
                            <p className="f4 lh-copy measure">
                                Used Angular 4 to build a Web Application that guides user to fix system dependency solutions
                            </p>
                            <p className="f4 lh-copy measure">
                                Designed UX and flow of app through iteration and mock-ups
                            </p>
                        </div>
                    </div>
                    <div className="pb2">
                        <h2> Mesh Education, Software Engineer Intern </h2>
                        <p> October 2016 - March 2017 </p>
                        <div className="flex-wrap">
                            <p className="f4 lh-copy measure">
                                Used Django/Python and PostgreSQL to create a Web Application for real-time interaction between professors and students in lecture halls
                            </p>
                            <p className="f4 lh-copy measure">
                                Documented Use Cases and Requirements with agile techniques
                            </p>
                        </div>
                    </div>
                    <div className="pb2">
                        <h2> University of California, San Diego </h2>
                        <p> Graduated: June 2019, Computer Science B.S. </p>
                    </div>
                   
                </main>
            </section>
        </div>
    )
}
export default Portfolio;
