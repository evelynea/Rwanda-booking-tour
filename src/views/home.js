import React from "react"
import "./home.css"
import "../components/Header.css"
// import Header from "../components/Header";
// import Footer from "../components/footer";
import HomeLayout from "../components/homelayout";
import ReactDOM from 'react-dom'

   
const Home = () => {

    return (
        <div className="home-container">

            <HomeLayout>

                <div className="home-bg">
                    <h2>Rwanda booking tours</h2>
                </div>
                <div className="middle">
                    <div className="search">
                        <input type="text" name="search" />
                        <button type="submit"> SEARCH</button>
                    </div>
                    <div className="quote-div">
                        <h1> Book with us.</h1>
                        <p> we are responsible of you and your belongings from the time your book your tour with us until the very end.
                            
                           <br/><br/> Allow us to be part of your amazing journey today!
                              </p>
                
                        <button type="submit"> <a href= "/tours" style={{color: "green"}}> BOOK TOUR </a> </button>

                    </div>
                </div>
            </HomeLayout>

        </div>
    )
}
export default Home;