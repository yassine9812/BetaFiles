import React from "react";
import Bodyfirstcss from "./BodyFirst.module.css";
import {Link } from 'react-router-dom';
function BodyFirst(){
    return(
        <div className={Bodyfirstcss.container}>
            <div>
            <h2 className={Bodyfirstcss.pos}> Elevate your job Application 
            with a Professional Resume</h2>
            <img src="image/Group 1675.png" alt="CVcollection"/>

            <p className={Bodyfirstcss.textpos}>Engaging employers and recruiters with one of our Elegant models. 
            
               Professionally-designed resume templates. Download to word or PDF. 
            </p>
            <button className={Bodyfirstcss.btn}> <Link to="/Resume">Select Template</Link></button>
            </div>
        </div>
    )
}
export default BodyFirst;