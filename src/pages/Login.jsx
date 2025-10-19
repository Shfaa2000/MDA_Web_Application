import React from 'react'
import hearingaid from '../assets/hearingaid.jpg'
import care from "../assets/care.jpg"

function Login() {
  return (
    <div className='d-flex'>
    <div className='d-flex'>
      {/* <img className='hearingaid' src={hearingaid} alt=''></img> */}
      <img className='care' src={care} alt=''></img>
    </div>
    <div className="login">
      <h1 className=''>Sign In</h1>
    </div>
    </div>
  )
}

export default Login