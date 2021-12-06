import React from "react";
import Home from "../views/home";
import Aboutus from "../views/aboutus";
import Contact from "../views/contact";
import Toursview from "../views/tours";
import Singletour from "../components/singletour";
import Newtour from "../views/dashboard/newtour";
import Dashlayout from "../components/dashboardlayout"
import { Routes, Route, useLocation } from "react-router-dom";
import Alltours from "../views/dashboard/alltours";
import Header from "../components/Header";
import CreateAccount from "../views/createaccount";

const isUserLogedIn= localStorage.getItem("userlogin");
const Index = () => {
    const currentUrl= useLocation().pathname;
    

    return (
        <>
        <Routes>
            <Route element={<Home/>} path="/home"></Route>
            <Route element={<Aboutus/>} path="/aboutus"></Route>
            <Route element={<Contact/>} path="/contact"></Route>   
            <Route element={<Toursview/>} path="/tours"></Route>
            <Route element={<Singletour/>} path="/singletour"></Route> 
            <Route element={<CreateAccount/>} path="/createaccount"></Route> 
            
            
                     
            </Routes> 
            {isUserLogedIn && currentUrl.includes("/dash")?(
                <Dashlayout>
                <Routes>
                    <Route path="/dash/newtour" element={<Newtour/>}/>
                    <Route path="/dash/alltours" element={<Alltours/>}/>

                </Routes>    
            </Dashlayout> 
              ):(
          <></>
            )}  
            </>
    )
    
}
                export default Index;
