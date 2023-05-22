import React from "react";
import styles from "./ResumeTemplatestyle.module.css";
import Profileimg from"../../../photo.png";
import {useNavigate } from 'react-router-dom';
function TemplateDesign (){
  let navigate = useNavigate();
    return(
        <section className={styles.resumeSecition}>
    <div className={styles.resume}>
      
      <div className={styles['containerLeft']} >
        <div className={styles['sectionPersonalInfo']}>
          <img className={styles['corpimg']} src={Profileimg} alt='' ></img>
          <h2>John Doe</h2>
          <h3>Full-stack Developer</h3>
            <div className={styles['contact']}>
              <p><span>Email:</span> johndoe@example.com</p>
              <p><span>Phone:</span>   (555) 555-5555</p>
            </div>
        </div>

        <div className={styles['sectionPersonalInfo']}>
            <h4 className={styles['sectionHeadingPersonalInfo']}>Skills:</h4>
            <ul>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
        </div>

        <div className={styles['sectionEducation']} >
      <h4 className={styles['sectionHeadingEducation']}>Education:</h4>
      
      <p> Bachelor's degree in Computer Science, University of California, Los Angeles (UCLA)</p>
      
      </div>

      </div>
      
      
      <div className={styles['containerRight']} >
      <div className={styles['sectionSummary']}>
        <h4 className={styles['sectionHeadingSummary']} >Summary:</h4>
      
        <p>
          A skilled full-stack developer with over 5 years of experience in building web applications using ReactJS, NodeJS, and MongoDB. 
          Passionate about solving complex technical problems and delivering high-quality software products.
        </p>
      </div>

      
      
      <div className={styles['sectionExperience']}>
      <h4 className={styles['sectionHeadingExperience']}>Experience:</h4>

      <div className={styles['block']} > 
      <h5>Full-stack Developer - XYZ Company (2018 - present)</h5>
      
         <p>Developed and maintained web applications using ReactJS, NodeJS, and MongoDB.</p>
         <p>Implemented new features and functionalities based on client requirements.</p>
         <p>Collaborated with team members to identify and resolve technical issues.</p>
      
      </div>
      
      
      <div className={styles['block']}>
      <h5>Front-end Developer - ABC Company (2015 - 2018)</h5>
      
        <p>Developed user interfaces using ReactJS, HTML, and CSS.</p>
        <p>Collaborated with designers and back-end developers to implement new features.</p>
        <p>Optimized web applications for better performance and user experience.</p>
      
      </div>
      
    <div className={styles['block']}>
    <h5>Front-end Developer - ABC Company (2015 - 2018)</h5>
        
            <p>Developed user interfaces using ReactJS, HTML, and CSS.</p>
            <p>Collaborated with designers and back-end developers to implement new features.</p>
            <p>Optimized web applications for better performance and user experience.</p>
        
    </div>
      
      </div>
      </div>
      
      
      
      
    </div>
    <div>  <button onClick={  ()=>{navigate("/ResumeBuilder")}  } className={styles.hoverbtn} >  Choose template </button> </div>
    </section>
    )
}
export default TemplateDesign;