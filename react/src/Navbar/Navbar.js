import React, { useContext } from 'react'
import { useState } from 'react'
import './NavbarStyle.module.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { AppContext } from '../AppContext'
import { hover } from '@testing-library/user-event/dist/hover'

//import {AppBar,Toolbar,IconButton} from "@mui/material";

function Navbar () {
  const [show, setShow] = useState(true)
  const [appData, setAppData] = useContext(AppContext)

  const controleNavbar = () => {
    if (window.screenY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controleNavbar)
    return () => {
      window.removeEventListener('scroll', controleNavbar)
    }
  }, [])

  return (
    <nav>
      <Link to='/'>
        <img
          style={{ marginLeft: '200px', marginTop: '20px' }}
          src='image/logo/logo.png'
          width='200px'
          alt='logo'
        />
      </Link>

      <ul>
        <li>
          {' '}
          <Link to='/'>Home</Link>{' '}
        </li>
        <li>
          {' '}
          <Link to='/Resume'>Resume</Link>
        </li>
        <li>
          {' '}
          <Link to='/CoverLettre'>Cover Lettre</Link>
        </li>
        <li>
          {' '}
          <Link to='/AboutUs'>About us</Link>
        </li>
        <li>
          {' '}
          <Link to={appData?.user ? '/Account' : '/Login'}>
            <button
              className='btn'
              style={{
                color: 'white',
              }}
              type='submit'
            >
              {' '}
              {appData?.user ? 'My Account' : 'Login'}
            </button>
          </Link>{' '}
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
