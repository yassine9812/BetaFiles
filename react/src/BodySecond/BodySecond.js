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
            <h2>
             Signup  Now And Use Our Resume Builder To Create Your Resume Wining Job 
            </h2>
       </div>
       <button className={BodySecondcss.btn} > 
       <Link to="/SignUp">SignUp Now</Link> 
       </button>
       

        </div>
    )
}
export default BodySecond;