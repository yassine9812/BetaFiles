import React from "react";
import styles from "./CanadiantTemplateDesign.module.css";
import {useNavigate } from 'react-router-dom';




function CanadianTemplateDesign (){
    let navigate = useNavigate();


    return (
<div className={styles.resumeContainer}>
            <div className={styles.containerRight}>
                <div className={styles.containerName} >
                    <h2>Your Name</h2>
                </div>
                
                <div className={styles.SummaryContainer}>
                    <h3>Professional Summary</h3>
                    <p>
                    Add a summay ol your most mportant erpabeites, kts nda aperieces. Whie being truthtul and authentic about yourselt, rase sure
                    you also consider the job youre applying for and what the hiring manager
                    is lookeng fot. Lariga your alewlar pitch in thit secton.
                    </p>
                </div>
                <div className={styles.WorkExperienceContainer}>
                    <div className={styles.titleContainer}>
                        <h3>Work Experience</h3>
                        <h4>Job Position Title</h4>
                        <span>Company, MOnth/Year</span>
                    </div> 
                    
                    <ul>
                        <li>
                            <p>
                            Add one sentence descriptions of main job accomplishments or
                            accountabilities -no more than 5 per role.
                            </p>
                        </li>
                        
                        <li>
                            <p>
                            In each, highlight 1-2 relevant skilis/capabilities you used to achieve
                            those accomplishments and what the resuit or impact was. Try to
                            ensure a number/frequency in most statements and quantify the
                            impact wherever possible.
                            </p>

                        </li>

                        <li>
                            <p>
                            Ex: As an experienced sales manager, I motivated a diverse team
                            through positive reinforcement and ongoing communication/feedback
                            to increase our quarter over quarter sales results by 150%.
                            </p>
                        </li>

                        <li>
                            <p>
                            Ex: As an effective communicator, I developed and delivered monthly
                            strategy presentations, aligning over 20 national teams to our annual
                            goals.
                            </p>
                        </li>

                        <li>
                            <p>
                            Ex: As a server, I delivered exceptional customer experiences and was
                            consistently rated 9/10 by customers who filled in our restaurant
                            survey.
                            </p>
                        </li>
                    </ul>
                </div>
               

                <div className={styles.languageContainer}>
                    <h3>Language</h3>
                    <ul style={{marginTop:'-20px'}} >
                        <li style={{marginTop:'-10px'}}>
                            <p>French</p>
                        </li>

                        <li style={{marginTop:'-10px'}}>
                           <p> English </p>
                        </li>

                        <li style={{marginTop:'-10px'}}>
                           <p> Spanish </p>
                        </li>
                    </ul>
                </div>

                
            </div>

            <div className={styles.containerLeft}>
                <div className={styles.contactContainer}>
                    <h3 style={{marginBottom:'-10px'}}>Contact</h3>
                    <div>
                        <p>5555555555</p>
                        <p>youremail@host.com</p>
                        <p>1 Street, City</p>
                        <p>linkedin.com/in/name</p>
                    </div>
                </div>
                <div className={styles.skillsContainer}>
                    <h3 style={{marginBottom:'-10px'}}>Skills</h3>

                    <div className={styles.skillsItemContainer}>
                        <div className={styles.ProfessionalContainer}>
                            <h4 style={{marginBottom:'-5px'}}> Professional </h4>
                            <p>communication</p>
                            <p>Data Insight</p>
                            <p>Building Relationships</p>
                        </div>
                        <div className={styles.TechnicalContainer}>
                            <h4 style={{marginBottom:'-5px'}}> Technical </h4>
                            <p>Microsoft Office</p>
                            <p>Adobe creative Suite</p>
                            <p>Html</p>
                        </div>
                    </div>

                </div>

                <div className={styles.educationContainer}>
                    <h3 style={{marginBottom:'-10px'}}>Education</h3>

                    <div className={styles.educationItemContainer}>
                        <div className={styles.bloc}>
                            <h4 style={{fontSize:'13px',marginBottom:'-10px'}}>Enter Degree/Diploma Here (e.g.
                                BA) in (Subject) </h4>

                            <p>University, City, Province,</p>
                            <span> <p>Month/Year - Month/Year </p></span>
                            <p>Any additional details, e.g. Dean's
                                List, Scholarship Awards</p> 
                        </div>

                        <div className={styles.bloc}>
                            <h4 style={{fontSize:'13px',marginBottom:'-10px'}}>Enter Degree/Diploma Here (e.g.
                                BA) in (Subject) </h4>

                            <p>University, City, Province,</p>
                            <span> <p>Month/Year - Month/Year </p></span>
                            <p>Any additional details, e.g. Dean's
                                List, Scholarship Awards</p>
                        </div>
                    </div>

                </div>

            </div>
            <div>  <button  onClick={  ()=>{navigate("/ResumeBuilder")}  }  className={styles.hoverbtn} >     Choose template </button> </div>
        </div>
    )
}
export default CanadianTemplateDesign;