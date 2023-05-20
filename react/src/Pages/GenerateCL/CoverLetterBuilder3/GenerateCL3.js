import {React} from "react";
import { useForm } from "react-hook-form";
import PreviewCL3 from "./PreviewCL3.js";
import Styles from "../GenerateCL.module.css";
import styles from "../../GenerateCV/GenerateCV.module.css";


function GenerateCL3() {
    
  const { register, handleSubmit, watch, formState: { errors, } } = useForm();
  const onSubmit = data => console.log(data);
  

  return <>
<div className={styles.container}>
<div className={styles.generateTemplateContainer}> 
    
  <form onSubmit={handleSubmit(onSubmit)}>
  <div className={styles.PersonalDetails}>
      
      <h3>Personal Details</h3>
          <div className={styles.InputsField}>

          <div className={styles.boxInput}>
          <label>First Name</label>
          <input {...register("firstName", { required: true })} />
            <div>
              {errors.firstName && <span>This field is required</span>}
            </div> 
          </div>
      
          <div className={styles.boxInput}>
            <label>Last Name</label>
            <input type="text" {...register("lastName", { required: true })} />
            <div>
            {errors.lastName && <span>This field is required</span>}
            </div>
            </div>

          </div>

          <div className={styles.InputsField}>

          <div className={styles.boxInput}>
          <label>E-mail</label>
          <input type="mail" {...register("Mail", { required: true })} />
            <div>
              {errors.Mail && <span>This field is required</span>}
            </div> 
          </div>
      
          <div className={styles.boxInput}>
            <label>Phone Number</label>
            <input type="text" {...register("Phone", { required: true })} />
            <div>
            {errors.Phone && <span>This field is required</span>}
            </div>
            </div>

            
            
          </div>
          <div className={styles.InputsField}>

          <div className={styles.boxInput}>
          <label>Adresse</label>
          <input type="text" {...register("Adresse", { required: true })} />
            <div>
              {errors.Country && <span>This field is required</span>}
            </div> 
          </div>
      
          <div className={styles.boxInput}>
            <label>Hiring Manager Name</label>
            <input type="text" {...register("HiringManagerName", { required: true })} />
            <div>
            {errors.City && <span>This field is required</span>}
            </div>
            </div>
          </div>

            <div className={styles.InputsField}>

            <div className={styles.boxInput}>
            <label>Job Title</label>
            <input style={{width:'375px'}} type="text" {...register("JobTitle", { required: true })} />
              <div>
                {errors.JobTitle && <span>This field is required</span>}
              </div> 
            </div>
        
            </div>

            <div className={styles.InputsField}>
                <div className={styles.boxInput}>
                <label>Site web</label>
                <input style={{width:'375px'}} type="text" {...register("Site", { required: false })} />
                <div>
                {errors.Phone && <span>This field is required</span>}
                </div>
                </div>
            </div>
          </div>

          <div className={styles.Summary}>
        <h3>Letter Details</h3>
        <p>3–4 paragraphs explaining why you're the perfect candidate for a specific job</p>
        <textarea  {...register("Summary", { required: true })} />
        <div>
        {errors.Summary && <span>This field is required</span>}
        </div> 
      </div>




      
      
    </form>
    <div className={Styles.PreviewTemplateContainer}>
    <PreviewCL3 watch={watch} />
    <div className={styles.btnContainer}>
        <button className={styles.btn1}  type="submit" > Save </button>
        <button className={styles.btn2} type="submit" > Download </button>
    </div>
    </div>
    
  </div>
  </div>
  </>;
} 

export default GenerateCL3;
