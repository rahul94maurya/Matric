import React, { useState } from "react";
import { Link } from "react-router-dom";
import { emailValidation } from "../../../utility/emailValidation";
import { passwordValidation } from "../../../utility/passwordValidation";
import "./style.css";

const initialState = {
  email: "",
  password: ""
}
const Login = () => {
  const [errorObj, setErrorObj] = useState<any>({})
  const [form, setForm] = useState({...initialState})


  const handleChange = (e: any) => {
    let errors = { ...errorObj }
    let { name, value } = e.target;
    errors[e.target.name] = e.target.value ? "" : `Please enter ${name}`
    setForm({
      ...form,
      [name]: value
    })
    setErrorObj({ ...errors })
  }

  const loginValidation = (name: string, value: string,) => {
    let hasError = false;
    let passwordLength = form.password?.length > 6;
    let error = { ...errorObj }
    if (!form.email) {
      error[`email`] = "Email  address is required";
      hasError = true
    } else if (!emailValidation(form.email)) {
      error[`email`] = "Please enter a valid email address"
      hasError = true
    }
    if(!form.password){
      error[`password`] = "Password is required"
      hasError = true
    }else if(!passwordValidation(form.password)){
      error[`password`] = "Please enter a valid password(It should be a digit, an uppercase an lower case,alphanumeric,and more than 6 character)"
      hasError = true
    }
    else if(!passwordLength){
      error[`password`] ="Password should be at least greater 6 character"
      hasError = true
    }
    setErrorObj({ ...error })
    return hasError;
  }
  const handleSubmit = (e: any,) => {
    let { name, value } = e.target;
    e.preventDefault();
    if (loginValidation(name, value)) {
      return
    }
    // console.log("value")

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
            <form autoComplete="off">
              <div className="form-group">
                <div className="mt-3 fw-bold form-label">Email Address</div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                />
                {errorObj && errorObj[`email`] && <span className="errorMsg">{errorObj[`email`]}</span>}
                <div className="mt-3 fw-bold form-label">Password</div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                />
                {errorObj && errorObj[`password`] && <span className="errorMsg">{errorObj[`password`]}</span>}
                <button
                  className="mt-3 w-100 common-btn"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

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
