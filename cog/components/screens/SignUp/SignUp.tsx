import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const SignUp = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='signup-container card'>
                <div className='row m-0'>
                    <div className='col-lg-12'>
                        <h3 className='d-flex align-items-center justify-content-center heading'>Create an Account</h3>
                    </div>
                    <div className='col-lg-12'>
                        <form>
                            <div className='form-group'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className='mt-3 fw-bold form-label'>First Name</div>
                                        <input type='text' placeholder='Enter your first name' className='form-control' />
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='mt-3 fw-bold form-label'>Last Name</div>
                                        <input type='text' placeholder='Enter your last name' className='form-control' />
                                    </div>
                                </div>
                                <div className='mt-3 fw-bold form-label'>Email Address</div>
                                <input type='email' placeholder='Enter your email address' className='form-control' />
                                <div className='mt-3 fw-bold form-label'>Password</div>
                                <input type='password' placeholder='Enter your password' className='form-control' />
                                <div className='mt-3 fw-bold form-label'>Confirm Password</div>
                                <input type='password' placeholder='Enter your confirm password' className='form-control' />
                                <button className='mt-3 w-100 common-btn' onClick={handleSubmit} >Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-lg-12'>
                        <div className='d-flex align-items-center justify-content-center link-space'>
                            Already have an account ? <Link to="/login" className='text-decoration-none'> <span className='common-link ms-2 d-flex flex-wrap'>Sign In</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
