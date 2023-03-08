import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
    const { pathname } = useLocation()
    const currentLocation = pathname.split('/')[1]

    return (

        <>
            <div className="d-flex" id="wrapper">
                <div className="side-navigation">
                    <li className={currentLocation == 'dashboard' ? 'active' : ''}>
                        <Link to="/dashboard" className="">Teams</Link>
                    </li>
                    <li className={currentLocation == 'addEditTeams' ? 'active' : ''}>
                        <Link to="/addEditTeams" className="">Add/Edit Teams</Link>
                    </li>
                    <li className={currentLocation == 'reporting' ? 'active' : ''}>
                        <Link to="/reporting" className="">Reportin To</Link>
                    </li>
                </div>

            </div>
        </>
    )
}
export default Sidebar;