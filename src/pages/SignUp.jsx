import React from 'react';
import hearingaid from "../assets/hearingaid.jpg";
import care from "../assets/care.jpg";
import icon from "../assets/icon.png";
import facebook from "../assets/facebook.ico";
import google from "../assets/google.jpg"
import { NavLink } from 'react-router-dom';

function SignUp() {
  return (
      <div className="All">
        <div className="">
          <img className="hearingaid" src={hearingaid} alt=""></img>
          <p className="success">Be Successful With Us</p>
          <img className="care" src={care} alt=""></img>
          <p className="mda">MDA</p>
          <img src={icon} className="loginicon" />
        </div>
        <div className="signup">
          <h1 className="">Create Account</h1>
          <p>Fill your information or register with your social account</p>
          <input placeholder="Full Name"></input>
          <input placeholder="Email Address"></input>
          <input placeholder="Create Password"></input>
          <input placeholder="Confirm Password"></input>
          <button className='signbutton block'>Sign up</button>
          <div>
                    <p className="haveaccount mt-3">
                    Already have an account?<NavLink to="/login"><span>Sign in</span></NavLink>
                  </p>
                  <div className="flex justify-center m-2">
                    <img src={facebook} className="facebook" />
                    <img src={google} className="google" />
                  </div>
                  </div>
        </div>
      </div>
    );
}

export default SignUp