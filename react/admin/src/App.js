import './App.css'; 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './Components/SideBar/SideBar';
import Dashboard from './Components/Dashboard/Dashboard';
import UserList from './Components/UserList/UserList';
import TemplateList from './Components/TemplateList/TemplateList';
import EmployerOffer from './Components/EmployerOffer/EmployerOffer';
import { Routes,Route } from 'react-router-dom';




function App () {
  return(
    <div className='d-flex' >
      
      <div className='col-auto'>
          <SideBar></SideBar>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/UserList' element={<UserList/>}></Route>
          <Route path='/TemplateList' element={<TemplateList/>}></Route>
          <Route path='/EmployerOffer' element={<EmployerOffer/>}></Route>
        </Routes>
      </div>

    </div>
  )
}

export default App;
