import React from "react";
import "./Header.css"
// import {ArrowRightOutlined} from '@antd-design/icons';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container" >
                <div className="about-the-company">
                    
                    <ul>About Boking tours</ul>
                    <ul>This company was invented in 2013 with the mission of facilitating your visits around Rwanda</ul>
                    
                </div> 
                <div className="links">
                    <ul>Sites Links</ul>                
                    <ul> <a href="/aboutus" style={{color:"white"}}>About us</a></ul>
                    <ul> <a href="/contact" style={{color:"white"}}>Contact us</a></ul>                    
                    <ul>RBT databases</ul>
                    <ul>Privacy policy</ul>
                    <ul>Terms of services</ul>
                </div> 
                <div className="newsletter">
                    <ul>Subscribe to our Newletter!</ul>
                    <input placeholder="Email"/>
                    {/* <ArrowRightOutlined/> */}
                     </div>      
                  </div>           
        </div>

    )        
               
}
export default Footer;