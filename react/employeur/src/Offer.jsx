import React, { useState } from 'react';
import './OfferListStyle.css';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';
import CardOffer from './cardOffer';

function Offer() {
  const [jobOfferState, setjobOfferState] = useState({
    jobOffers: [
      {
        JobTitle: 'Graphic designer',
        nomEntreprise: 'Karriery',
        Description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
        dateD: '18/05/2023',
        dateF: '18/08/2023',
        salair: '800DT',
        ContactMail: 'Mediounigaith@gmail.com',
      },
    ],
    showOffers: false,
  });

  const [newOfferForm, setNewOfferForm] = useState({
    JobTitle: '',
    nomEntreprise: '',
    Description: '',
    dateD: '',
    dateF: '',
    salair: '',
    ContactMail: '',
  });

  const handleAddOffer = () => {
    const newJobOffer = {
      JobTitle: newOfferForm.JobTitle,
      nomEntreprise: newOfferForm.nomEntreprise,
      Description: newOfferForm.Description,
      dateD: newOfferForm.dateD,
      dateF: newOfferForm.dateF,
      salair: newOfferForm.salair,
      ContactMail: newOfferForm.ContactMail,
    };
    setjobOfferState((prevState) => ({
      ...prevState,
      jobOffers: [...prevState.jobOffers, newJobOffer],
    }));
    setNewOfferForm({
      JobTitle: '',
      nomEntreprise: '',
      Description: '',
      dateD: '',
      dateF: '',
      salair: '',
      ContactMail: '',
    });
  };

  return (
    <div className="container">
      <h2>Offer List</h2>
      {jobOfferState.jobOffers.map((jobOffer, index) => (
        <CardOffer
          key={index}
          JobTitle={jobOffer.JobTitle}
          nomEntreprise={jobOffer.nomEntreprise}
          Description={jobOffer.Description}
          dateD={jobOffer.dateD}
          dateF={jobOffer.dateF}
          salair={jobOffer.salair}
          ContactMail={jobOffer.ContactMail}
        />
      ))}
      <div className='container2' >
      
      <form>
      <h3>Add a new job offer:</h3>
      <div className='inputsFiled' >

      
            <div className='inputsRow' >
              <div className='input' >
                <label >Job Title</label>
                <input
                  type="text"
                  value={newOfferForm.JobTitle}
                  onChange={(e) =>
                    setNewOfferForm({
                      ...newOfferForm,
                      JobTitle: e.target.value,
                    })
                  }
                />
              </div>
              <br />
              <div className='input' >
                <label  >Company Name</label>
                <input
                  type="text"
                  value={newOfferForm.nomEntreprise}
                  onChange={(e) =>
                    setNewOfferForm({
                      ...newOfferForm,
                      nomEntreprise: e.target.value,
                    })
                  }
                />
              </div>
            </div>

        
        <br />
        <div className='input' >
        <label>Description</label>
        <input style={{width:'125%'}}
          type="text"
          value={newOfferForm.Description}
          onChange={(e) =>
            setNewOfferForm({
              ...newOfferForm,
              Description: e.target.value,
            })
          }
        />
        </div>

        

        <br />
        </div>
        <div className='inputsRow'>
        <div className='input' >
        <label>Start Date</label>
        <input
          type="text"
          value={newOfferForm.dateD}
          onChange={(e) =>
            setNewOfferForm({
              ...newOfferForm,
              dateD: e.target.value,
            })
          }
        />
        </div>
        
       
        <br />
        <div className='input' >
        <label>End Date</label>
        <input
          type="text"
          value={newOfferForm.dateF}
          onChange={(e) =>
            setNewOfferForm({
              ...newOfferForm,
              dateF: e.target.value,
            })
          }
        />
        </div>
        </div>
        <br />
        <label>Salary</label>
        <input style={{width:'100%'}}
          type="text"
          value={newOfferForm.salair}
          onChange={(e) =>
            setNewOfferForm({
              ...newOfferForm,
              salair: e.target.value,
            })
          }
        />
        <br />
        <label>Contact Email:</label>
        <input style={{width:'100%'}}
          type="text"
          value={newOfferForm.ContactMail}
          onChange={(e) =>
            setNewOfferForm({
              ...newOfferForm,
              ContactMail: e.target.value,
            })
          }
        />
        <br />
        <button className='btn2' type="button" onClick={handleAddOffer}>
          Add Job Offer
        </button>
      </form>
      </div>
    </div>
  );
}

export default Offer;