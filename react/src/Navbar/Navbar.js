import React from 'react';
import { useState } from 'react';
import './NavbarStyle.module.css';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

//import {AppBar,Toolbar,IconButton} from "@mui/material";

function Navbar() {
    const[show, setShow] = useState(true)
    const controleNavbar = () =>{
        if (window.screenY>100){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', controleNavbar)
        return () => {
            window.removeEventListener('scroll',controleNavbar)
        }
    }, [])
   

    return(

            <nav  >
                        <Link to='/'><img  style={{marginLeft:'200px',marginTop:'20px'}} src='image/logo/logo.png' width="200px" alt='logo' /></Link>
                    
                    
                        <ul >
                            <li> <Link to="/" >Home</Link> </li>
                            <li> <Link to="/Resume">Resume</Link></li>
                            <li> <Link to="/CoverLettre">Cover Lettre</Link></li>
                            <li> <Link to="/AboutUs">About us</Link></li>
                            <li> <button className='btn' type="submit"> <Link to="/Login"> My Account</Link> </button></li>
                        </ul>    
            </nav>
        
        
    )
}
export default Navbar;