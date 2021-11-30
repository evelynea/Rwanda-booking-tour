import React from "react";
import "./Header.css"
import logo from '../assets/logo.PNG';
import { Link } from "react-router-dom";
import Aboutus from "../views/aboutus";
import Toursview from "../views/tours";


const Header = () => {
    return (
        <div className="header">

            <div className="logo">
                <img src={logo} />
            </div>
            <div className="navbar">
                <a href="/home">HOME</a>
                <a href="/tours">TOURS</a>
                <a href="/aboutus">ABOUT US</a>
                {/* <link to ="Dashboard"></link> */}
                <a href="/contact">CONTACT</a>
                


            </div>

        </div>


    )
}

export default Header;