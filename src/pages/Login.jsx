import React from 'react'
import hearingaid from '../assets/hearingaid.jpg'
import care from "../assets/care.jpg"

function Login() {
  return (
    <div className="">
    <div className=''>
      <img className='hearingaid' src={hearingaid} alt=''></img>
      <p className='success'>Be Successful With Us</p>
      <img className='care' src={care} alt=''></img>
      <p className='mda'>MDA</p>
    </div>
    <div className="login">
      <h1 className=''>Sign In</h1>
      <p>Fill your information or register with your social account</p>
      <input placeholder='Email Address'></input>
      <input placeholder='Password'></input>
      <p className='forget'>Forget your password?</p>
      <button>Log In</button>
      <p className='haveaccount'>Does have an account?<span>Sign in</span></p>
    </div>
    </div>
  )
}

export default Login