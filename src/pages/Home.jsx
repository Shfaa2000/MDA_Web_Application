import React, { useState } from 'react';
import bigphoto from "../assets/bigphoto.jpg";
import icon from "../assets/icon.png";
import graduation from "../assets/pngwing.com (64) 1.png";
function Home() {
  const [showContent, setShowContent] = useState(false);
   const divStyle = {
    backgroundImage: `url(${bigphoto})`, // correct syntax
    backgroundSize: 'cover',             // make it fill the screen
    backgroundRepeat: 'no-repeat',       // prevent duplicates
    backgroundPosition: 'center',        // center the image
    width: '100%',                        // full width
    height: '100vh',                      // full viewport height
  };
  const fadeStyle={
  opacity: showContent ? 1 : 0 ,
   transition: 'opacity 0.5s ease-out',
  }
 
  return (
    <div style={divStyle} onClick={()=>setShowContent(true)}>
     <div className='welcome' style={fadeStyle}>Welcome With 
      MDA</div> 
     <img src={icon} className='icon' style={fadeStyle}/> 
     <img src={graduation} className='grad' style={fadeStyle}/> 
   </div>
  )
}

export default Home