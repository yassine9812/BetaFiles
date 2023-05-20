import React from "react";
import styles from "./ProfessionalTemplatestyle.module.css";
import { PhoneFilled,MailFilled,GlobalOutlined,HomeFilled  } from '@ant-design/icons';
import {useNavigate } from 'react-router-dom';
function ProfessionalTemplateDesign(){
    let navigate = useNavigate();
    return(
<div className={styles.containerResume} >
            <div className={styles.sectionTitle}>
                <h2>Alexander Aronowitz</h2>
                <h3>Real Estate Sales Agent</h3>
            </div>
            <div className={styles.sectionBox} >
                    <h4>Summary</h4>
                    <div className={styles.Summarybox}>
                    <p>
                    A UI/UX designer is a professional within the graphic design and
                    graphic arts industry who assembles together images,
                    typography, or motion graphics to create a piece of design.
                    </p>
                    </div>
                     
                </div>
                <div className={styles.sectionBox} >
                    <div className={styles.titleSection}>
                    <h4>Experieence</h4>
                    </div>
                
                <div className={styles.ExperienceBox}>
                    <div className={styles.Row}>
                        <div className={styles.box}>
                            <h5 style={{marginBottom: '-10px'}} >  Real Estate Agent</h5>
                             <p>  Arrowai Properties </p>
                            <span>May 2020 to present</span>
                        </div>
                        <div className={styles.box}>
                            <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut
                            enim ad minim veniam.

                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.Row}>
                        <div className={styles.box}>
                            <h5>Office Assistant</h5>
                            <p>Arrowai Properties</p>
                            <span>Apr 2016 to 2019</span>
                        </div>
                        <div className={styles.box}>
                            <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
                <div className={styles.sectionBox} >
                    <h4>Education</h4>
                    <div className={styles.EducationBox}>
                    
                <div  className={styles.contentBox}>
                    <div className={styles.col}>
                        <div className={styles.box}>
                            <h5>Fauget University</h5>
                            <span>Apr 2016 to May 2019</span>
                        </div>
                        <div clasName={styles.box}>
                            <h5>Fauget High School</h5>
                            <span>Apr 2016 to May 2019</span>
                        </div>
                    </div>
                   <div className={styles.col}>
                        <div className={styles.box}>
                            <h5>Bachelor of Economics</h5>
                            <span>3.8/4 GPA</span>
                        </div>
                        <div className={styles.box}>
                            <h5>High School Diploma</h5>
                            <span>Graduate</span>
                        </div>
                   </div>
                   </div>
                </div>
                </div>
                <div className={styles.sectionBox}>
                    <h4>Skills</h4>
                    <div className={styles.SkillsBox}>
                    <div className={styles.box} >
                        <p>
                        Real estate, Office Procedures, Leadership, Sales,
                        Customer Care, Multi-tasking, 10-key by touch
                        </p>
                    </div>
                    </div>
                </div>

                <div className={styles.sectionBox}>
                    <h4>Contact</h4>
                    <div className={styles.ConatactBox}>
                        <div className={styles.box1}>
                            <div className={styles.conatct} >
                                <PhoneFilled style={{ fontSize: '15px', color: 'rgb(95, 25, 217)' ,marginRight:'5px',marginTop:'8px'}} />
                                <p> +123-456-7890</p>
                            </div>
                        
                       
                            <div className={styles.conatct} >
                                <MailFilled style={{ fontSize: '15px', color: 'rgb(95, 25, 217)' ,marginRight:'5px',marginTop:'8px'}} />
                                <div >
                               <p> Hello@reallygreatsite.com </p>
                                </div>
                                
                            </div>
                        </div>
                        <div >
                        <div className={styles.box1}>
                            <div className={styles.conatct}>
                                <GlobalOutlined style={{ fontSize: '15px', color: 'rgb(95, 25, 217)',marginRight:'5px',marginTop:'8px' }} />
                               <p> www.reallygreatesite.com </p>
                                
                            </div>
                        </div>
                        <div>
                            <div className={styles.conatct}>
                                <HomeFilled style={{ fontSize: '15px', color: 'rgb(95, 25, 217)' ,marginRight:'5px', marginTop:'8px'}} />
                                <p>123 Anywhere St..,Any City</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <span>  <button onClick={  ()=>{navigate("/ResumeBuilder")}  } >   Choose template </button> </span>
            </div>
    )
}
export default ProfessionalTemplateDesign; 