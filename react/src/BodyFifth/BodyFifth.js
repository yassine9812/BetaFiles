import React from "react";
import {Link } from 'react-router-dom';
import BodyFifthcss from './BodyFifth.module.css';
import pic from './video-camera-dynamic-color.png'
function BodyFifth () {
    return(
        <div className={BodyFifthcss.container}>
            <div>
            <h2 className={BodyFifthcss.pos}> upload a short video talk about your skills and experience to boost your job application  </h2>
            <p>
            make your account   stand out by uploading a short video  talk about yourself ,your skills and experience 
            </p>
            
            <div className={BodyFifthcss.posbtn}>
            <button className={BodyFifthcss.btn}> <Link to="/Login">Create Account</Link></button>
            </div> 
            </div>
            <div>
            <img  src={pic} width="472px" height='472' alt="video expeerience"></img>
            </div>
            
        </div>
    )
}
export default BodyFifth;