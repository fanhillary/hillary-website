import React from 'react';
import './Contact.css';
import anime from 'animejs/lib/anime.es.js';
import $ from 'jquery';

export default class Contact extends React.Component {
    sendMail() {
        console.log('hello');
        const objects = document.getElementsByTagName('input');
        const name = objects[0];
        const email = objects[1];
        const message = document.getElementsByName('message')[0];
        window.open('mailto:hillary.fan123@gmail.com?subject=' + name + '&body=' + message + "\n email back: " + email);
    }
    
    componentDidMount() {
        let basicTimeline = anime.timeline({
            autoplay: false
          });

        var pathEls = $(".check");
        for (let i = 0; i < pathEls.length; i++) {
          var pathEl = pathEls[i];
          var offset = anime.setDashoffset(pathEl);
          pathEl.setAttribute("stroke-dashoffset", offset);
        }
        
        basicTimeline
        .add({
            targets: ".text",
            duration: 1,
            opacity: "0"
        })
        .add({
            targets: ".button",
            duration: 1300,
            height: 10,
            width: 300,
            backgroundColor: "#2B2D2F",
            border: "0",
            borderRadius: 100
        })
        .add({
            targets: ".progress-bar",
            duration: 2000,
            width: 300,
            easing: "linear"
        })
        .add({
            targets: ".button",
            width: 0,
            duration: 1
        })
        .add({
            targets: ".progress-bar",
            width: 80,
            height: 80,
            delay: 500,
            duration: 750,
            borderRadius: 80,
            backgroundColor: "#71DFBE"
        })
        .add({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: 200,
            easing: "easeInOutSine"
        })
        
        $(".button").click(function() {
        basicTimeline.play();
        });
        
        $(".text").click(function() {
        basicTimeline.play();
        });
    }
    render() {
        let {contactStyle} = this.props;
        return (
            <div className={"container contact-container " + contactStyle}>
                <h1 className="f1 lh-title pb5">Contact Me!</h1>
                <form className="mb5"> 
                    <div className="round-input relative" data-validate="Please enter your name">
                        <input className="contact-input" type="text" name="name" placeholder="Your Name*"/>
                    </div>
                    <div className="round-input relative" data-validate="Please enter your email: e@a.x">
                        <input className="contact-input" type="text" name="email" placeholder="Your E-mail*"/>
                    </div>
                    <div className="round-input relative" data-validate="Please enter your message">
                        <textarea className="contact-input" name="message" placeholder="Your Message*"></textarea>
                    </div>
                    {/* <div className="flex justify-center pt5">
                        <a onClick={this.sendMail} className="form-button f4 grow no-underline br-pill ph4 pv2 dib white bg-purple">
                            <i className="material-icons mr3">send</i>
                            Submit
                        </a>
                    </div> */}
                    <div className="flex justify-center">
                        <div className="main">
                            <div className="button">
                                <div className="text">Submit</div>
                            </div>
                            <div className="progress-bar"></div>
                            <svg x="0px" y="0px"
                                viewBox="0 0 25 30" className="check-svg">
                                <path className="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
                            </svg>
                        </div>
                    </div>


                </form>
                <div className="flex flex-wrap mb2">
                    <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://github.com/fanhillary" target="_blank" title="GitHub">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                        <span className="f6 ml3 pr2">GitHub</span>
                    </a>
                    <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center ma2 tc br2 pa2" href="https://www.linkedin.com/in/fanhillary/" target="_blank" title="LinkedIn">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
                        <span className="f6 ml3 pr2">LinkedIn</span>
                    </a>
                </div>
                <div className="mt2"> 
                    <p> "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." -- Albert Einstein </p>
                </div>
            </div>
        )
    }
}