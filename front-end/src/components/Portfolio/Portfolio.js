import React from 'react';
import './Portfolio.css';

let Portfolio = ({portfolioBackground}) => {
    return (
        <div className={"portfolio-container " + portfolioBackground }>
            <section>
                <h1> Portfolio </h1>
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
export default Portfolio;
