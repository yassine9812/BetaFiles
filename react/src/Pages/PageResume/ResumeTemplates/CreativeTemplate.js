import React from "react";
import TemplateDesign from "./TemplateDesign";
import galleryTemplate from './galleryTemplate.module.css';
function CreativeTemplate(){
    return(
        <div className={galleryTemplate.container} >
        <div className={galleryTemplate.template}>
          <TemplateDesign/>
 
        </div>
        <div className={galleryTemplate.template}>
           <TemplateDesign/>
        </div>
        <div className={galleryTemplate.template}>
          <TemplateDesign/>
        </div>  
    </div>
    )
}
export default CreativeTemplate;