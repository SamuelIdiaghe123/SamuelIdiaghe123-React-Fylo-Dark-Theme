import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import "/Users/User/Documents/Completed Side Projects/React/react-app/src/App.css";
import illustration2 from "../images/illustration-stay-productive.png";
import Arrow from "../images/icon-arrow.svg";
import Profile1 from "../images/profile-1.jpg"
import Profile2 from "../images/profile-2.jpg"
import Profile3 from "../images/profile-3.jpg"
import quote from "../images/bg-quotes.png"
import quote2 from "../images/bg-quotes.png"

export const MiddleBottom = ()=> {
    return(
        <div>
            <div className={"container-fluid text-light d-flex flex-column align-items-center mt-5 pt-5"}>
                {/* Top */}
                <div className={"d-flex align-items-center gap-5 flex-column flex-lg-row mb-3"}>
                    <div className={"col-lg-6"}>
                        <img src={illustration2}  className={"mw-100"} alt="" />
                    </div>

                    <div className={"d-flex flex-column align-items-start gap-3 col-lg-5"}>
                        <h2 className={"text-start mw-50"} id="text-start">
                            Stay productive,
                            wherever you are
                        </h2>

                        <p className="text-start">
                            Never let location be an issue when accesing your files. Fylo has you 
                            covered for all of your file storage needs.
                        </p>

                        <p className="text-start">
                            Securely share files and folders with friends, family and colleagues for live  
                            collaboration. No email attachments required.
                        </p>

                        <a href="" className={"d-flex gap-2 ArrowLink text-decoration-none"}>
                            <div className={""}>
                                <p className={""}>See how Fylo works</p>
                            </div>

                            <div className={"Arrow"}>
                                <img src={Arrow} alt=""  className={""}/>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className={"quote d-none d-lg-inline"}>
                            <img src={quote} alt="" />
                </div>

                <div className={"quote2 d-lg-none"}>
                            <img src={quote2} alt="" />
                </div>


                <div className={"d-flex flex-column flex-lg-row gap-5 mt-lg-5"}>  
                {/* profile-1 */}

                    <div className={"card mw-25 h-25 text-start"}>
                        
                        <div className={"card-body d-flex flex-column align-items-start"}>
                            <div>
                                <p>
                                    Fylo has improved our team productivity by <br />
                                    an order of magnitude. Since making the <br />
                                    switch our team has become a well-oiled <br />
                                    collaboration machine.
                                </p>
                            </div>

                            <div className={"d-flex align-items-center gap-3"}>
                                <div>
                                    <img src={Profile1} alt="" className={"profile rounded-5"}/>
                                </div>

                                <div className={"d-flex flex-column text-start"}>
                                    <h3>
                                        Satish Patel
                                    </h3>

                                    <p>
                                        FOUNDER & CEO, HUDDLE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  

                    {/* profile-2 */}
                    <div className={"card mw-25 h-25  text-start"}>
                        <div className={"card-body d-flex flex-column align-items-start"}>
                            <div>
                                <p>
                                    Fylo has improved our team productivity by <br />
                                    an order of magnitude. Since making the <br />
                                    switch our team has become a well-oiled <br />
                                    collaboration machine.
                                </p>
                            </div>

                            <div className={"d-flex align-items-center gap-3"}>
                                <div>
                                    <img src={Profile2} alt="" className={"profile rounded-5"}/>
                                </div>

                                <div className={"d-flex flex-column text-start"}>
                                    <h3>
                                        Bruce McKenzie
                                    </h3>

                                    <p>
                                        FOUNDER & CEO, HUDDLE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* profile-3 */}
                    <div className={"card mw-25 h-25  text-start"}>
                        <div className={"card-body d-flex flex-column align-items-start"}>
                            <div>
                                <p>
                                    Fylo has improved our team productivity by <br />
                                    an order of magnitude. Since making the <br />
                                    switch our team has become a well-oiled <br />
                                    collaboration machine.
                                </p>
                            </div>

                            <div className={"d-flex align-items-center gap-3"}>
                                <div>
                                    <img src={Profile3} alt="" className={"profile rounded-5"}/>
                                </div>

                                <div className={"d-flex flex-column text-start"}>
                                    <h3>
                                        Iva Boyd
                                    </h3>

                                    <p>
                                        FOUNDER & CEO, HUDDLE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
