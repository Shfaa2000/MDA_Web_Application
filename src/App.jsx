import React from 'react';
import './App.css';
import Login from './pages/Login';
import { Route , Routes ,  } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Options from './pages/Options';
// 
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login'element={<Login/>} />
        <Route path='signup' element={<SignUp/>}/>
        <Route path='options' element={<Options/>}/>
      </Routes>
  )
}

export default App
