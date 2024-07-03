import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignUp.css';
import assets from '../assets/assets';

export const LoginSignUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const navigate = useNavigate();

  const handleClose = () => {
    setShowLogin(false);
    navigate('/');
  };

  return (
    <>
      <div className="container-fluid bg">
        <div className="row">
          <div className="col-md-12">
            <div className="loginsignup mb-4">
              <div className="loginsignup-container">
                <div className="lodinsignup-title d-flex justify-content-between align-items-center">
                  <h1 className='my-2'>{currentState}</h1>
                  <img onClick={handleClose} src={assets.cart_cross_icon} alt="Close" />
                </div>
                <div className="loginsignup-fields d-flex flex-column mt-4">
                  {currentState === "Login" ? null : <input type="text" placeholder='Your Name' required />}
                  <input type="email" placeholder='Email Address' />
                  <input type="password" placeholder='Password' />
                </div>
                <button className='btn-box text-white p-2 px-3 mt-3'>{currentState === 'Sign Up' ? "Create account" : "Log In"}</button>
                {currentState === 'Login' ? (
                  <p className='mt-1'>Create a New Account? 
                    <span onClick={() => setCurrentState("Sign Up")} className='text-danger fw-bold ms-1'>Click here</span>
                  </p>
                ) : (
                  <p>Already have an account? 
                    <span onClick={() => setCurrentState("Login")} className='text-danger fw-bold ms-1'>Login here</span>
                  </p>
                )}
                <div className="loginsignup-agree d-flex align-items-center mb-4 mt-1">
                  <input type="checkbox" className='mb-4' />
                  <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignUp;
