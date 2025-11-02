import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Promo from '../components/Promo'
import Testimonial from '../components/Testimonial'
import Dispatch from '../components/Dispatch'
import CarDetails from './CarDetails'

const Home = () => {
  return (
    <>
       <Hero />
       <Features />
       <Promo />
       <Testimonial />
       <Dispatch />
       <CarDetails />
    </>
  )
}

export default Home