import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    const toggleSwitch = useRef<HTMLDivElement>(null)
    const { pathname } = useLocation()
    const currentLocation = pathname.split('/')[1]


    const onItemClick = () => {
        const navigationBar = document.getElementsByClassName('open-btn')[0]
        if (toggleSwitch.current && navigationBar) {
            toggleSwitch.current.classList.add("active")
        }

    }

    const onRemoveClick = () => {
        const mainContent = document.getElementsByClassName('close-btn')[0]
        if (toggleSwitch.current && mainContent) {
            toggleSwitch.current.classList.remove("active")
        }
    }

    return (
        <>
            <div className='main-container d-flex '>
                <div className='sidebar' id='side_nav' ref={toggleSwitch}>
                    <div className='header-box px-2 pt-3 pb-4 d-flex justify-content-between'>
                        <h1 className='fs-4 fw-bold ms-3'><span className='text-white'>thinkbridge</span></h1>
                        <span className='btn d-lg-none d-block close-btn  px-1 py-0  navbar-toggler-icon text-white navbar-toggler-icon' onClick={onRemoveClick}>X</span>

                    </div>

                    <ul className='list-unstyled px-2'>
                        <li className={currentLocation == 'dashboard' ? 'active' : ''}>
                            <Link to="/dashboard" className="text-decoration-none px-3 py-2 d-block">Teams</Link>
                        </li>
                        <li className={currentLocation == 'addEditTeams' ? 'active' : ''}>
                            <Link to="/addEditTeams" className="text-decoration-none px-3 py-2 d-block">AddEditTeams</Link>
                        </li>
                        <li className={currentLocation == 'reporting' ? 'active' : ''}>
                            <Link to="/reporting" className="text-decoration-none px-3 py-2 d-block">Reporting To</Link>
                        </li>
                    </ul>

                </div>

                <div className='content'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">

                            <div className='d-flex justify-content-between d-lg-none d-block'>

                                <div className='navbar-brand me-auto'>
                                    <span className='fw-bold'>think</span>
                                    <span>bridge</span>
                                </div>
                                <button className='btn px-1 py-0 open-btn navbar-toggler-icon  mt-2 ms-2' onClick={onItemClick} ></button>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav  mb-2 mb-lg-0">
                                    <li className="nav-item d-flex">
                                        <Link to="" className='nav-link active common-link'>Notification</Link>
                                        <Link to="" className='nav-link active common-link'>Logout</Link>
                                    </li>



                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Navbar