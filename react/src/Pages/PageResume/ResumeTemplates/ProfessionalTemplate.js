import React from "react";
import ProfessionalTemplateDesign from "./ProfessionalTemplateDesign";
import galleryTemplate from './galleryTemplate.module.css';
function ProfessionalTemplate(){
    return(
        <div className={galleryTemplate.container} >
        <div className={galleryTemplate.template}>
          <ProfessionalTemplateDesign/>
          
              
        </div>
        <div className={galleryTemplate.template}>
           <ProfessionalTemplateDesign/>
           
        </div>
        <div className={galleryTemplate.template}>
          <ProfessionalTemplateDesign/>
         
        </div>  
    </div>
        
    )
}
export default ProfessionalTemplate;