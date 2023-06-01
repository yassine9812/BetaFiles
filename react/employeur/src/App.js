import './App.css'; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './SideBar/SideBar';
import Offer from './Offer';





function App () {
  return(
    <div className='d-flex' >
      
      <div className='col-auto'>
          <SideBar></SideBar>
      </div>
      <div>
        <Offer></Offer>
      </div>

    </div>
  )
}

export default App;
