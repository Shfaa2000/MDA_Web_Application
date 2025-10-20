import React from "react";
import hearingaid from "../assets/hearingaid.jpg";
import care from "../assets/care.jpg";
import icon from "../assets/icon.png";
import facebook from "../assets/facebook.ico";
import google from "../assets/google.jpg"
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="All">
      <div className="">
        <img className="hearingaid" src={hearingaid} alt=""></img>
        <p className="success">Be Successful With Us</p>
        <img className="care" src={care} alt=""></img>
        <p className="mda">MDA</p>
        <img src={icon} className="loginicon" />
      </div>
      <div className="login">
        <h1 className="">Sign In</h1>
        <p>Fill your information or register with your social account</p>
        <input placeholder="Email Address"></input>
        <input placeholder="Password"></input>
        <button className="forget">Forget your password?</button>
        <button className="logbutton block align-middle">Log In</button>
        <div>
          <p className="haveaccount mt-5 mb-3">
          Does have an account?<NavLink to="/signup"><span>Sign up</span></NavLink> 
        </p>
        <div className="flex justify-center">
          <img src={facebook} className="facebook" />
          <img src={google} className="google" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
