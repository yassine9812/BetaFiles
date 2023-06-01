import React, { useState } from 'react';
import "./cardOffer.css";

const JobOffer = (props) => {
  const [jobTitle, setJobTitle] = useState(props.JobTitle);
  const [nomEntreprise, setNomEntreprise] = useState(props.nomEntreprise);
  const [description, setDescription] = useState(props.Description);
  const [dateD, setDateD] = useState(props.dateD);
  const [dateF, setDateF] = useState(props.dateF);
  const [salair, setSalair] = useState(props.salair);
  const [contactMail, setContactMail] = useState(props.ContactMail);

  const handleModifyClick = () => {
    const newJobTitle = prompt('Enter new job title:');
    if (newJobTitle) {
      setJobTitle(newJobTitle);
    }

    const newNomEntreprise = prompt('Enter new enterprise name:');
    if (newNomEntreprise) {
      setNomEntreprise(newNomEntreprise);
    }

    const newDescription = prompt('Enter new job description:');
    if (newDescription) {
      setDescription(newDescription);
    }

    const newDateD = prompt('Enter new start date:');
    if (newDateD) {
      setDateD(newDateD);
    }

    const newDateF = prompt('Enter new end date:');
    if (newDateF) {
      setDateF(newDateF);
    }

    const newSalair = prompt('Enter new salary:');
    if (newSalair) {
      setSalair(newSalair);
    }

    const newContactMail = prompt('Enter new contact email:');
    if (newContactMail) {
      setContactMail(newContactMail);
    }
  };

  return (
    <div className='Container'>
      <div>
        <h3>{jobTitle}</h3>
        <h5>{nomEntreprise}</h5>
      </div>
      <div className='DescriptionBox'>
        <h5>Description of your mession</h5>
        <p>{description}</p>
      </div>
      <div className='bootomContainer'>
        <div className='DurationBox'>
          <h5>Duration</h5>
          <p><h6>Start Date</h6> {dateD}</p>
          <p><h6>End Date</h6> {dateF}</p>
        </div>
        <div className='ExperienceBox'>
          <h5>Salary</h5>
          <p>{salair}</p>
        </div>
        <div className='ExperienceBox'>
          <h5>Mail</h5>
          <p>{contactMail}</p>
        </div>
        <div>
          <button className='btn' onClick={handleModifyClick}>
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;