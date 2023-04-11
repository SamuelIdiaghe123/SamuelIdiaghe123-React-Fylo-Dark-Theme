import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import "/Users/User/Documents/Completed Side Projects/React/my-app/src/App.css";
import Logo from "../images/logo.svg"

export const Navbar = () => {
    return(
        <div>
            <div className={"container-fluid mt-3"}>
                <section className={"navbar navbar-expand-lg"}>
                    <div className={"navbar-brand"}>
                        <img src={Logo} alt="" />
                    </div>

                    <button className={"navbar-toggler"}
                    type={"button"}
                    data-bs-toggle={"collapse"}
                    data-bs-target={"#navmenu"}>
                        <span className={"text-light"}>
                            <i className="bi bi-list"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className={"navbar-nav ms-auto gap-lg-4 mt-3 mt-lg-0"}>
                            <li className={"nav-item"}>
                                <a href="#" className={"text-secondary nav-link"}>Features</a>
                            </li>

                            <li className={"nav-item"}>
                                <a href="#" className={"text-secondary nav-link"}>Team</a>
                            </li>

                            <li className={"nav-item"}>
                                <a href="#" className={"text-secondary nav-link"}>Sign In</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
};