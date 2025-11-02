import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {Route,Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Car from './pages/Car'
import Bookings from './pages/Bookings'
import Bottom from './components/Bottom'


const App = () => {

  const [showLogin, setShowLogin] =useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cardetails" element={<CarDetails/>}/>
        <Route path="/car" element={<Car/>}/>
        <Route path="/my-bookings" element={<Bookings/>}/>

      </Routes>
      
      {!isOwnerPath && <Bottom />}


    </>
  )
}

export default App