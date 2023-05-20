import React from 'react';
import galleryTemplate from './galleryTemplate.module.css';
import TemplateDesign from './TemplateDesign';
import ProfessionalTemplate from './ProfessionalTemplate';
import CanadianTemplateDesign from './CanadiantTemplateDesign';
import ProfessionalTemplateDesign from './ProfessionalTemplateDesign';


const ResumeTemplate = () => {
  return (
    <section>

    
    <div className={galleryTemplate.container} >
      <div className={galleryTemplate.template}>
        <TemplateDesign>
        </TemplateDesign> 
      </div>
      <div className={galleryTemplate.template}>
      <ProfessionalTemplateDesign/>
      </div>
      <div className={galleryTemplate.template}>
        <CanadianTemplateDesign/> 
      </div>  
  </div>
  <div className={galleryTemplate.container} >
      <div className={galleryTemplate.template}>
        <TemplateDesign>
        </TemplateDesign> 
      </div>
      <div className={galleryTemplate.template}>
        <ProfessionalTemplateDesign/> 
      </div>
      <div className={galleryTemplate.template}>
        <CanadianTemplateDesign/> 
      </div>  
  </div>

  </section>
  );
}

export default ResumeTemplate;