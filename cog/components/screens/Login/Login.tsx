import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { emailValidation } from "../../../utility/emailValidation";
import { passwordValidation } from "../../../utility/passwordValidation";
import HeaderLogo from "../../common/HeaderLogo/HeaderLogo";
import TogglePassword from "../../common/TogglePassword/TogglePassword";
import "./style.css";

const initialState = {
  email: "",
  password: ""
}
const Login = () => {
  const [errorObj, setErrorObj] = useState<any>({})
  const [form, setForm] = useState({ ...initialState })
  const[Visible, ToggleIcon] = TogglePassword();

  const navigate = useNavigate()


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

  const loginValidation = (): boolean => {
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
    if (!form.password) {
      error[`password`] = "Password is required"
      hasError = true
    } else if (!passwordValidation(form.password)) {
      error[`password`] = "Please enter a valid password(It should be a digit, an uppercase an lower case,alphanumeric,and more than 6 character)"
      hasError = true
    }
    else if (!passwordLength) {
      error[`password`] = "Password should be at least greater 6 character"
      hasError = true
    }
    setErrorObj({ ...error })
    return hasError;
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (loginValidation()) {
      return
    }
    // console.log("value",form)
    localStorage.setItem("data", JSON.stringify(form))
    navigate("/dashboard")
  };

  return (
    <>
      <HeaderLogo />
      <div className="container  col-lg-4 col-md-6 position-relative card response">
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
                  type={Visible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                />
                 <span className="togglepass">{ToggleIcon}</span> 
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
                <div className="d-flex align-items-center justify-content-end">
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
