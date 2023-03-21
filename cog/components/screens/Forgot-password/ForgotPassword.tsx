import React, { useRef } from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import './style.css';
import HeaderLogo from "../../common/HeaderLogo/HeaderLogo";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // send password reset email to user's email
    setShowAlert(true);
    if (emailInputRef.current != null) {
      emailInputRef.current.value = "";
    }
  };

  return (
    <>
      <HeaderLogo />
      <div className="container col-lg-4 col-md-6  card forgot">
        <div className="row m-0">
          <div className="col-lg-12">
            <h3 className="d-flex align-items-center justify-content-center">
              Forgot Password
            </h3>
          </div>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Password reset email has been sent to {email}.
            </Alert>
          )}
          <div className="col-lg-12">
            <Form>
              <div className="form-group">
                <div className="mt-3 fw-bold form-label">Email Address</div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="form-control"
                  ref={emailInputRef}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <Button className="mt-3 w-100 common-btn" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>

  );
};

export default ForgotPassword;
