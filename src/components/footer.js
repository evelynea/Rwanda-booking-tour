import React from "react";
import "./Header.css"
// import {ArrowRightOutlined} from '@antd-design/icons';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container" >
                <div className="about-the-company">
                    
                    <ul>about Boking tours</ul>
                    <ul>this company was invented in 2013 with the mission of facilitating your visits around Rwanda</ul>
                    
                </div> 
                <div className="links">
                    <ul>sites Links</ul>
                
                    <ul> <a href="/aboutus" style={{color:"white"}}>about us</a></ul>
                    <ul> <a href="/contact" style={{color:"white"}}>contact us</a></ul>

                    
                    <ul>RBT databases</ul>
                    <ul>privacy policy</ul>
                    <ul>terms of services</ul>   

                </div> 
                <div className="newsletter">
                    <ul>subscribe to our Newletter!</ul>
                    <input placeholder="Email"/>
                    {/* <ArrowRightOutlined/> */}
                     </div>      
                  </div>           
        </div>

    )        
               
}
export default Footer;