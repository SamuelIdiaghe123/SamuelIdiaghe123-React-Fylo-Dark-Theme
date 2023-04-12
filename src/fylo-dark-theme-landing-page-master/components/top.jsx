import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import "/Users/User/Documents/Completed Side Projects/React/react-app/src/App.css";
import illustration  from "../images/illustration-intro.png"
import pattern  from "../images/bg-curvy-desktop.svg";
import pattern2 from "../images/bg-curvy-mobile.svg";

export const Top = () => {
    return(
        <div>
            <div className={"container-fluid mt-5 mt-lg-0 text-light"}>
                <section className={"top d-flex flex-column"}>
                    <div>
                        <img src={illustration} className={"mw-100"} alt="" />
                    </div>

                    <div className={"d-flex flex-column gap-4 align-items-center"}>
                        <h2 className="topCaption text-cente w-75">
                            All your files in one secure location, <br />
                            accesible anywhere.
                        </h2>

                        <p className={"topText text-center w-75"}>
                            Fylo stores all your most important files in one secure location. <br />
                            Access them wherever you need, share and collaborate with <br />
                            friends family, and co-workers.
                        </p>
                    </div>

                    <div>
                        <button className={"btn btn-lg btn-info text-light rounded-pill getStarted mt-3"}>
                            Get Started
                        </button>
                    </div>

                    <div className={"pattern-1 d-lg-inline d-none w-auto"}>
                        <img src={pattern}  alt=""  />
                    </div>

                    <div className={"pattern-2 d-lg-none "}>
                        <img src={pattern2}  alt="" />
                    </div>

                    
                </section>
            </div>
        </div>
    )
};
