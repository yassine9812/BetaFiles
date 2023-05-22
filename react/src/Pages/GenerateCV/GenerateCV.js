import { React, useContext, useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import Preview from './Preview'
import styles from './GenerateCV.module.css'
import { PlusCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import { AppContext } from '../../AppContext'
import { toast } from 'react-hot-toast'
import { SpinnerCircular } from 'spinners-react';
import { useNavigate } from 'react-router'

function GenerateCV () {
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
      education: [{ value: '' }],
      employmentHistory: [{ value: '' }],
      skills: [{ value: '' }]
    }
  })

  const [appData, _] = useContext(AppContext)

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const onSubmit = data => {
    setLoading(true)
    try {
      var values = {
        ...data,
        education: data.education.map(item => item.value),
        employmentHistory: data.employmentHistory.map(item => item.value),
        skills: data.skills.map(item => item.value)
      }
      console.log(values)
      axios
        .post('http://localhost:2000/generateCV', values,{
          headers: {
            Authorization: `Bearer ${appData?.token}`
          }
        })
        .then(response => {
          console.log(response)
          toast.success('CV generated successfully')
          navigate('/Account')
        })
        .catch(error => {
          console.log(error)
          toast.error('Error generating CV')
          // setErrorMessages(error.response.data.messege)
        })
    } catch (error) {
      console.log(error)
      toast.error('Error generating CV')
      // setErrorMessages(error.response.data.messege)
    } finally{
      setLoading(false)
    }
  }
  const {
    fields: educationList,
    append: appendEducationList,
    remove: removeEducationList
  } = useFieldArray({
    control,
    name: 'education'
  })
  const {
    fields: employmentHistoryList,
    append: appendEmploymentHistoryList,
    remove: removeEmploymentHistoryList
  } = useFieldArray({
    control,
    name: 'employmentHistory'
  })
  const {
    fields: skillsList,
    append: appendSkillsList,
    remove: removeSkillsList
  } = useFieldArray({
    control,
    name: 'skills'
  })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.generateTemplateContainer}>
          <form>
            <div className={styles.PersonalDetails}>
              <h3>Personal Details</h3>
              <div className={styles.InputsField}>
                <div className={styles.boxInput}>
                  <label>First Name</label>
                  <input {...register('firstName', { required: true })} />
                  <div>
                    {errors.firstName && <span>This field is required</span>}
                  </div>
                </div>

                <div className={styles.boxInput}>
                  <label>Last Name</label>
                  <input
                    type='text'
                    {...register('lastName', { required: true })}
                  />
                  <div>
                    {errors.lastName && <span>This field is required</span>}
                  </div>
                </div>
              </div>

              <div className={styles.InputsField}>
                <div className={styles.boxInput}>
                  <label>E-mail</label>
                  <input
                    type='mail'
                    {...register('Mail', { required: true })}
                  />
                  <div>
                    {errors.Mail && <span>This field is required</span>}
                  </div>
                </div>

                <div className={styles.boxInput}>
                  <label>Phone Number</label>
                  <input
                    type='text'
                    {...register('Phone', { required: true })}
                  />
                  <div>
                    {errors.Phone && <span>This field is required</span>}
                  </div>
                </div>
              </div>
              <div className={styles.InputsField}>
                <div className={styles.boxInput}>
                  <label>Country</label>
                  <input
                    type='text'
                    {...register('Country', { required: true })}
                  />
                  <div>
                    {errors.Country && <span>This field is required</span>}
                  </div>
                </div>

                <div className={styles.boxInput}>
                  <label>City</label>
                  <input
                    type='text'
                    {...register('City', { required: true })}
                  />
                  <div>
                    {errors.City && <span>This field is required</span>}
                  </div>
                </div>
              </div>

              <div className={styles.InputsField}>
                <div className={styles.boxInput}>
                  <label>Job Title</label>
                  <input
                    style={{ width: '375px' }}
                    type='text'
                    {...register('JobTitle', { required: true })}
                  />
                  <div>
                    {errors.JobTitle && <span>This field is required</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.Summary}>
              <h3>Professional Summary</h3>
              <p>Write 2-4 short sentences to interest the reader!</p>
              <textarea {...register('Summary', { required: true })} />
              <div>{errors.Summary && <span>This field is required</span>}</div>
            </div>

            <div className={styles.Education}>
              <h3>Education</h3>
              <p>
                A varied education on your resume sums up the value that your
                learnings and background will bring to job.
              </p>

              {educationList.map((field, index) => (
                <div className={styles.boxInput}>
                  <div className={styles.InputsList} key={field.id}>
                    <input
                      {...register(`education.${index}.value`)}
                      style={{ width: '375px' }}
                      type='text'
                    />
                  </div>

                  <div>
                    {educationList.length > 1 && (
                      <button
                        type='button'
                        style={{
                          backgroundColor: 'red',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'white',
                          width: '80px',
                          height: '30px',
                          borderRadius: '15px',
                          marginBottom: '5px'
                        }}
                        onClick={() => removeEducationList(index)}
                      >
                        <span>Remove</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type='button'
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => appendEducationList({ value: '' })}
              >
                <PlusCircleOutlined
                  style={{ fontSize: '20px', color: '#E81A41' }}
                />
                <span>Add Input</span>
              </button>
              <div>
                {errors.education && <span>This field is required</span>}
              </div>
            </div>

            <div className={styles.Employment}>
              <h3>Employment History</h3>
              <p>Show your relevant experience (last 10 years).</p>
              {employmentHistoryList.map((field, index) => (
                <div className={styles.boxInput}>
                  <div className={styles.InputsList} key={field.id}>
                    <input
                      {...register(`employmentHistory.${index}.value`)}
                      style={{ width: '375px' }}
                      type='text'
                    />
                  </div>

                  <div>
                    {employmentHistoryList.length > 1 && (
                      <button
                        type='button'
                        style={{
                          backgroundColor: 'red',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'white',
                          width: '80px',
                          height: '30px',
                          borderRadius: '15px',
                          marginBottom: '5px'
                        }}
                        onClick={() => removeEmploymentHistoryList(index)}
                      >
                        <span>Remove</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type='button'
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => appendEmploymentHistoryList({ value: '' })}
              >
                <PlusCircleOutlined
                  style={{ fontSize: '20px', color: '#E81A41' }}
                />
                <span>Add Input</span>
              </button>
              <div>
                {errors.employmentHistory && (
                  <span>This field is required</span>
                )}
              </div>
            </div>

            <div className={styles.Skills}>
              <h3>Skills</h3>
              <p>
                Choose the most important skills to show your talents ! (Make
                sure they match the keywords of the job listing if applying via
                an online system).
              </p>
              {skillsList.map((field, index) => (
                <div className={styles.boxInput}>
                  <div className={styles.InputsList} key={field.id}>
                    <input
                      {...register(`skills.${index}.value`)}
                      style={{ width: '375px' }}
                      type='text'
                    />
                  </div>

                  <div>
                    {skillsList.length > 1 && (
                      <button
                        type='button'
                        style={{
                          backgroundColor: 'red',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'white',
                          width: '80px',
                          height: '30px',
                          borderRadius: '15px',
                          marginBottom: '5px'
                        }}
                        onClick={() => removeSkillsList(index)}
                      >
                        <span>Remove</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button
                type='button'
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => appendSkillsList({ value: '' })}
              >
                <PlusCircleOutlined
                  style={{ fontSize: '20px', color: '#E81A41' }}
                />
                <span>Add Input</span>
              </button>
              <div>{errors.skills && <span>This field is required</span>}</div>
            </div>
          </form>
          <div className={styles.PreviewTemplateContainer}>
            <Preview watch={watch} />
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
    </>
  )
}

export default GenerateCV
