import React from "react";
import Footercss from './Footer.module.css';
import {Link} from 'react-router-dom';
const Footer =() => {
return(
    <div className={Footercss.container}>
        <div className={Footercss.imagePos}>
        <div className={Footercss.log}>
            <img src="image/logo/logo k.png" alt="logo" ></img>
            </div>

            <div className={Footercss.socialMedia} >
                
            <svg id="Component_46_1" data-name="Component 46 – 1" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                        <g id="facebook-logo_1_" data-name="facebook-logo (1)" transform="translate(-111.619 8)">
                            <path id="Path_63" data-name="Path 63" d="M132.441,7.208v-1.9a4.176,4.176,0,0,1,.04-.661,1.283,1.283,0,0,1,.18-.461.736.736,0,0,1,.454-.314,3.231,3.231,0,0,1,.835-.087h1.9V0h-3.03a4.932,4.932,0,0,0-3.778,1.248,5.257,5.257,0,0,0-1.148,3.678V7.208h-2.27V11h2.269V22h4.552V11h3.03l.4-3.791Z" transform="translate(0)" fill="#fff"/>
                        </g>
                        <g id="Ellipse_16" data-name="Ellipse 16" fill="none" stroke="#9c9ca8" stroke-width="1">
                            <circle cx="19" cy="19" r="19" stroke="none"/>
                            <circle cx="19" cy="19" r="18.5" fill="none"/>
                        </g>
                    </svg>
 
                    <svg id="Component_47_1" data-name="Component 47 – 1" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                        <path id="twitter_1_" data-name="twitter (1)" d="M21.169,50.036a9.048,9.048,0,0,1-2.5.685,4.315,4.315,0,0,0,1.909-2.4,8.673,8.673,0,0,1-2.752,1.05,4.339,4.339,0,0,0-7.507,2.968,4.468,4.468,0,0,0,.1.99,12.284,12.284,0,0,1-8.945-4.539,4.341,4.341,0,0,0,1.334,5.8,4.286,4.286,0,0,1-1.961-.535V54.1a4.36,4.36,0,0,0,3.477,4.264,4.331,4.331,0,0,1-1.138.143,3.837,3.837,0,0,1-.822-.074,4.381,4.381,0,0,0,4.055,3.023,8.72,8.72,0,0,1-5.381,1.851A8.128,8.128,0,0,1,0,63.252,12.218,12.218,0,0,0,6.657,65.2,12.267,12.267,0,0,0,19.009,52.85c0-.192-.007-.377-.016-.561A8.658,8.658,0,0,0,21.169,50.036Z" transform="translate(8 -38)" fill="#fff"/>
                            <g id="Ellipse_16" data-name="Ellipse 16" fill="none" stroke="#9c9ca8" stroke-width="1">
                                <circle cx="19" cy="19" r="19" stroke="none"/>
                                <circle cx="19" cy="19" r="18.5" fill="none"/>
                            </g>
                    </svg>
                    <svg id="Component_48_1" data-name="Component 48 – 1" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                        <g id="linkedin-logo_1_" data-name="linkedin-logo (1)" transform="translate(11 0.442)">
                            <path id="LinkedIn" d="M16.968,20.1v6.654H13.331V20.548c0-1.56-.526-2.624-1.842-2.624a2.006,2.006,0,0,0-1.866,1.411,2.789,2.789,0,0,0-.121.941v6.481H5.864s.049-10.515,0-11.6H9.5V16.8c-.007.012-.017.026-.024.037H9.5V16.8a3.586,3.586,0,0,1,3.278-1.918C15.173,14.879,16.968,16.538,16.968,20.1ZM2.059,9.558a1.949,1.949,0,0,0-2.059,2,1.938,1.938,0,0,0,2.01,2.006h.024a1.95,1.95,0,0,0,2.058-2.006A1.942,1.942,0,0,0,2.059,9.558ZM.216,26.757H3.853v-11.6H.216Z" transform="translate(0)" fill="#fff"/>
                        </g>
                        <g id="Ellipse_17" data-name="Ellipse 17" fill="none" stroke="#9c9ca8" stroke-width="1">
                            <circle cx="19" cy="19" r="19" stroke="none"/>
                            <circle cx="19" cy="19" r="18.5" fill="none"/>
                        </g>
                    </svg>
                    </div>
                    </div>


            <div className={Footercss.links}>
                <ul>
                    <li className={Footercss.titre}>Links</li>
                        <li> <Link to="/" >Home</Link> </li>
                        <li> <Link to="/Resume">Resume</Link></li>
                        <li> <Link to="/CoverLettre">Cover Lettre</Link></li>
                        <li> <Link to="/AboutUs">About us</Link></li>
                </ul>

            </div>

            <div className={Footercss.support} >
                <ul>
                    <li className={Footercss.titre}> Support</li>
                    <li>FAQ</li>
                    <li>Features</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className={Footercss.contact} >
                <ul>
                    <li className={Footercss.titre}> Our Contacts </li>
                    <li > +216 96989971</li>
                    <li>karriery@gmail.com</li>
                    <li>Manouba</li>
                </ul>
            </div>



        
    </div>
)
}
export default Footer;