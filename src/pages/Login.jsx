import React, { useState } from "react";
import EmailValidate from "../components/EmailValidate";
import hearingaid from "../assets/hearingaid.jpg";
import care from "../assets/care.jpg";
import icon from "../assets/icon.png";
import facebook from "../assets/facebook.ico";
import google from "../assets/google.jpg"
import { NavLink } from "react-router-dom";


function Login() {
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
      <div className="login mx-auto">
        <h1 className="">Sign In</h1>
        <p>Fill your information or register with your social account</p>
        <EmailValidate email={email} setEmail={setEmail}
          error={error} setError={setError} />
        <input type="password" placeholder="Password" required></input>
        <button className="forget">Forget your password?</button>
        <button className="logbutton block align-middle">Log In</button>
        <div>
          <p className="haveaccount mt-5 mb-3">
          Does have an account?<NavLink to="/signup"><span>Sign up</span></NavLink> 
        </p>
        <div className="flex justify-center">
          <button><img src={facebook} className="facebook" /></button>
          <button><img src={google} className="google" /></button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
