import React, { useState } from 'react';
import EmailValidate from '../components/EmailValidate';
import hearingaid from "../assets/hearingaid.jpg";
import care from "../assets/care.jpg";
import icon from "../assets/icon.png";
import facebook from "../assets/facebook.ico";
import google from "../assets/google.jpg"
import { NavLink } from 'react-router-dom';



function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  return (
      <div className="All">
        {/* main photos */}
        <div className="photos">
          <img className="hearingaid" src={hearingaid} alt=""></img>
          <p className="success">Be Successful With Us</p>
          <img className="care" src={care} alt=""></img>
          <p className="mda">MDA</p>
          <img src={icon} className="loginicon" />
        </div>
        {/* main fields */}
        <div className="signup mx-auto">
          <h1 className="">Create Account</h1>
          <p>Fill your information or register with your social account</p>
          <input type='text' placeholder="Full Name" required></input>
          <EmailValidate email={email} setEmail={setEmail}
          error={error} setError={setError} />
          <input type='password' placeholder="Create Password" required></input>
          <input type='password' placeholder="Confirm Password" required></input>
          <button className='signbutton block'>Sign up</button>
          <div>
                    <p className="haveaccount mt-7">
                    Already have an account?<NavLink to="/login"><span>Sign in</span></NavLink>
                  </p>
                  <div className="flex justify-center m-2">
                    <button><img src={facebook} className="facebook" /></button>
                    <button><img src={google} className="google" /></button>
                  </div>
                  </div>
        </div>
      </div>
    );
}

export default SignUp