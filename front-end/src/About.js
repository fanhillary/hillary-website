import React from 'react';
import './About.css';

let About = ({bg}) => {
    return (
        <div className={bg}>
            <section>
                <h1> About Me </h1>
                <main className="pa3 pa5-ns">
                    <p className="f4 lh-copy measure">
                        Typography has one plain duty before it and that is to convey information
                        in writing. No argument or consideration can absolve typography from this
                        duty. A printed work which cannot be read becomes a product without
                        purpose.
                    </p>
                </main>
            </section>
        </div>
    )
}
export default About;
