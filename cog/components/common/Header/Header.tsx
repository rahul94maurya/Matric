import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'

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
            <div className='row'>


                <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div className='col-lg-6'>


                        <div className="d-flex align-items-center">
                            <h2 className="fs-2 m-0">Thinkbridge</h2>
                            {/* <button className='position-relative ms-3' onClick={props.onMenuBarIconClick}>Click</button> */}

                            <span className="navbar-toggler-icon position-relative ms-5 menuBar " onClick={props.onMenuBarIconClick}></span>

                        </div>
                    </div>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}

                    <div className='col-lg-6'>

                  
                    <div className="d-flex align-items-center justify-content-end" id="">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex">
                            <Link to="" className="nav-link position-realtive mt-2 me-3">Notifications</Link>
                            <Link to="" className="nav-link position-realtive mt-2 me-3" onClick={handleLogout}>Logout</Link>
                        </div>
                    </div>
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Header