import { React, useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import PreviewCL2 from "./PreviewCL2.js";
import Styles from "../GenerateCL.module.css";
import styles from "../../GenerateCV/GenerateCV.module.css";
import axios from 'axios'
import { AppContext } from '../../../AppContext'
import { toast } from 'react-hot-toast'
import { SpinnerCircular } from 'spinners-react';
import { useNavigate } from 'react-router'


function GenerateCL2() {
    
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      Mail: '',
      Phone: '',
      Address: '',
      HiringManagerName:'',
      JobTitle:'',
      Site:'',
      Summary:'',

    }
  })

  const [appData, _] = useContext(AppContext)

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmit = data => {
    setLoading(true)
    try {
      var values = {
        ...data,}
        console.log(values)

      axios
        .post('http://localhost:2000/generateCL',values,{
          headers: {
            Authorization: `Bearer ${appData?.token}`
          }
        })
        .then(response => {
          console.log(response)
          toast.success('CL generated successfully')
          navigate('/Account')
        })
        .catch(error => {
          console.log(error)
          toast.error('Error generating CL')
          // setErrorMessages(error.response.data.messege)
        })
    } catch (error) {
      console.log(error)
      toast.error('Error generating CL')
      // setErrorMessages(error.response.data.messege)
    } finally{
      setLoading(false)
    }
  }
  

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
    <PreviewCL2 watch={watch} />
    <div className={styles.btnContainer}>
    <button
                style={{
                  width: '200px',
                  height: '50px',
                  backgroundColor: '#E81A41',
                  color: 'white',
                  border: 'none',
                  borderRadius: '99px'
                }}
                type='button'
                onClick={handleSubmit(onSubmit)}
              >
                {loading ? <div>
                  <SpinnerCircular color='white' size='24px' />
                </div> : 'Generate & save'}
              </button>
    </div>
    </div>
    
  </div>
  </div>
  </>;
} 

export default GenerateCL2;