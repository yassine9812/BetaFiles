import React from "react";
import {Link } from 'react-router-dom';
import BodyFifthcss from './BodyFifth.module.css';
function BodyFifth () {
    return(
        <div className={BodyFifthcss.container}>
            <h2 className={BodyFifthcss.pos}> upload a short video talk about your skills and experience to boost your job application  </h2>
            <p>
            make your account   stand out by creating a short video  talk about yourself ,your skills and experience 
            </p>
            <img className={BodyFifthcss.imagetail} src="image/Group 1676.png" width="1390" alt="video expeerience"></img>
            <div className={BodyFifthcss.posbtn}>
            <button className={BodyFifthcss.btn}> <Link to="/Login">Create Account</Link></button>
            </div> 
            
        </div>
    )
}
export default BodyFifth;