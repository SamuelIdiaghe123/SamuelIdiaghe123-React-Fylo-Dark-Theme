import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import "/Users/User/Documents/Completed Side Projects/React/my-app/src/App.css";
import {Navbar} from "./navbar";
import {Top} from "./top"
import {MiddleTop} from "./middleTop"
import {MiddleBottom} from "./middleBottom"
import {Footer} from "./footer"


const BasePage = () => {
    return(
        <div>
            <div className={"container-fluid mt-3 mb-5 d-flex flex-column"}>
                <Navbar/>
                <Top/>
                <MiddleTop/>
                <MiddleBottom/>
                <Footer/>
            </div>
        </div>
    )
};

export default BasePage;