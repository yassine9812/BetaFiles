import React from 'react'
import Styles from "./PreviewCL2.module.css";
import { PhoneFilled,MailFilled,GlobalOutlined } from '@ant-design/icons';
const Preview = ({watch}) => {
  return (
    <div className={Styles.Container}>
        <div className={Styles.HeaderContainer}>         
              
                <div className={Styles.PersonalInfo} >
                <h2 style={{fontSize:'35px'}} > {watch("firstName")} {watch("lastName")}  </h2>
                <h3 style={{marginTop:'-20px',fontWeight:'normal',width:'400px',fontSize:'20px'}}  > {watch("JobTitle")} </h3>
                
                </div>
                <div className={Styles.Contact}> 

                <div className={Styles.info} > <p style={{fontSize:'10px',color:'black'}}>{watch("Phone")} </p>  
                    <PhoneFilled  style={{marginTop:'-10px', marginLeft:'5px'}} /> 
                </div>
                <div className={Styles.info} > <p style={{fontSize:'10px',color:'black'}}>{watch("Mail")} </p>  
                    <MailFilled  style={{marginTop:'-10px', marginLeft:'5px'}} /> 
                </div>
                <div className={Styles.info} > <p style={{fontSize:'10px',color:'black'}}>{watch("Site")} </p>  
                    <GlobalOutlined  style={{marginTop:'-10px', marginLeft:'5px'}} /> 
                </div>
              </div>
        </div> 
        
          
          <div className={Styles.personalPragraphe} >
          <div>
          <h3  style={{fontSize:'15px'}} >  <span> TO  <br/>  </span> {watch("HiringManagerName")}  </h3>
                <p  style={{fontSize:'12px' , color:'black', marginLeft:'250px',marginTop:'-50px' }} >  {watch("Adresse")} </p>
            <p style={{width:'100px', marginLeft:'20px', marginRight:'20px', marginTop:'50px'}} >
              {watch('Summary')}
            </p>
          </div>
          <div style={{marginLeft:'20px',marginTop:'20px'}}>
              <p style={{fontSize:'10px',marginTop:'-5px',color:'black'}} >
               With best regards,
               <h2 style={{fontSize:'12px',marginTop:'5px' }} > {watch("firstName")} {watch("lastName")} </h2>
              </p>
               </div>
          </div>
        

        

        
    </div>
  )
}

export default Preview;