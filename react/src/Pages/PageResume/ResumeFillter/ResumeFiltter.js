import CreativeTemplate from '../ResumeTemplates/CreativeTemplate';
import ProfessionalTemplate from '../ResumeTemplates/ProfessionalTemplate';
import CanadianTemplate from '../ResumeTemplates/CanadianTemplate';
import Resume from "../ResumeTemplates/ResumeTemplate";
import stylesFilter from "../ResumeFillter/ResumeFillterstyle.module.css";
import React, { useState } from 'react';
import icon1 from "./icon/select.png";
import icon2 from "./icon/creativity.png";
import icon3 from "./icon/business.png";
import icon4 from "./icon/canada.png";

const ResumeFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState('All Template');
  
    const handleFilterClick = (filter) => {
      setSelectedFilter(filter);
    };
  
    let selectedTemplate;
    switch (selectedFilter) {
      case "Creative":
        selectedTemplate = <CreativeTemplate/>;
        break;
      case "Professional":
        selectedTemplate = <ProfessionalTemplate></ProfessionalTemplate>;
        break;
      case "Canadian":
        selectedTemplate = <CanadianTemplate/>;
        break;
      default:
        selectedTemplate = <Resume />;
    }
  
    return (
      <div className={stylesFilter.container}>
        <div className={stylesFilter['filters']}>
          
          <div className={stylesFilter['filter']}
              {...selectedFilter === "All Template" ? stylesFilter.active : ""}
            onClick={() => handleFilterClick("All Template")}>
                <button><span>  <img src={icon1} alt='icon' style={{width:'30px',height:'30px'}} ></img> <p>All Template</p></span></button>
          </div>
          <div
            className={stylesFilter.filter} 
            {...selectedFilter === "Creative" ? stylesFilter.active : ""}
            onClick={() => handleFilterClick("Creative")}
          >
            <button> <span>  <img src={icon2} alt='icon' style={{width:'30px',height:'30px'}} ></img> <p>Creative </p> </span></button>
          </div>
          <div
            className={stylesFilter.filter} 
            {...selectedFilter === "Professional" ? stylesFilter.active : ""}
            onClick={() => handleFilterClick("Professional")}>
            <button> <span> <img src={icon3} alt='icon' style={{width:'30px',height:'30px'}} ></img> <p> Professional </p> </span></button>
          </div>
          <div
            className={stylesFilter.filter} 
            {...selectedFilter === "Canadian" ? stylesFilter.active : ""}
            onClick={() => handleFilterClick("Canadian")}>
           <button> <span>  <img src={icon4} alt='icon' style={{width:'30px',height:'30px'}} ></img> <p> Canadian </p> </span></button> 
          </div>
        </div>
  
        <div className={stylesFilter.resume}>
          {selectedTemplate}
        </div>
      </div>
    );
  }

export default ResumeFilter;
