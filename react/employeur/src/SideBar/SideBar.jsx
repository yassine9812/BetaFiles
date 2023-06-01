import React from 'react'
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
                        <a href='' className='nav-link text-wihte' >
                            <Icon.JournalBookmark className=' text-white me-2 fs-5 ' ></Icon.JournalBookmark>
                            <span className=' text-white fs-5  ' >Offer</span>
                        </a>
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