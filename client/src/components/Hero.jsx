import React,{useState} from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState()
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mt-10 mb-0'>Luxury cars on Rent <span className="animate-bounce block text-4xl mt-2">👇</span></h1>

        <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] mt-0 mb-0'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'> 
                <div className='flex flex-col items-start gap-2'>
                    <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
                        <option value="">Pickup Location</option>
                        {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                    </select>
                    <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please Select Location'}</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="pickup-date">Pick-Up date</label>
                    <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' />
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="return-date">Return date</label>
                    <input type="date" id="return-date" className='text-sm text-gray-500' required />
                </div>

            </div>
            <button className='flex items-center jjustify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full'>
                <img src={assets.search_icon} alt="Search" className='brightness-300' />
                Search
            </button>
        </form>
    <img src={assets.main_car} alt="car" className='w-full max-w-[800px] h-[18rem] sm:h-[22rem] md:h-[28rem] lg:h-[38rem] xl:h-[44rem] object-contain transition-transform duration-500 hover:scale-105 mt-0 mb-20'/>

    </div>
  )
}

export default Hero



// import React, { useState } from 'react'
// import { assets, cityList } from '../assets/assets'

// const Hero = () => {
//   const [pickupLocation, setPickupLocation] = useState('')

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-light px-6 text-center relative overflow-hidden">

//       {/* --- HEADING --- */}
//       <h1 className="text-5xl md:text-6xl font-luxury font-semibold text-gray-900 mb-8 tracking-wide">
//         <span className="bg-gradient-to-r from-primary to-primary-dull bg-clip-text text-transparent">
//           Luxury Cars on Rent
//         </span>
//         <span className="animate-bounce block text-2xl mt-2">👇</span>
//       </h1>

//       {/* --- FORM SECTION --- */}
//       <form className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl md:rounded-full w-full max-w-4xl bg-white shadow-lg">
        
//         {/* Location */}
//         <div className="flex flex-col items-start w-full md:w-auto">
//           <label htmlFor="pickup-location" className="font-medium text-gray-700 mb-1">
//             Pickup Location
//           </label>
//           <select
//             id="pickup-location"
//             required
//             value={pickupLocation}
//             onChange={(e) => setPickupLocation(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-56 focus:ring-2 focus:ring-primary focus:outline-none"
//           >
//             <option value="">Select City</option>
//             {cityList.map((city) => (
//               <option key={city} value={city}>{city}</option>
//             ))}
//           </select>
//           <p className="text-xs text-gray-500 mt-1">
//             {pickupLocation ? pickupLocation : 'Please select a location'}
//           </p>
//         </div>

//         {/* Pickup Date */}
//         <div className="flex flex-col items-start w-full md:w-auto">
//           <label htmlFor="pickup-date" className="font-medium text-gray-700 mb-1">
//             Pick-up Date
//           </label>
//           <input
//             type="date"
//             id="pickup-date"
//             min={new Date().toISOString().split('T')[0]}
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-48 focus:ring-2 focus:ring-primary focus:outline-none text-gray-700"
//           />
//         </div>

//         {/* Return Date */}
//         <div className="flex flex-col items-start w-full md:w-auto">
//           <label htmlFor="return-date" className="font-medium text-gray-700 mb-1">
//             Return Date
//           </label>
//           <input
//             type="date"
//             id="return-date"
//             required
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-48 focus:ring-2 focus:ring-primary focus:outline-none text-gray-700"
//           />
//         </div>

//         {/* Search Button */}
//         <button
//           type="submit"
//           className="flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dull text-white rounded-full transition-all duration-300 shadow-md"
//         >
//           <img src={assets.search_icon} alt="Search" className="w-5 h-5 brightness-200" />
//           Search
//         </button>
//       </form>

//       {/* --- IMAGE --- */}
//       <img
//         src={assets.main_car}
//         alt="Luxury car"
//         className="mt-10 max-w-2xl w-full rounded-3xl shadow-xl transition-transform duration-700 hover:scale-105"
//       />
//     </div>
//   )
// }

// export default Hero
