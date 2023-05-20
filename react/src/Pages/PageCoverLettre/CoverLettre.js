import React from "react";
import CoverLettresTemplates from "./CoverLettersTemplates";
import Footer from "../../Footer/Footer.js";
import Style from "./CoverLettre.module.css";
import style from "../PageResume/Resumestyle.module.css";
import pic from "../PageCoverLettre/93.1.png" ;
import step1 from "../../4195798.png";
import step2 from "../../res150.png";
import step3 from "../../illustartion2.png";
function CoverLettre() {
    return(
        <div className={Style.container} >
            <h2 className={Style.titre} > Stand Out with our professional cover letter template </h2>
            <div className={Style.templates} >
            <CoverLettresTemplates/>
            </div>
            <div style={{width:'100%', display:'flex', justifyContent:'center' }} >  
                <div className={Style.section} >  
                    <div className={Style.text} >
                        <h2>How to Choose your Template and Make a Stunning Resume </h2>
                        
                        <p> 1.   consider the industry and choose a template that aligns with the job you applying for</p>
                        <p>  2.  choose a template that reflects your personal brand and professional style</p>
                        <p>  3.  Keep it simple and select which sections are most important for your career</p>
                        <p>  4.  Share your resume with others and get their feedback to identify any areas for improvement and ensure
                            that your resume is effective and impactful ! </p>
                        <button className={Style.btn} > select template </button>
                    </div>
                    <img src={pic} alt="" ></img>

                    
                </div>
                
                </div>

                <div className={style.container}>
            <div>
                <h2>What do you get out of it?</h2>
                <p>Here is what our resume builder can provide.</p>
            </div>
            <div className={style.box}>
                <div className={style.text}>
               <h2> <span>1.</span>Professional templates for every job </h2>
                <p>
                Professional job templates for every job. There are 10 completely adjustable layouts included with our resume builder. Depending on your industry, degree of seniority, and the sort of organization you're applying to, you'll receive advise on which one to choose.
                </p>
                </div>
                <div>
                <img src={step1} alt="step1" ></img>
                </div>
                
            </div>

            <div className={style.box}>
                <div>
                    <img src={step2} alt="step2" ></img>
                </div>

               <div className={style.text2}>
               <h2>  <span>2.</span>  Match your cover lettre with your resume</h2>
                <p>
                You can make a cover letter to go with the layout of your resume. Your professionalism and attention to detail will be valued by recruiters.  
                </p>
                </div>
                
            </div>

            <div className={style.box}>
                <div className={style.text}>
                    <h2>  <span>3.</span>  Match your cover lettre with your resume</h2>
                    <p>
                    You can make a cover letter to go with the layout of your resume. Your professionalism and attention to detail will be valued by recruiters.    
                    </p>
                </div>
              <div>
                <img src={step3} alt="step3" ></img>
              </div>
            </div>
        </div>
        <Footer/>
        </div>
        )
}


export default CoverLettre;