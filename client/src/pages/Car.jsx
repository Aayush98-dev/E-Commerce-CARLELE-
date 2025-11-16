import React, { useState, useEffect } from 'react'
import Theme from '../components/Theme'
import { assets } from '../assets/assets'
import CarDekho from '../components/CarDekho'
import { useSearchParams } from 'react-router-dom'
import { useAppContext } from '../Context/Appcon'

const Car = () => {

  const [searchParams] = useSearchParams()
  const pickupLocation = searchParams.get('pickupLocation')
  const pickupDate = searchParams.get('pickupdate')
  const returnDate = searchParams.get('returnDate')

  const {cars, axios} = useAppContext()

  const isSearchData = pickupLocation && pickupDate && returnDate

  const [filteredCars, setFilteredCars] = useState([])

  const searchCarAvailability = async ()=>{
    const {data} = await axios.post('/api/bookings/check-availability',
      {location: pickupLocation, pickupDate, returnDate})

      if(data.success){
        setFilteredCars(data.availablecars)
        if(data.availablecars.length === 0){
          toast('No cars Available')
        }
        return null
      }
  }

  const applyFilter = async ()=>{
    if(input === ''){
      setFilteredCars(cars)
      return null
    }

    const filter = cars.slice().filter((car)=>{ 
      return car.brand.toLowerCase().includes(input.toLowerCase())
      || car.model.toLowerCase().includes(input.toLowerCase())
      || car.category.toLowerCase().includes(input.toLowerCase())
      || car.transmission.toLowerCase().includes(input.toLowerCase())
    })
    setFilteredCars(filter)
  }

  const [input, setInput] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowSearch(true), 200)
    return () => clearTimeout(timer)
    isSearchData && searchCarAvailability()
  }, [])

  useEffect(()=>{
    cars.length > 0 && !isSearchData && applyFilter()
  },[input, cars])

  return (
    <div>
      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Theme title='Available Cars'
          subTitle='Browse our selection of premium vehicles available for your next adventure.'/>

        <div className={`flex items-center bg-white px-4 mt-6 w-full max-w-140 h-12 rounded-full shadow 
            transform transition-all duration-700 ease-out ${showSearch ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <img src={assets.search_icon} alt="" className='w-4.5 h-4.5 mr-2' />
          <input onChange={(e) => setInput(e.target.value)} value={input} type="text"
            placeholder='Search cars' className='w-full h-full outline-none text-gray-500'/>
          <img src={assets.filter_icon} alt="" className='w-4.5 h-4.5 ml-2' />
        </div>
      
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
        <p>Showing {filteredCars.length} Cars</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>   
          {filteredCars.map((car, index)=>(
            <div key={index}>
              <CarDekho car={car}/>
            </div>
          ))}
        </div> 


       </div>

    </div>
  )
}

export default Car