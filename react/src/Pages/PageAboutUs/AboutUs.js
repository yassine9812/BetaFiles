import React from "react";
import styles from "../PageAboutUs/AboutUs.module.css";
import {useNavigate } from 'react-router-dom';
import Footer from "../../Footer/Footer.js";
import firstImg from "../PageAboutUs/Group1640.png";
import secondImg from "./Character-holding-tablet-pointing-pie-chart 1.png";
import thirdImg from "./5264881.png";
import fourthImg from "../PageAboutUs/8778112.png";
import fifthImg from "../PageAboutUs/Component 6-27.png";
import sixthImg from "../PageAboutUs/Component 6-28.png";
import seventhImg from "../PageAboutUs/Component 6-29.png";
import finalImg from "../PageAboutUs/about-dec-v2.png";


function AboutUs() {
    let navigate = useNavigate();
    return(
        <div className={styles.Container}>
            <div className={styles.Header}>
            <div className={styles.textBox}>
                <h2>
                Who are we?
                </h2>
                <p>
                Your resume is one of your most important career tools. But many professionals have no idea where to start, what to include, and what to leave off of their resumes. That’s where Karriery comes in. We can carefully craft your career story to target the job that you want to land. 
                </p>
            </div>
            <img src={firstImg} alt="" />
            </div>

            <div className={styles.Body} >
                <h1>What we do ?</h1>
                <div className={styles.ContainerBody}>
                    <div className={styles.box} >
                        <img src={secondImg} alt="" ></img>
                        <p style={{width:'491px', height:'135px', textAlign:'left', marginTop:'200px', fontSize:'20px' }}  > Help user to creat a professional 
                            and a unique resume and cover 
                            letter</p>
                    </div>
                    <div className={styles.box}>
                    <p style={{width:'491px', height:'135px', textAlign:'left', marginTop:'200px', fontSize:'20px' }}  >Organize all your resume and cover letters in one account, 
                            you can shar it to LinkedIn or send it directly to the company that you apply for </p>
                        <img style={{width:'570px', height:'500px'}} src={thirdImg} alt=""  ></img>
                        
                    </div>
                </div>
            </div>

            <div className={styles.Body1} >
                <div className={styles.ContainerBody1} >
                <div className={styles.textBox2}>
                    <h2>Team</h2>
                    <p> Our team is made up of professional writers across Tunisia 
                        with experience in Human Resources,Recruiting, Career Coaching and job search strategy. 
                        We write resumes that will get past the automated recruiting software used to screen out applicants
                        and stand out to recruiters for all the right reasons.</p>
                </div>
                <img style={{width:'646px'}} src={fourthImg} alt="" />
            </div>
            </div>

            <div className={styles.Body} >
                <h1>What's are our  Features</h1>
                <div className={styles.ContainerBody2}>
                    <div className={styles.box2} >
                        <img  src={fifthImg} alt="" ></img>
                        <p   > Wide range of templates</p>
                    </div>
                    <div className={styles.box2}>
                        <img  src={sixthImg} alt=""  ></img>
                        <p   >User-friendly interface </p>
                    </div>
                    <div className={styles.box2}>
                        <img  src={seventhImg} alt=""  ></img>
                        <p   >Video to share your skills 
                                and competence and what 
                                you can offer in the workplace. </p>
                    </div>
                </div>
            </div>


            <div className={styles.Body} >
                <div className={styles.ContainerBody1} >
                <img style={{marginLeft:'150px',marginRight:'50px', width:'600px'  }} src={finalImg} alt="" ></img>
                    <div className={styles.textBox} >
                <h2 style={{fontSize:'40px'}}>Don't miss much time 
                    and sign up now to take 
                    your career to the next level </h2>
                    <button onClick={  ()=>{navigate("/SignUp")}  } className={styles.btn} > Creat Account </button>
                    </div>
                    
                    </div>
                    

            </div>

            <Footer></Footer>

        </div>
        )
}


export default AboutUs;