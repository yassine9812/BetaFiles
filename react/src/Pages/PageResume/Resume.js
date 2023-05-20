import React from "react";
import style from "../PageResume/Resumestyle.module.css";
import ResmeFilter from "../PageResume/ResumeFillter/ResumeFiltter";
import Footer from "../../Footer/Footer.js";
import step1 from "../../4195798.png";
import step2 from "../../res150.png";
import step3 from "../../illustartion2.png";
function Resume(){
    return(
       <div style={{display:'flex',flexDirection:'column'}}  >
        <div style={{marginTop:'200px', fontSize:'30px', width:'50%',alignSelf:'center' }} >
            <h1>Build Your Dream Career with a Winning Resume Template</h1>
        </div>
        
        <ResmeFilter/>
        
        
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
export default Resume;