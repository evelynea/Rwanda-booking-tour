import Paragraph from "antd/lib/skeleton/Paragraph";
import React from "react";
import HomeLayout from "./homelayout";
import "./tourcard.css"


const Singletour=({tour})=>{
    return(
        
            <div className="singletours-container">
                <h1>{tour?.title}</h1>

                <img src={tour?.images[0]}></img>
                <Paragraph> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellat accusamus molestias modi nemo
                non minus!
                Accusamus animi sed ut consectetur dolorum hic obcaecati molestiae, dolore earum dolorem doloremque
                optio.</Paragraph>
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
            </div>
            </div>
            <h2>Gallery</h2>
            <div className="gallery">

                {
                    tour.images.map((image)=>(

                        <img src={image}></img>
                    ))
                }
                               
            </div>
            <br></br>
            <button> Book this one</button>
            </div>        
     
    )
}
export default Singletour;