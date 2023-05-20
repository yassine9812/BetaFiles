import React from "react";
import styles from "./CoverLetterTemplate2.module.css";
import { PhoneFilled,MailFilled,GlobalOutlined } from '@ant-design/icons';
import {useNavigate } from 'react-router-dom';
function CoverLettreTemplate2() {
    let navigate = useNavigate();
        return(
            <div className={styles.container} >
                    <div className={styles.HeaderContainer} >
                    
                        <div className={styles.PersonalInfo} > 
                            <h2> OLIVIA  WILSON  </h2> 
                            
                        </div>

                        <div className={styles.Contact} >
                            <div className={styles.info} > <PhoneFilled  style={{marginTop:'10px', marginRight:'5px'}} /> <p style={{fontSize:'10px',  color:'GrayText'}} >123-456-7890</p> </div>
                            <div className={styles.info}> <MailFilled style={{marginTop:'10px', marginRight:'5px'}} /> <p style={{fontSize:'10px',  color:'GrayText'}} >hello@reallygreatsite.com</p> </div>
                            <div className={styles.info}> <GlobalOutlined style={{marginTop:'10px', marginRight:'5px'}} /> <p style={{fontSize:'10px',  color:'GrayText'}} >www.reallygreatsite.com</p> </div>
                        </div>
                        
                    </div>

                    <div className={styles.personalPragraphe}>
                         
                        <p style={{fontSize:'10px'}} >
                            A cover letter is a three- ar four-paragraph document to an employer explaining your interest in a specific job. It's a one-page letter that is usually attached to your resume. This letter should also highlight your fitness for the advertised role.
                            Writing a cover letter as a mid-career professional is a bit different But first, start with how you found out about the career opening and why ycu l re interested in the job position. Be specific: use the correct names and titles.
                            As you write this letter, use clear and readable words. You want to come across as professional and approachable, but not overly formal.
                            Next, provide examples of why you're the right person for thejob.
                            Finally, provide your contact information and how you prefer to be reached. Offer to meet with the reader at their earliest convenience. Thank them for their time and attention, and let them know that you look forward ta hearing from them soon.
                            Before you send your cover letter, read your duR out loud to quickly spot errors and wordy sentences. You can also ask afriend to review your cover letter. Good luck on yourjab search.
                            
                        </p>
                        <div>
                            <p style={{fontSize:'10px',marginTop:'-5px'}} >
                            With best regards,
                            <h2 style={{fontSize:'12px',marginTop:'5px' }} > OLIVIA  WILSON </h2>
                            </p>
                        </div>
                    </div>
                    <div>  
                    <button  onClick={  ()=>{navigate("/CoverLetterBuilder2")}  }  className={styles.hoverbtn} >     Choose template </button> 
                    </div>
            </div>
        )   
}
export default CoverLettreTemplate2;