import React from "react";
import style from "./JobOffers.module.css";


const JobOffer = (props) => {
  const handleContactClick = () => {
    const mailtoLink = `mailto:${props.ContactMail}`;
    window.location.href = mailtoLink;
  };

  return(
    <div className={style.Container}>
      <div>
        <h3>{props.JobTitle}</h3>
        <h5>{props.nomEntreprise}</h5>
      </div>
      <div className={style.DescriptionBox}>
        <h5>Description of your mession</h5>
        <p>{props.Description}</p>
      </div>
      <div className={style.bootomContainer}>
        <div className={style.DurationBox}>
          <h5>Duration</h5>
          <p><h6>Start Date</h6> {props.dateD}</p>
          <p><h6>End Date</h6> {props.dateF}</p>
        </div>
        <div className={style.ExperienceBox}>
          <h5>Salary</h5>
          <p>{props.salair}</p>
        </div>
        <div className={style.ExperienceBox}>
          <h5>Mail</h5>
          <p>{props.ContactMail}</p>
        </div>
        <div>
          <button className={style.btn} onClick={handleContactClick}>
            Contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;