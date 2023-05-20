import React from "react";
import {Link } from 'react-router-dom';
import Headercss  from './Header.module.css';
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
                <img src="image/illustration 1.png" alt="illustartion1" ></img>
            </div>
        </div>
    )
}
export default Header;