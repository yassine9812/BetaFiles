import React from "react";
import {Link } from 'react-router-dom';
import Headercss  from './Header.module.css';
import pic from './Intersection 1.png'
function Header (){
    return(
        <div className={Headercss.container}>
            <div className={Headercss.leftpos}>
            <h1>WE LEAD YOUR PROFFESIONAL PATH</h1>
            <div className={Headercss.buttonpos}>
            <button className={Headercss.btn}> <Link to="/Resume"><p>Create resume</p></Link></button>
            </div>
            
            </div>
            <div className={Headercss.rightpos}>
                <img src={pic} style={{width:'1200px'}} alt="illustartion1" ></img>
            </div>
        </div>
    )
}
export default Header;