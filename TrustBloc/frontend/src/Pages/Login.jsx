import { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Wallet } from "../services/near-wallet";

const CONTRACT_NAME = "guestbook.near-examples.testnet";
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME });

const LoginRegister = ({ isSignedIn, signIn, signOut, onSubmit }) => {
  const [action, setAction] = useState('');
  const registerLink = () => {
    setAction(' active');
  };
  const loginLink = () => {
    setAction('');
  };

  return (
    <div className="login-register-container">
      <div>
        <table>
          <tbody>
            <tr>
              <td><h1 className='welcome'>Welcome to TrustBloc! </h1></td>
            </tr> 
          </tbody>
        </table>
      </div>

      <div className={`wrapper${action}`}>
        <div className="form-box login">
          <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type='text' placeholder='Username' required />
              <FaUserAlt className='icon' />
            </div>
            <div className="input-box">
              <input type='password' placeholder='Password' required />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label>
                <input type='checkbox' />
                Remember me
              </label>
              <a href='#'>Forgot password?</a>
            </div>
            <button type='submit'>Login!</button>
            <div className="register-link">
              <p>Don't have an account? <a href='#' onClick={registerLink}>Register!</a></p>
              <br />
              <p>Sign-in seamlessly with <span>NEAR!</span></p>
            </div>
            <div className="near-link">
              {isSignedIn
                ? <button type='button' onClick={signOut}>Log out</button>
                : <button type='button' onClick={signIn}>NEAR Wallet</button>
              }
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form>
            <h1>Registration</h1>
            <div className="input-box">
              <input type='text' placeholder='Username' required />
              <FaUserAlt className='icon' />
            </div>
            <div className="input-box">
              <input type='email' placeholder='Email' required />
              <MdEmail className='icon' />
            </div>
            <div className="input-box">
              <input type='password' placeholder='Password' required />
              <FaLock className='icon' />
            </div>
            <button type='submit'>Register!</button>
            <div className="register-link">
              <p>Already have an account? <a href='#' onClick={loginLink}>Login!</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
