import React from "react";
import {Link } from 'react-router-dom';
import BodyFourthcss from './BodyFourth.module.css';
function BodyFourth(){
    return(
        <div className={BodyFourthcss.container}>
            <div className={BodyFourthcss.leftpos}>
                <h2 className={BodyFourthcss.leftpostitre}> Maximize Your Job Opportunities With Our Easy-to-Use Cover Letter Template </h2>
                <p>
                Write an amazing and professional cover lettre with our cover lettre maker in minutes rather then hours  . 
                </p>
                <button className={BodyFourthcss.btn}> <Link to="/CoverLettre">Create cover lettre</Link> </button>
            </div>
            <div className={BodyFourthcss['rightpos']}>
            <img src='image/Group 1674.png'  alt='cover lettre'></img> 
            </div>
            

        </div>
    )

} 
export default BodyFourth;