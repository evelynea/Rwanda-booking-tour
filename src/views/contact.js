import React from "react"
import "../components/Header.css"
import HomeLayout from "../components/homelayout";
import "./aboutus.css"
import { FacebookOutlined  } from '@ant-design/icons';
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const Contact = () => {
       return (
              <div className="aboutus">
                     <HomeLayout>
                            <div className= "contact-container">
                                   <div className="contact">
                                          <h1> location</h1>
                                          <h2>KG 574 St</h2>
                                          <h4>Tel: +250789083600</h4>
                                         <h5>Rwandabookingours@gmail.com</h5>
                                         <FacebookOutlined />                         


                                   </div>
                                   <div className="user-contact">
                                   {/* <label>Name:</label>
                                          <input type="username"/>
                                   <label>Address:</label>
                                   <input type="address"/>

                                   <label>Gender:</label>
                                   
                                   <label>Comment:</label> */}
                                   <h1>Talk to us</h1>
                                   <h2> Name <input placeholder=""></input> </h2>                                 
                                   <h2> Address <input placeholder=""></input> </h2>
                                   <h2> Your message <input placeholder="" style={{height: "20vh"}}></input> </h2>
                                   </div>
                            </div>
                     </HomeLayout>
              </div>
       )
}
export default Contact;
