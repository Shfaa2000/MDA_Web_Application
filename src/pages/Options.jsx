import React from 'react';
import hearingaid from '../assets/hearingaid.jpg';
import icon from "../assets/icon.png";
import Doctors from "../assets/Suchen_Sie_Pflegekräfte_I_kebay_eu-removebg-preview 1.png";
import { NavLink } from 'react-router-dom';
const Options = () => {
  return (
    <div className='All'>
         <div><img src={hearingaid} className='hearingaid'/></div>   
         <div className='fcol'>     
         <div className='learnw'>Learn with us the unified national examination question models and be one of the distinguished ones in it because we provide you with a comprehensive encyclopedia of it</div>
         <div className='learnm'>Learn more</div>
    </div>
    <p className="success">Be Successful With Us</p>
    <div className='twocol'>
         <div className='btns'>
        <NavLink to="/login">  <button className='btnlog'>Log in</button></NavLink>
        <NavLink to="/signup"><button className='btnsign'>Sign up</button></NavLink>  
          </div>
         <div className='withpic'>
          <div className='mma'>MDA</div>
          <div className='iicon'><img src={icon}/></div>   
           </div>  
         <div><img src={Doctors} className='doctors'/></div>
    </div>
    </div>
  )
}

export default Options
