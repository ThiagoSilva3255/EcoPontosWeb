import React from "react"
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import LandingPage from '../src/Pages/LandingPage/LandingPage'
import SignUp from '../src/Pages/SignUp/SignUp'
import Login from '../src/Pages/Login/Login'
import About from '../src/Pages/About/About'

function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/About" element={<About />}/>

          
        </Routes>      
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;