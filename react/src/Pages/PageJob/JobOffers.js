import React from "react";
import style from "./JobOffers.module.css";
const JobOffer = (props)=>{

    
    return(
        <div className={style.Container} >

            

            <div>
            <h3> {props.JobTitle} </h3>
            </div>
            <div className={style.DescriptionBox} >
                <h5>Description of your mession</h5>
                <p>
                    {props.Description}
                </p>
                </div>
                <div className={style.bootomContainer}  >
                    <div className={style.DurationBox} >
                        <h5>Duration</h5>
                        <p> {props.Duration} </p>
                    </div>
                    <div className={style.ExperienceBox} >
                        <h5>Experience</h5>
                        <p> {props.Experience} </p>
                    </div>
                    <div className={style.ExperienceBox} >
                        <h5>Mail</h5>
                        <p> {props.ContactMail} </p>
                    </div>

                    <div>
                        <button  className={style.btn}  >  contacter </button>
                    </div>
                </div>
            
            
        </div>
    )
}
export default JobOffer;