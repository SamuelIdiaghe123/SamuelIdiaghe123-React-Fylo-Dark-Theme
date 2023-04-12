import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import "/Users/User/Documents/Completed Side Projects/React/react-app/src/App.css";
import Logo from "../images/logo.svg"
import iconLocation from "../images/icon-location.svg"
import phone from "../images/icon-phone.svg"
import mail from "../images/icon-email.svg"
import "../scss/_mixins.scss"

export const Footer = () => {
    const [show, setShow] = useState()

    const ValidateEmail = (e) => {
        const email = document.getElementById("input");
        // const error = document.getElementsByClassName("errorMessage");

        e.preventDefault();

        let valid =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(valid.test(email.value)){
            // alert("")
            email.value = "";
            setShow("true")
            
            
            
        }

        else{
            alert("Invalid email address")
            setShow(false)
            // error.style.display = "inline"
            // document.getElementsByClassName("errorMessage").style.display = "block"

        }
    }

    return(
        <div>
            <div className={"container-fluid text-light mt-5 d-flex flex-column align-items-center pt-5 "}>
                <section className="mt-5">
                    <div className={"card mw-25 d-none d-lg-flex d-md-flex"} id={"formSection"}>
                        <div className={"card-body"}>
                            <h1>
                                Get early access today
                            </h1>

                            <p>
                                it only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br />
                                questions, our support team would be happy to help you.
                            </p>

                            
                            <form action="" className={"d-flex justify-content-center align-items-center gap-4  flex-row pt-3"}>
                                <input type="email" name="" id={"input"} className={"form-control rounded-pill"} placeholder={"example@email.com"}/>

                                <button className={"btn btn-lg btn-info text-light rounded-pill GetStarted"} onClick={ValidateEmail}>
                                     Get Started For Free
                                </button>
                            </form>

                            <div className="error">
                                <p className="text-danger errorMessage" style={{display: {show}}}>
                                    Please enter a valid email address
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"card mw-25 d-lg-none d-md-none"} id={"formSection2"}>
                        <div className={"card-body"}>
                            <h1>
                                Get early access today
                            </h1>

                            <p>
                                it only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                                questions, our support team would be happy to help you.
                            </p>

                            <form action="" className={"d-flex justify-content-center align-items-center gap-5 flex-column flex-lg-row"}>
                                <input type="email" name="" id="input" className={"form-control rounded-pill"} placeholder={"example@email.com"}/>

                                <button className={"btn btn-lg btn-info text-light rounded-pill GetStarted"} onClick={ValidateEmail} >
                                     Get Started For Free
                                </button>
                            </form>

                            <div className="error">
                                <p className="text-danger errorMessage" >
                                    Please enter a valid email address
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </section>

                <footer className="mt-5">
                    <div className="text-start mb-5 mt-5">
                        <img src={Logo} alt="" />
                    </div>

                    <div className="d-flex gap-5 justify-content-evenly flex-column flex-lg-row">
                        <div className="d-flex gap-3">
                            <div>
                                <img src={iconLocation} alt="" />
                            </div>

                            <div>
                                <p className="text-start">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                                    earum  a sit numquam provident voluptate beatae! Ipsum <br /> 
                                    cupiditate? Id?
                                </p>
                            </div>
                        </div>

                        
                            <div className="d-flex flex-column">
                                <div className="d-flex gap-3">
                                    <div>
                                        <img src={phone} alt="" />
                                    </div>

                                    <p>
                                        +1-543-123-4567
                                    </p>
                                </div>

                                <div className="d-flex gap-3">
                                    <div>
                                         <img src={mail} alt="" />
                                    </div>

                                    <p>
                                        example@fylo.com
                                    </p>

                                </div>
                            </div>

                            <div>
                                <ul className="text-start">
                                    <li>
                                        <a href="">About Us</a>
                                    </li>

                                    <li>
                                        <a href="">Jobs</a>
                                    </li>

                                    <li>
                                        <a href="">Press</a>
                                    </li>

                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="text-start">
                                    <li>
                                        <a href="">Contact Us</a>
                                    </li>

                                    <li>
                                        <a href="">Terms</a>
                                    </li>

                                    <li>
                                        <a href="">Privacy</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="d-flex gap-4 justify-content-center">
                                    <li>
                                        <i className="bi bi-facebook rounded-5"></i>
                                    </li>

                                    <li>
                                        <i className="bi bi-twitter rounded-5"t></i>
                                    </li>

                                    <li>
                                        <i className="bi bi-instagram rounded-5"></i>
                                    </li>
                                </ul>
                        </div>
                        </div>

                        
                    
                </footer>
            </div>
        </div>
    )
}
