import React from "react";
import Home from "../views/home";
import Aboutus from "../views/aboutus";
import Contact from "../views/contact";
import Toursview from "../views/tours";
import Singletour from "../components/singletour";
import Newtour from "../views/dashboard/newtour";
import { Routes, Route } from "react-router-dom";

const Index = () => {
    return (
        <Routes>
            <Route element={<Home/>} path="/home"></Route>
            <Route element={<Aboutus/>} path="/aboutus"></Route>
            <Route element={<Contact/>} path="/contact"></Route>   
            <Route element={<Toursview/>} path="/tours"></Route>
            <Route element={<Singletour/>} path="/singletour"></Route>  
            <Route element={<Newtour/>} path="/newtour"></Route> 
                      

            </Routes>
    )
    
}
                export default Index;
