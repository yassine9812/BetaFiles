import {React,useState } from "react";
import style from "./PageJob.module.css";
import img from "./Character-working-desk-with-laptop 1.png";
import JobOffer from "./JobOffers";
const PageJob = () => {

  


   const [ jobOfferState, setjobOfferState ] = useState({
        jobOffers:[
          {JobTitle:'Graphic designer',
          Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
          Duration :'3months',
          Experience :'Beginner',
          ContactMail:'Mediounigaith@gmail.com',},
          
    
          {JobTitle:'Full stack devloper',
          Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
          Duration :'6months',
          Experience :'Expert',
          ContactMail:'Mediounigaith@gmail.com',},
    
          {JobTitle:'UI/UX Designer',
          Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
          Duration :'4months',
          Experience :'Advanced',
          ContactMail:'Mediounigaith@gmail.com',},
    
          {JobTitle:'Degitale Marketing',
          Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
          Duration :'6months',
          Experience :'Beginner',
          ContactMail:'Mediounigaith@gmail.com',},
    
          {JobTitle:'Community Manger',
          Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
          Duration :'6months',
          Experience :'Expert',
          ContactMail:'Mediounigaith@gmail.com',},
        ], 
        showOffers: false
    }
    );




    
   
  

    
    return(
        <div className={style.Container} >
            <div className={style.header} >
                <div className={style.text} >
                    <h2 style={{fontSize:'50px'  }} >Search a job </h2>
                     <p style={{fontSize:'25px'}}  >Don't waste time and choose your preferred job and get in touch with the clients</p>   
                </div>
                <div>
                    <img  style={{width:'494px', height:'434px'}} src={img} alt="" />
                </div>
            </div>
            <div className={style.offersContainer} >

            <h2  style={{marginLeft:'-150px',marginBottom:'100px'}} >Job Offer</h2>

                <JobOffer 
                JobTitle={jobOfferState.jobOffers[0].JobTitle} 
                Description={jobOfferState.jobOffers[0].Description}
                Duration ={jobOfferState.jobOffers[0].Duration}
                Experience ={jobOfferState.jobOffers[0].Experience}
                ContactMail= {jobOfferState.jobOffers[0].ContactMail} />

<JobOffer 
                JobTitle={jobOfferState.jobOffers[1].JobTitle} 
                Description={jobOfferState.jobOffers[1].Description}
                Duration ={jobOfferState.jobOffers[1].Duration}
                Experience ={jobOfferState.jobOffers[1].Experience}
                ContactMail= {jobOfferState.jobOffers[1].ContactMail} />

<JobOffer 
                JobTitle={jobOfferState.jobOffers[2].JobTitle} 
                Description={jobOfferState.jobOffers[2].Description}
                Duration ={jobOfferState.jobOffers[2].Duration}
                Experience ={jobOfferState.jobOffers[2].Experience}
                ContactMail= {jobOfferState.jobOffers[2].ContactMail} />

<JobOffer 
                JobTitle={jobOfferState.jobOffers[3].JobTitle} 
                Description={jobOfferState.jobOffers[3].Description}
                Duration ={jobOfferState.jobOffers[3].Duration}
                Experience ={jobOfferState.jobOffers[3].Experience}
                ContactMail= {jobOfferState.jobOffers[3].ContactMail} />

<JobOffer 
                JobTitle={jobOfferState.jobOffers[4].JobTitle} 
                Description={jobOfferState.jobOffers[4].Description}
                Duration ={jobOfferState.jobOffers[4].Duration}
                Experience ={jobOfferState.jobOffers[4].Experience}
                ContactMail= {jobOfferState.jobOffers[4].ContactMail} />
                
            </div>


           {/*<div>
                <button  > show more </button>
                { 
                
                    <div>
                    <JobOffer 
                    JobTitle={jobOfferState.jobOffers[1].JobTitle} 
                    Description={jobOfferState.jobOffers[1].Description}
                    Duration ={jobOfferState.jobOffers[1].Duration}
                    Experience ={jobOfferState.jobOffers[1].Experience} />

                    <JobOffer 
                    JobTitle={jobOfferState.jobOffers[1].JobTitle} 
                    Description={jobOfferState.jobOffers[1].Description}
                    Duration ={jobOfferState.jobOffers[1].Duration}
                    Experience ={jobOfferState.jobOffers[1].Experience} />
                </div> 
                }
            </div>*/}


        </div>
    )
}

export default PageJob;

