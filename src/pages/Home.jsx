import React, { useEffect, useState } from 'react';
import bigphoto from "../assets/bigphoto.jpg";
import icon from "../assets/icon.png";
import graduation from "../assets/pngwing.com (64) 1.png";
import { useNavigate } from 'react-router-dom';
function Home() {
  const [showContent, setShowContent] = useState(false);
  const [IsMobile,setIsMobile]=useState(false);
  const navigate=useNavigate();
  useEffect(()=>
    {
    if(showContent){
      const timer=setTimeout(()=>{
       navigate("/options")
      },2000)
     
      return ()=> clearTimeout(timer)
    }
    },[navigate,showContent])
     useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   const divStyle = {
    backgroundImage: `url(${bigphoto})`, // correct syntax
    ...(IsMobile ? 
      {  backgroundSize: 'contain'  }
      :  {backgroundSize:"cover"}
    ),
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