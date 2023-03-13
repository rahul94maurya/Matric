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
                        <Link to="/dashboard" className="text-decoration-none d-block p-3 position-relative">Teams</Link>
                    </li>
                    <li className={currentLocation == 'addEditTeams' ? 'active ' : ''}>
                        <Link to="/addEditTeams" className="text-decoration-none d-block p-3  position-relative">Add/Edit Teams</Link>
                    </li>
                    <li className={currentLocation == 'reporting' ? 'active' : ''}>
                        <Link to="/reporting" className="text-decoration-none d-block p-3  position-relative">Reportin To</Link>
                    </li>
                </div>
            </div>
        </>
    )
}
export default Sidebar;