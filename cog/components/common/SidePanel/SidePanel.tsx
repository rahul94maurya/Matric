import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import './style.css'

type ButtonProps = {
    onRemoveClick: () => void
}

const SidePanel = (props: ButtonProps) => {
    const { pathname } = useLocation()
    const currentLocation = pathname.split('/')[1]
    return (
        <>
            <div className='header-box px-2 pt-3 pb-4 d-flex justify-content-between'>
                <div className='navbar-brand me-auto  ms-3'>
                    <span className='fw-bold text-white fs-4'>think</span>
                    <span className='text-white fs-5'>bridge</span>
                </div>
                <span className='btn d-lg-none d-block close-btn  px-1 py-0  navbar-toggler-icon text-white navbar-toggler-icon' onClick={props.onRemoveClick} >X</span>

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

        </>
    )
}

export default SidePanel