import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState<any>({});
    const [hasError, setHaserror] = useState(false)
    const [inputField, setInputField] = useState<any>({
        fname:  '',
        lname: '',
        email: '',
        password:'',
        cpassword:''
    });
    const validateEmail = (email:string) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const validatePassword = (password:any) => {
        var pattern = new RegExp(/^(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/);
        if(pattern.test(password)){
            return true;
        } else {
            return false;
        }
    };
    const validation = (name:any,value:any)=> {
        
        const regMatch = /^[a-zA-Z]*$/.test(value);
        let inputPassword = inputField.password;
        setErrorMessage({
        ...errorMessage,
        [name]: '',
        });
        switch (name) {
            //This is for first name
            case 'fname':
                if(value =='')
                {
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter the first name',
                });
                setHaserror(true)
                }
                else if (!regMatch) {
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter only alphabets.',
                });
                setHaserror(true)   
                }
            break;

            //This is for last name
            case 'lname':
                if(value =='')
                {
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter the last name',
                });
                setHaserror(true)
                }
                else if (!regMatch) {
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter only alphabets.',
                });
                setHaserror(true)   
                }
            break;

            //This is for email
            case 'email':
                if(value =='')
                {
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter the email address',
                });
                setHaserror(true)
                }
                else if(validateEmail(value) == null){
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter valid email address.',
                });
                setHaserror(true)   
                }
            break;

            //This is for password
            case 'password':
                if(value =='')
                {
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter the password',
                });
                setHaserror(true)
                }
                else if(validatePassword(value) == false){
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Password should be a digit, an uppercase letter, a lowercase letter, alphanumeric, and greater than 6 character.',
                });
                setHaserror(true)   
                }
            break;

            //This is for confirm password
            case 'cpassword':
                if(value =='')
                {
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Please enter the confirm password',
                });
                setHaserror(true)
                }
                else if(value != inputPassword){
                setErrorMessage({
                    ...errorMessage,
                    [name]: 'Password and confirm password not same.',
                });
                setHaserror(true)   
                }
            break;
            
            default:
            break;
        }
        return hasError;
    }
    const handleChange = (e:any) => {
        let name = e.target.name
        let value = e.target.value
        setInputField((inputField:any) => ({
            ...inputField,
            [name]: value,
        }));
        validation(name,value);
       
    }
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
                                        <div className='mt-3 fw-bold form-label'>First Name <span className='star-mark'>*</span></div>
                                        <input type='text' placeholder='Enter your first name' name="fname" className='form-control' onChange={handleChange} value={inputField.fname}/>
                                        {hasError ? <span className='errorMsg'>{errorMessage.fname} </span> : ''}
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='mt-3 fw-bold form-label'>Last Name <span className='star-mark'>*</span></div>
                                        <input type='text' placeholder='Enter your last name' name="lname" className='form-control' onChange={handleChange} value={inputField.lname}/>
                                        {hasError ? <span className='errorMsg'>{errorMessage.lname} </span> : ''}
                                    </div>
                                </div>
                                <div className='mt-3 fw-bold form-label'>Email Address <span className='star-mark'>*</span></div>
                                <input type='email' placeholder='Enter your company email address' name="email" className='form-control' onChange={handleChange} value={inputField.email} />
                                {hasError ? <span className='errorMsg'>{errorMessage.email} </span> : ''}

                                <div className='mt-3 fw-bold form-label'>Password <span className='star-mark'>*</span></div>
                                <input type='password' placeholder='Enter your password' name="password" className='form-control' onChange={handleChange} value={inputField.password} />
                                {hasError ? <span className='errorMsg'>{errorMessage.password} </span> : ''}

                                <div className='mt-3 fw-bold form-label'>Confirm Password <span className='star-mark'>*</span></div>
                                <input type='password' placeholder='Enter your confirm password' name="cpassword" className='form-control'  onChange={handleChange} value={inputField.cpassword}/>
                                {hasError ? <span className='errorMsg'>{errorMessage.cpassword} </span> : ''}

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
