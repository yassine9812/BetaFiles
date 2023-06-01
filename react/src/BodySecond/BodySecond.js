import React from "react";
import BodySecondcss from "./BodySecond.module.css";
import {Link } from 'react-router-dom';
function BodySecond(){
    return(
        <div className={BodySecondcss.container}>
            <div className={BodySecondcss.leftpos}>
            <img src="image/Group 1637.png" alt="signup"/>
            </div>
       
       <div className={BodySecondcss.rightpos} >
        <div style={{display:'flex', flexDirection:'column'}} >
            <h2>
            Signup  Now  And Find Your Dream Job  
            </h2>
            <p style={{width:'482px',textAlign:'left',marginTop:'-20px'}} >
            browse through our job offers and find that job you've always wanted 
            </p>
            <div style={{marginTop:'100px',marginLeft:'-300px'}}>
                <button className={BodySecondcss.btn} > 
                <Link to="/SignUp">SignUp Now</Link> 
                </button>
            </div>
            </div>
       </div>
       
       

        </div>
    )
}
export default BodySecond;