import React from "react";
import CoverLettreTemplate from "./CoverLetterTemplate";
import CoverLettreTemplate2 from "./CoverLetterTemplate2";
import CoverLettreTemplate3 from "./CoverLetterTemplate3";
import galleryTemplate from '../PageResume/ResumeTemplates/galleryTemplate.module.css';
function CoverLettresTemplates() {
        return(
            <>
            <div className={galleryTemplate.container} >
                <div style={{width:'auto', padding:'5px'}} >
                <CoverLettreTemplate/>
                </div>
                <div>
                <CoverLettreTemplate2/>
                </div>
                <div>
                <CoverLettreTemplate3/>
                </div>                
            </div>
            <div  className={galleryTemplate.container} >
            <div style={{width:'auto', padding:'5px'}} >
            <CoverLettreTemplate3/>
            </div>
            <div>
            <CoverLettreTemplate/>
            </div>
            <div>
            <CoverLettreTemplate2/>
            </div>                
        </div>
        </>
        )   
}
export default CoverLettresTemplates;