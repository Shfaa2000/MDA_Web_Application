import React from 'react';
import './App.css';
import Login from './pages/Login';
import { Route , Routes ,  } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/SignUp';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login'element={<Login/>} />
        <Route path='signup' element={<Dashboard/>}/>
      </Routes>
  )
}

export default App
