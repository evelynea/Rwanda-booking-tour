import React from "react"
import "../components/Header.css"
import HomeLayout from "../components/homelayout";
import "./aboutus.css"
import tourist1 from '../assets/tourist1.jpg';

const Aboutus = () => {
       return (
              
                     <HomeLayout>
                            <div className="about-container">
                                   <div className="description">
                                          <h1> Description.</h1>
                                          <p> we are responsible of you and your belongings from the time your book your tour with us until the very end.

                                                 Allow us to be part of your amazing journey today!
                                          </p>
                                          <br></br>
                                          <h1> Our mission</h1>
                                          <p>we help you reach most places in very few days <br></br></p>
                                          <br></br>

                                          <h1>Our vision</h1>
                                          <p> reach world wide</p>
                
                                          <button type="submit"> <a href="/tours" style={{color:"green"}}>Explore</a></button>

                                   </div>
                                   <div className="tourists">
                                         

                                   </div>
                                   <div className="reviews">
                                          <h1 style={{color:"green"}}> Reviews</h1>
                                          <h4>Yvette:</h4>
                                          <p>I so loved that these people were on time</p>
                                          <br></br>
                                          <h4> Arsene:</h4>
                                          <p>I appreciate that we had a preview of the events before it started. proves that you are proffesional</p>
                                          <button type="submit"> MY REVIEW</button>
                                   </div>
                            </div>
                     </HomeLayout>
       
       )
}
export default Aboutus;
