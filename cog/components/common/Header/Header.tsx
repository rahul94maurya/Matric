import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type ButtonProps = {
    onMenuBarIconClick: () => void
}
const Header = (props: ButtonProps) => {
    const navigate = useNavigate()

    const handleLogout = (e: any) => {
        e.preventDefault()
        localStorage.removeItem("data")
        navigate("/login")

    }
    return (
        <>
            <nav className='navbar navbar-expand-lg fixed-top bg-transparent card py-3'>
                <div className='container-fluid'>

                    <span className="navbar-toggler-icon navbar-toggler d-none d-block"
                        data-bs-target="#sidebar"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasExample"
                        onClick={props.onMenuBarIconClick}></span>

                    <span className="navbar-toggler-icon  menuBar" data-bs-target="#sidebar" onClick={props.onMenuBarIconClick}></span>
                    <div className='navbar-brand me-auto  position-relative ms-5'>
                        <span className='fw-bold'>think</span>
                        <span>bridge</span>
                    </div>

                    {/* <span className="navbar-toggler-icon navbar-toggler border-0 menuBar"
                        data-bs-toggle="collapse"
                        data-bs-target="#topNavBar"
                        aria-controls="topNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ></span> */}

                    {/* <div className="collapse navbar-collapse" id="topNavBar"> */}
                        <div className='d-flex ms-auto  my-lg-0'>
                            <div className='d-flex flex-wrap'>
                                {/* <Link to="" className="nav-link position-realtive mt-2 me-3 common-link">Notifications</Link> */}
                                <Link to="" className="nav-link position-realtive mt-2 me-3 common-link" onClick={handleLogout}>Logout</Link>
                            </div>
                        </div>
                    {/* </div> */}
                </div>

            </nav>
        </>
    )
}

export default Header