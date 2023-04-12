import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import "/Users/User/Documents/Completed Side Projects/React/react-app/src/App.css";
import Access from "../images/icon-access-anywhere.svg";
import Collaboration from "../images/icon-collaboration.svg"
import File from "../images/icon-any-file.svg"
import Security from "../images/icon-security.svg"

export const MiddleTop = () => {
    return(
        <div>
            <div className={"container-fluid mt-lg-5"}>
                <section className={"middle-top text-light d-flex flex-column align-items-center mt-lg-5 pt-lg-5"}>
                    <div className={"d-flex align-items-center row-1 gap-5 mb-5 flex-column flex-lg-row"}>
                        <div className={"me-lg-5 pe-lg-5 mb-5 mb-lg-none"}>
                            <img src={Access} alt="" />
                            <div className={"d-flex flex-column align-items-center"}>
                                <h3>
                                    Access your file, anywhere
                                </h3>

                                <p className={"w-75"}>
                                    The ability to use a smartphone, tablet , or computer
                                    to access your account means your files follow you 
                                    everywhere.
                                </p>
                            </div>
                        </div>

                        <div className={"ms-lg-5 ps-lg-5"}>
                            <img src={Security} alt="" />

                            <div className={"d-flex flex-column align-items-center"}>
                                <h3>
                                    Security you can trust
                                </h3>

                                <p className={"w-75"}>
                                    2-factor autentication and user-controlled encryption are 
                                    just a couple of the security features we allow to help 
                                    secure your files.
                                </p>
                            </div>
                        </div>
                    </div>
                    

                    <div className={"d-flex align-items row-1 gap-5 mt-5 flex-column flex-lg-row"}>
                        <div className={"me-lg-5 pe-lg-5 mb-5 mb-lg-none"}>
                            <img src={Collaboration} alt="" />

                            <div className={"d-flex flex-column align-items-center"}>
                                <h3>
                                    Real-time collaboration
                                </h3>

                                <p  className={"w-75"}>
                                    Securely share files and folders with friends, family and
                                    colleauges for live collaboration. No email attachments 
                                    required.
                                </p>
                            </div>
                        </div>

                        <div className={"ms-lg-5 ps-lg-5"}>
                            <img src={File} alt="" />

                            <div className={"d-flex flex-column align-items-center"}>
                                <h3>
                                    Store any type of file
                                </h3>

                                <p className={"w-75"}>
                                    Whether you're sharing holidays photos or work 
                                    documents, Fylo has you covered allowing for all file 
                                    types to be securely stored and shared.
                                </p>
                            </div>
                        </div>
                    </div>

                   

                 
                </section>
            </div>
        </div>
    )
}
