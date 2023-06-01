import React, { useState } from 'react';
import './TemplateListStyle.css';
import ResumeTemplateList from './ResumeTemplateList';
import CoverLettreTemplateList from './CoverLettreTemplateList';

function TemplateList() {
  return(
    <div >
        <ResumeTemplateList/>
        <CoverLettreTemplateList/>
    </div>
  )
}

export default TemplateList;