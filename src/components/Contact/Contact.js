import React from 'react';
import './Contact.css';
import anime from 'animejs/lib/anime.es.js';
import $ from 'jquery';
let basicTimeline = anime.timeline({
    autoplay: false
  });

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    componentDidMount() { 
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
    }
    changeName(e) {
        this.setState({name: e.target.value});
    }
    changeEmail(e) {
        this.setState({email: e.target.value});
    }
    changeMessage(e) {
        this.setState({message: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
        if (this.validateForm()) {
            fetch('https://hillary-fan-server.herokuapp.com/sendEmail',{
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                },
            }).then((response) => response.json())
            .then((response)=> {
                if (response === 'Success'){
                    setTimeout(() => {  this.resetForm(); }, 2000);
                    basicTimeline.play();
                }else {
                    console.log("Error sending email.");
                }
            })
        }
    }

    resetForm() {
        this.setState({name: ""});
        this.setState({email: ""});
        this.setState({message: ""});
    }

    validateForm() {
        var nameValidation = document.getElementsByClassName('validation')[0];
        var emailValidation = document.getElementsByClassName('validation')[1];

        if (this.state.name === "" && this.state.email === "") {
            nameValidation.style.opacity = "100%";
            emailValidation.style.opacity = "100%";
            return false;
        } else if (this.state.name === "") {
            nameValidation.style.opacity = "100%";
            emailValidation.style.opacity = "0%";
            return false;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
            emailValidation.style.opacity = "100%";
            nameValidation.style.opacity = "0%";
            return false;
        }
        emailValidation.style.opacity = "0%";
        nameValidation.style.opacity = "0%";
        return true;
    }

    render() {
        return (
            <div className="contact-container ">
                <h1 className="subheader pb5">Contact Me</h1>
                <form className="mb5" method="POST" autoComplete="off"> 
                    <div className="round-input relative flex items-center">
                        <input className="contact-input" type="text" name="name" placeholder="Your Name*" value={this.state.name} onChange={this.changeName.bind(this)}/>
                        <div className="validation"><p className="mr2">Missing Name</p><i className="mr2 fas f4 fa-exclamation-circle"></i></div>
                    </div>
                    <div className="round-input relative flex items-center">
                        <input className="contact-input" type="text" name="email" placeholder="Your E-mail*"  value={this.state.email} onChange={this.changeEmail.bind(this)}/>
                        <div className="validation"><p className="mr2">Invalid Email</p><i className="mr2 fas f4 fa-exclamation-circle"></i></div>
                    </div>
                    <div className="round-input relative">
                        <textarea className="contact-input w-100" name="message" placeholder="Your Message"  value={this.state.message} onChange={this.changeMessage.bind(this)}></textarea>
                    </div>
                    <div className="flex justify-center">
                        <div className="main">
                            <div className="button" onClick={this.handleSubmit.bind(this)}>
                                <div className="text flex" onClick={this.handleSubmit.bind(this)}> <i className="material-icons mr3">send</i> Submit</div>
                            </div>
                            <div className="progress-bar"></div>
                            <svg x="0px" y="0px"
                                viewBox="0 0 25 30" className="check-svg">
                                <path className="check" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
                            </svg>
                        </div>
                    </div>
                </form>
                <div className="mt2"> 
                    <p> "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." </p>
                </div>
                <div className="mt2">
                    <p className="f5 lh-copy "> Feel free to email me @ hillary.fan123@gmail.com | Hillary Fan © 2015 - 2020 </p>
                </div>
            </div>
        )
    }
}
