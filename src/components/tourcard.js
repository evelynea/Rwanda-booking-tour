import React,{useState} from "react";
import "./tourcard.css"
import image from "../assets/niyo-arts.jpg"
import Toursview from "../views/tours";
import images from "../assets/constants/tours.json"
import { Drawer } from "antd";
import "antd/dist/antd.css"
import Singletour from "../components/singletour";


const Tourcard=({tour})=>{
    console.log(tour.images[0])
    
    const [DrawerVisible, setDrawerVisible]=useState(false);
    const handleclickDrawerVisible=()=>{
        setDrawerVisible(true);
    }
    const closedrawerVisible=()=>{
        setDrawerVisible(false);
    }

    return(
        <>
        <Drawer title={tour.title} placement="right" visible={DrawerVisible} width={720} onClose={()=>closedrawerVisible()}>
            <Singletour tour ={tour}/>
        </Drawer>
        <div className="tourcard-container">
                <img src={tour?.images[0]} width="50%"></img> 
                <div className="tour-description" onClick={()=>handleclickDrawerVisible()}>
                <h1> {tour?.title}</h1>
                <p>{tour?.description}</p>
                <br></br>
               <div className="date-diplay">
                <div className="date-title">
                <h3>Date scheduled  </h3>
                
                <p>{tour?.dateScheduled}</p>
                <br></br>
                <h4> Available seats</h4>
                <p> {tour?.available}/{ tour?.seats}</p>
                
                </div>
                <div className="dates">
                <h3> Due date scheduled </h3>
                <p>{tour?.dueDate}</p>
                <br></br>
                <br></br>

                <a href ="#"> Read more...</a>
                </div>
                </div>
                </div>
        </div>
        </>
    )
}
export default Tourcard;