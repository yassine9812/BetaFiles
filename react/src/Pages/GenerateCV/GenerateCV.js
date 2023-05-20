import {React, useState} from "react";
import { useForm } from "react-hook-form";
import Preview from "./Preview";
import styles from "./GenerateCV.module.css";
import { PlusCircleOutlined } from '@ant-design/icons';

function GenerateCV() {
  const { register, handleSubmit, watch, formState: { errors, } } = useForm();
  const onSubmit = data => console.log(data);
  const [educationList, seteducationList] = useState([
    {education:''},
  ]);

  const handelEducationAdd =() => {
    seteducationList([...educationList, {education:''}])
  };
  console.log(educationList);
  const handelEducationRemove = (index) => {
    const List =[...educationList];
    List.splice(index,1);
    seteducationList(List);
  };

  const handelEducationChange =(e,index) =>{
    const {name,value} = e.target;
    const List =[...educationList];
    List[index][name] = value;
    seteducationList (List);
  };

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
          <label>Country</label>
          <input type="text" {...register("Country", { required: true })} />
            <div>
              {errors.Country && <span>This field is required</span>}
            </div> 
          </div>
      
          <div className={styles.boxInput}>
            <label>City</label>
            <input type="text" {...register("City", { required: true })} />
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
          </div>
      
      <div className={styles.Summary}>
        <h3>Professional Summary</h3>
        <p>Write 2-4 short sentences to interest the reader!</p>
        <textarea  {...register("Summary", { required: true })} />
        <div>
        {errors.Summary && <span>This field is required</span>}
        </div> 
      </div>

      <div className={styles.Education}>
      <h3>Education</h3>
        <p>A varied education on your resume sums up the value that
            your learnings and background will bring to job.</p>
        
        {educationList.map((signleEducation,index)=> (

        <div className={styles.boxInput}>

          <div className={styles.InputsList} key={index}>

          <input name="education" style={{width:'375px'}} type="text" 
          {...register("Education", { required: true })}
      
           Value={signleEducation.education}
           onChange={(e)=>handelEducationChange(e,index)}
           />

           {educationList.length - 1 === index && educationList.length < 4 && 
            <button style={{backgroundColor:'white',border:'none',cursor:'pointer'}} 
                onClick={handelEducationAdd}>
                <PlusCircleOutlined  
                style={{ fontSize: '20px', color: '#E81A41' }}/>
                <span>Add Input</span>
            </button> }
          </div>
          
        <div  >
          {educationList.length > 1 && (<button style={{backgroundColor:'red',border:'none',cursor:'pointer',color:'white', width:'80px',height:'30px', borderRadius:'15px',marginBottom:'5px'  }} onClick={()=>handelEducationRemove(index)} >
            <span>Remove</span>
            </button>)}
        
        </div>
          
        </div>) 
        )}
        
        
        <div>
        {errors.Education && <span>This field is required</span>}
        </div> 
      </div>

      <div className={styles.Employment}>
        <h3>Employment History</h3>
        <p>Show your relevant experience (last 10 years).</p>
        <input style={{width:'375px'}} type="text" {...register("Employment", { required: true })} />
        
        <button style={{backgroundColor:'white',border:'none',cursor:'pointer'}} >
        <PlusCircleOutlined  
                style={{ fontSize: '20px', color: '#E81A41' }}/>
          Add Input

        </button>
        <div>
        {errors.Employment && <span>This field is required</span>}
        </div> 
      </div>

      <div className={styles.Skills}>
        <h3>Skills</h3>
        <p>Choose the most important skills to show your talents ! (Make sure they match the 
            keywords of the job listing if applying via an online system).</p>
        <input style={{width:'375px'}} type="text" {...register("Skills", { required: true })} />
        
        <button style={{backgroundColor:'white',border:'none',cursor:'pointer'}}>
        <PlusCircleOutlined  
                style={{ fontSize: '20px', color: '#E81A41' }}/>
          Add Input

        </button>
        <div>
        {errors.Skills && <span>This field is required</span>}
        </div> 
      </div>
    </form>
    <div className={styles.PreviewTemplateContainer}>
    <Preview watch={watch} />
    <div className={styles.btnContainer}>
        <button className={styles.btn1}  type="submit" > Save </button>
        <button className={styles.btn2} type="submit" > Download </button>
    </div>
    </div>
    
  </div>
  </div>
  </>;
} 

export default GenerateCV;
