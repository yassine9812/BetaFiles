import React from "react";
import styles from "./CoverLetterTemplate.module.css";
import { PhoneFilled,MailFilled,GlobalOutlined } from '@ant-design/icons';
import {useNavigate } from 'react-router-dom';
function CoverLettreTemplate() {
    let navigate = useNavigate();
        return(
            <div className={styles.container} >
                    <div className={styles.HeaderContainer} >
                    <div className={styles.Contact} >
                                <h3 style={{marginRight:'20px'}} >CONTACT</h3>
                            <div className={styles.info} >  <p style={{fontSize:'15px'}} >123-456-7890</p> <PhoneFilled  style={{marginTop:'18px', marginLeft:'5px'}} /></div>
                            <div className={styles.info}>  <p style={{fontSize:'15px'}} >hello@reallygreatsite.com</p> <MailFilled style={{marginTop:'18px', marginLeft:'5px'}} /></div>
                            <div className={styles.info}>  <p style={{fontSize:'15px'}} >www.reallygreatsite.com</p> <GlobalOutlined style={{marginTop:'18px', marginLeft:'5px'}} /></div>
                        </div>
                        <div className={styles.PersonalInfo} > 
                            <h2> Avery Davis </h2>
                            <h3 style={{marginTop:'-20px',fontWeight:'normal'}} >  Marketing coordinator </h3>
                            <div className={styles.PersonalInfo} >
                            <h3 style={{fontSize:'15px'}} > <span style={{textAlign:'start',marginLeft:'-73px'}} > TO <br/> </span> AARON LOEB</h3>
                            <p style={{fontSize:'12px'}} ><span style={{textAlign:'start',marginLeft:'-73px'}} >Rimberio Inc<br/></span>
                             123 Anywhere St.,Any City </p>
                            </div>

                        </div>
                        
                    </div>

                    <div className={styles.personalPragraphe}>
                        <h3>TO WHOM IT MAY CONCERN</h3>
                        <p style={{fontSize:'10px'}} >
                            A cover letter is a three- ar four-paragraph document to an employer explaining your interest in a specific job. It's a one-page letter that is usually attached to your resume. This letter should also highlight your fitness for the advertised role.
                            Writing a cover letter as a mid-career professional is a bit different But first, start with how you found out about the career opening and why ycu l re interested in the job position. Be specific: use the correct names and titles.
                            As you write this letter, use clear and readable words. You want to come across as professional and approachable, but not overly formal.
                            Next, provide examples of why you're the right person for thejob.
                            <ul>
                                <li> 	Don't hesitate to use bullet points and include numbers that showcase Your achievements.</li>
                                <li> 	Rather than simply describe what you've done in previous jobs, show the recruiter or hlrlng manager what you can bring to the role.</li>
                                <li>Express your passion and excitement ta be part of the company and the team.</li>
                            </ul>
                            Finally, provide your contact information and how you prefer to be reached. Offer to meet with the reader at their earliest convenience. Thank them for their time and attention, and let them know that you look forward ta hearing from them soon.
                            Before you send your cover letter, read your duR out loud to quickly spot errors and wordy sentences. You can also ask afriend to review your cover letter. Good luck on yourjab search.
                            
                        </p>
                        <div>
                            <p style={{fontSize:'10px',marginTop:'-5px'}} >
                            With best regards,
                            <h2 style={{fontSize:'12px',marginTop:'5px' }} > Avery Davis </h2>
                            </p>
                        </div>
                    </div>
                    <div>  
                    <button  onClick={  ()=>{navigate("/CoverLetterBuilder")}  }   className={styles.hoverbtn} >     Choose template </button> 
                    </div>
            </div>
        )   
}
export default CoverLettreTemplate;