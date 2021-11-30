import React, {useState} from "react";
import HomeLayout from "../components/homelayout";
import "./aboutus.css"
import "../components/tourcard"
import Tourcard from "../components/tourcard";
import alltoursdata from "../assets/constants/tours.json"

import "antd/dist/antd.css"


const Toursview=()=> {
    return (
       
        <HomeLayout>
            <div className="ooo">
            <div className="tour-container">
                {
                    
                    alltoursdata.map((data)=>(<Tourcard tour={data} />))
                }

                </div>
               

            </div>
        </HomeLayout>
        
    )
}
export default Toursview;