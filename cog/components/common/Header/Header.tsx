import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type ButtonClick = {
    onItemClick: () => void
}

const Header = (props: ButtonClick) => {
    const navigate = useNavigate()

    
    const handleLogout = (e: any) => {
        e.preventDefault()
        localStorage.removeItem("data")
        navigate("/login")

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-light card bg-transparent" id='header_nav'>
                <div className="container">
                    <div className='d-flex justify-content-between d-lg-none d-block'>
                        <div className='navbar-brand me-auto'>
                            <span className='fw-bold'>think</span>
                            <span>bridge</span>
                        </div>
                        <button className='btn px-1 py-0 open-btn navbar-toggler-icon  mt-2 ms-2' onClick={props.onItemClick} ></button>
                    </div>
                    <ul className=" ms-auto  mb-lg-0">
                        <li className=" d-flex flex-wrap">
                            {/* <Link to="" className='nav-link active common-link position-realtive mt-2 me-3'>Notification</Link> */}
                            <Link to="" className='nav-link active common-link position-realtive mt-3 me-3' onClick={handleLogout}>Logout</Link>
                        </li>
                    </ul>


                </div>
            </nav>
        </>
    )
}

export default Header