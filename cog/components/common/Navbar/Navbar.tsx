import React, { useRef, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    const toggleSwitch = useRef<HTMLDivElement>(null)
    const { pathname } = useLocation()
    const currentLocation = pathname.split('/')[1]
    const navigate = useNavigate()


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



    const handleLogout = (e: any) => {
        e.preventDefault()
        localStorage.removeItem("data")
        navigate("/login")

    }

    return (
        <>

            <div className='main-container d-flex'>
                <div className='sidebar ' id='side_nav' ref={toggleSwitch}>
                    <div className='header-box px-2 pt-3 pb-4 d-flex justify-content-between'>
                
                        <div className='navbar-brand me-auto  ms-3'>
                            <span className='fw-bold text-white fs-4'>think</span>
                            <span className='text-white fs-5'>bridge</span>
                        </div>
                        <span className='btn d-lg-none d-block close-btn  px-1 py-0  navbar-toggler-icon text-white navbar-toggler-icon' onClick={onRemoveClick}>X</span>

                    </div>

                    <ul className='list-unstyled'>
                        <li className={currentLocation == 'dashboard' ? 'active' : ''}>
                            <Link to="dashboard" className="text-decoration-none p-3 d-block">Teams</Link>
                        </li>
                        <li className={currentLocation == 'addEditTeams' ? 'active' : ''}>
                            <Link to="addEditTeams" className="text-decoration-none d-block">AddEditTeams</Link>
                        </li>
                        <li className={currentLocation == 'reporting' ? 'active' : ''}>
                            <Link to="reporting" className="text-decoration-none  d-block">Reporting To</Link>
                        </li>
                        <li className={currentLocation == 'addEditMatric' ? 'active' : ''}>
                            <Link to="addEditMatric" className="text-decoration-none  d-block">Add/Edit Matric</Link>
                        </li>
                        <li className={currentLocation == 'report' ? 'active' : ''}>
                            <Link to="report" className="text-decoration-none  d-block">Report</Link>
                        </li>
                        <li className={currentLocation == 'planEditSprint' ? 'active' : ''}>
                            <Link to="planEditSprint" className="text-decoration-none  d-block">Plan/Edit Sprint</Link>
                        </li>
                        <li className={currentLocation == 'addEditTickets' ? 'active' : ''}>
                            <Link to="addEditTickets" className="text-decoration-none  d-block">Add/Edit Tickets</Link>
                        </li>
                        <li className={currentLocation == 'selfPerformance' ? 'active' : ''}>
                            <Link to="selfPerformance" className="text-decoration-none  d-block">SelfPerformance</Link>
                        </li>
                        <li className={currentLocation == 'coWorkers' ? 'active' : ''}>
                            <Link to="coWorkers" className="text-decoration-none d-block">Rate your Co-Worker</Link>
                        </li>
                    </ul>

                </div>

                <div className='content '>
                    <nav className="navbar navbar-expand-lg  navbar-light card bg-transparent" id='header_nav'>
                        <div className="container">

                            <div className='d-flex justify-content-between d-lg-none d-block'>

                                <div className='navbar-brand me-auto'>
                                    <span className='fw-bold'>think</span>
                                    <span>bridge</span>
                                </div>
                                <button className='btn px-1 py-0 open-btn navbar-toggler-icon  mt-2 ms-2' onClick={onItemClick} ></button>
                            </div>

                            <ul className=" ms-auto  mb-lg-0">
                                <li className=" d-flex flex-wrap">
                                    {/* <Link to="" className='nav-link active common-link position-realtive mt-2 me-3'>Notification</Link> */}
                                    <Link to="" className='nav-link active common-link position-realtive mt-3 me-3' onClick={handleLogout}>Logout</Link>
                                </li>
                            </ul>


                        </div>
                    </nav>

                    <div className='me-1 p-3 ms-2 mt-3 page-content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar