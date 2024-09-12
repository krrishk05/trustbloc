import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {

    useEffect(() => {
        // When the component mounts, set the background image
        document.body.style.backgroundImage = "url('./src/Images/bc.jpg')";

        // When the component unmounts, remove the background image
        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);

    const [action, setAction] = useState('');
    const registerLink = () => {
        setAction(' active');
    };
    const loginLink = () => {
        setAction('');
    };


  return (

    <div className={`wrapper${action}`}>
        <div className="form-box login">
            <form action="">
                <h1 class='log'>Login</h1>
                <div className="input-box">
                    <input type='text' placeholder='Username' required/>
                    &nbsp;  <FaUserAlt className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required/>
                    &nbsp; <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type='checkbox'/>
                        Remember me
                        
                    </label>
                    <a href='#'>Forgot password?</a> 
                </div>

                <button type='submit'>Login!</button>

                <div className="register-link">
                    <p>Don't have an account? <a href='#' onClick={registerLink}>Register!</a></p>
                    <br/>
                    <p>Sign-in faster with <span>Near!</span></p>
                </div>

                <div className="near-link">
                    <a href='#' className='btn'>Near</a>
                </div>

                    
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type='text' placeholder='Username' required/>
                    &nbsp;  <FaUserAlt className='icon'/>
                </div>
                <div className="input-box">
                    <input type='email' placeholder='Email' required/>
                    &nbsp;  <MdEmail className='icon'/>
                </div>
                <div className="input-box">
                    <input type='password' placeholder='Password' required/>
                    &nbsp; <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    {/* <label>
                        <input type='checkbox'/>
                        I agree to the terms & conditions
                        
                    </label> */}
                </div>

                <button type='submit'>Register!</button>

                <div className="register-link">
                    <p>Already have an account? <a href='#' onClick={loginLink}>Login!</a></p>
                    
                </div>

                    
            </form>
        </div>

    </div>
  );
};

export default LoginRegister;
