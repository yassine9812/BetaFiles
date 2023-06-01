import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'

const SideBar = () => {
    return (
        <div className=  ' sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100' >
            <div>
                <a href="d-flex align-items-center fs-5 ">
                    <span className='fs-4 text-white '>
                        <img src="logo.png" width='200px' alt="" /></span>
                </a>
                <hr className='text-secondary mt-2' />
                <ul className='nav nav-pills flex-column p-0 m-0' >
                    <li className='nav-item' >
                        <Link to='/' className='nav-link text-wihte' >
                            <Icon.Speedometer className=' text-white me-2 fs-5 ' ></Icon.Speedometer>
                            <span className=' text-white fs-5  ' >Dashboard</span>
                        </Link>
                    </li>
                    <li className='nav-item'  >
                        <Link to='UserList' className='nav-link text-wihte' >
                            <Icon.PeopleFill className='me-2 fs-5 text-white' />
                            <span className='fs-5 text-white' >User List</span>
                        </Link>
                    </li>

                    <li className='nav-item' >
                        <Link to='TemplateList' className='nav-link text-wihte' >
                            <Icon.Table className='me-2 fs-5 text-white' />
                            <span className='fs-5 text-white ' >Template List</span>
                        </Link>
                    </li>

                    <li className='nav-item' >
                        <Link to='EmployerOffer' className='nav-link text-wihte' >
                            <Icon.Stack className='me-2 fs-5 text-white' />
                            <span className='fs-5 text-white ' >Employer Offer</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
            <ul className='nav nav-pills flex-column p-0 m-0' >
                <li>
                <hr className='text-secondary' />
                <a href='' className='nav-link text-wihte' >
                <Icon.LockFill className='me-2 fs-2 text-white' />
                <span className='fs-5 text-white' > LogOut </span>
                </a>
                </li>
                </ul>
                
            </div>

        </div>
    )
}

export default SideBar