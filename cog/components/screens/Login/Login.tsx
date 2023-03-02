import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
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
      <div className="login-container card">
        <div className="row m-0">
          <div className="col-lg-12">
            <h3 className="d-flex align-items-center justify-content-center">
              Sign In to your Account
            </h3>
          </div>
          <div className="col-lg-12">
            <form>
              <div className="form-group">
                <div className="mt-3 fw-bold form-label">Email Address</div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control"
                />
                <div className="mt-3 fw-bold form-label">Password</div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                />
                <button
                  className="mt-3 w-100 common-btn"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* <div className="col-lg-12">
            <Link to="" className="text-decoration-none common-link">
              <div className="d-flex align-items-center justify-content-end mt-3">
                Forgot Password
              </div>
            </Link>
          </div> */}
          <div className="col-lg-12">
            <div className="col-lg-12">
              <Link
                to="forgot-password"
                className="text-decoration-none common-link"
              >
                <div className="d-flex align-items-center justify-content-end mt-3">
                  Forgot Password
                </div>
              </Link>
            </div>
            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-center">
                {`Don't`} have an account?{" "}
                <Link to="/signup" className="text-decoration-none">
                  {" "}
                  <span className="common-link ms-2 d-flex flex-wrap">
                    Sign Up
                  </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
