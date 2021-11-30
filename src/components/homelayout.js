import React from "react";
import "./homelayout.css";
import Header from "./Header";
import Footer from "./footer";

const HomeLayout = ({ children }) => {
    return (
        <div className="home-container">

            <Header />
            <div className="children">
                {children}
            </div>
            
            <Footer />
            <h4> © Evelyne 2021</h4>             

        </div>
    )
}
export default HomeLayout;