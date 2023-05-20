import React from "react";
import CanadianTemplateDesign from "../ResumeTemplates/CanadiantTemplateDesign";
import galleryTemplate from './galleryTemplate.module.css';
function CanadianTemplate(){
    return(
        <div className={galleryTemplate.container} >
        <div className={galleryTemplate.template}>
          <CanadianTemplateDesign/>
        </div>
        <div className={galleryTemplate.template}>
           <CanadianTemplateDesign/>
        </div>
        <div className={galleryTemplate.template}>
          <CanadianTemplateDesign/>
        </div>  
    </div>
    )
}
export default CanadianTemplate;