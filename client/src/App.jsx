import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {Route,Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Car from './pages/Car'
import Bookings from './pages/Bookings'
import Bottom from './components/Bottom'
import Layout from './pages/Admin/Layout'
import Control from './pages/Admin/Control'
import Add from './pages/Admin/Add'
import ManageCar from './pages/Admin/ManageCar'
import ManageBooking from './pages/Admin/ManageBooking'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './Context/Appcon'


const App = () => {

  const {showLogin} = useAppContext();
  const isOwnerPath = useLocation().pathname.startsWith('/owner')



  return (
    <>
    <Toaster />
    {showLogin && <Login/>}
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/car-details/:id" element={<CarDetails/>}/>
        <Route path="/cars" element={<Car/>}/>
        <Route path="/my-bookings" element={<Bookings/>}/>
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Control />}/>
          <Route path='add-car' element={<Add />}/>
          <Route path='manage-cars' element={<ManageCar />}/>
          <Route path='manage-bookings' index element={<ManageBooking />}/>
        </Route>
      </Routes>
      
      {!isOwnerPath && <Bottom />}


    </>
  )
}

export default App

