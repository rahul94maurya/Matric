import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
    const { pathname } = useLocation()
    const currentLocation = pathname.split('/')[1]
    
    return (

        <>
            <div className="d-flex" id="wrapper">
                <div className="side-navigation list-unstyled bottom-0 rounded-end position-fixed">
                    <li className={currentLocation == 'dashboard' ? 'active' : ''}>
                        <Link to="dashboard" className="text-decoration-none d-block p-3 position-relative">Teams</Link>
                    </li>
                    <li className={currentLocation == 'addEditTeams' ? 'active ' : ''}>
                        <Link to="addEditTeams" className="text-decoration-none d-block p-3  position-relative">Add/Edit Teams</Link>
                    </li>
                    <li className={currentLocation == 'reporting' ? 'active' : ''}>
                        <Link to="reporting" className="text-decoration-none d-block p-3  position-relative">Reporting To</Link>
                    </li>
                    <li className={currentLocation == 'addEditMatric' ? 'active' : ''}>
                        <Link to="addEditMatric" className="text-decoration-none d-block p-3  position-relative">Add/Edit Matric</Link>
                    </li>
                    <li className={currentLocation == 'report' ? 'active' : ''}>
                        <Link to="report" className="text-decoration-none d-block p-3  position-relative">Report</Link>
                    </li>
                    <li className={currentLocation == 'planEditSprint' ? 'active' : ''}>
                        <Link to="planEditSprint" className="text-decoration-none d-block p-3  position-relative">Plan/Edit Sprint</Link>
                    </li>
                    <li className={currentLocation == 'addEditTickets' ? 'active' : ''}>
                        <Link to="addEditTickets" className="text-decoration-none d-block p-3  position-relative">Add/Edit Tickets</Link>
                    </li>
                    <li className={currentLocation == 'selfPerformance' ? 'active' : ''}>
                        <Link to="selfPerformance" className="text-decoration-none d-block p-3  position-relative">SelfPerformance</Link>
                    </li>
                    <li className={currentLocation == 'coWorkers' ? 'active' : ''}>
                        <Link to="coWorkers" className="text-decoration-none d-block p-3  position-relative">Rate your Co-Worker</Link>
                    </li>
                </div>
            </div>
        </>
    )
}
export default Sidebar;