import React from 'react';
import Styles from "./Previewstyle.module.css";

const Preview = ({watch}) => {
  return (
    <div className={Styles.Container}>
        <div className={Styles.ContainerLeft} >
          <div className={Styles.resumeHeader}>

         
              <div className={Styles.Name}>
                <div style={{marginRight:'10px',marginLeft:'15px' }} >{watch("firstName")}</div>
                <div style={{marginRight:'10px'}}   >{watch("lastName")}</div>
                
              </div>
              <div style={{marginRight:'10px',marginLeft:'15px',fontStyle:'italic',fontSize:'12px' }}  > {watch("JobTitle")}  </div>
          </div>
          
          <div className={Styles.professionalSummary} >
            <h2>Professional Summary</h2>
            <div className={Styles.textBox} style={{fontSize:'10px',textAlign:'left' }}  >  {watch("Summary")} </div>
          </div>
          <div className={Styles.professionalSummary} >
            <h2>Employment History</h2>
            <div style={{fontSize:'10px',textAlign:'left'}}  >{watch("Employment")}</div>
          </div>
        </div>
        <div className={Styles.ContainerRight} >
          <div className={Styles.Contact}>
            <h3>Contact</h3>
            <div style={{fontSize:'10px'}}  >{watch("Mail")}</div>
            <div style={{fontSize:'10px'}} >{watch("Phone")}</div>
            <div style={{fontSize:'10px'}} >{watch("Country")}</div>
            <div style={{fontSize:'10px'}} >{watch("City")}</div> 
          </div>
          <div className={Styles.education} >
                <h3>Education</h3>
              <div style={{fontSize:'10px'}} >  {watch("Education")}  </div>
          </div>

          <div className={Styles.Skills} >
                <h3>Skills</h3>
              <div style={{fontSize:'10px'}} >  {watch("Skills")}  </div>
          </div>
        



        </div>

        
    </div>
  )
}

export default Preview 