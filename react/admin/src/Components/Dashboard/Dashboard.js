import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './DashboardStyle.module.css'
import { useState } from 'react';
const Dashboard = () => {
  
    const [cards, setCards] = useState([
      { id: 1, name: 'Users', number: '5' },
      { id: 2, name: 'Resume Template', number: '6' },
      { id: 3, name: 'Cover Letter Template', number: '3' }
    ]);


  return (
    <div className={styles['Container']} >
      
      <div className={styles['cardList']} >
      {cards.map(card => (
        <div key={card.id} className={styles['card']}>
          <h2>{card.name}</h2>
          <h5>{card.number}</h5>
        </div>
      ))}
        

      </div>
      
    </div>
  )
}

export default Dashboard;