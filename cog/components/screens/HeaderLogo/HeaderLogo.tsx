import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

const HeaderLogo = () => {
  return (
    <div className="row m-0">
        <div className="col-lg-12">
          <div className="position-relative header">
            <Link to="/login" className="text-decoration-none text-dark">
              <span className="fw-bold fs-5">think</span>
              <span className="fs-5">bridge</span>
              <span className="fs-5">|</span>
              <span className="header-title fs-5">there's a new there</span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default HeaderLogo
