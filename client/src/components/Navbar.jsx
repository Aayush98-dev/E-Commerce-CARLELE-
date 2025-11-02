import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" && "bg-light"}`}>

      <Link to='/'>
        <img src={assets.lg2} alt="logo" className='max-w-100 max-h-7xl h-13 rounded-full border-4 border-transparent p-1 logo-border' />
      </Link>

      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full   max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === "/" ? "bg-light" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}

        <div className='flex items-center gap-2 text-sm border border-borderColor px-3 rounded-full max-w-56 transition-all duration-300 overflow-hidden'>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center justify-center w-6 h-6"
          >
            <img src={assets.search_icon} alt="search" className="w-4 h-4 cursor-pointer" />
          </button>
                {showSearch && (
        <input
          type="text"
          placeholder="Search products"
          className={`py-1.5 bg-transparent outline-none placeholder-gray-600 transition-all duration-300
          ${showSearch ? "w-40 opacity-100" : "w-0 opacity-0"} 
        `}
        />
      )}

        </div>

        <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
          <button onClick={()=> navigate("./owner")} className='cursor-pointer'>Dashboard</button>
          <button onClick={()=> setShowLogin(true) } className='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
        </div>

      </div>
      
      <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={() => setOpen(!open)}>
        <img src={open ? assets.close_icon : assets.menu_icon} alt="" />
      </button>


    </div>
  )
}

export default Navbar



// import React, { useState, useEffect } from "react";
// import { assets, menuLinks } from "../assets/assets";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Navbar = ({ setShowLogin }) => {
//   const location = useLocation();
//   const [showSearch, setShowSearch] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [prevScrollY, setPrevScrollY] = useState(0);
//   const [navbarClass, setNavbarClass] = useState("translate-y-0");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);

//       if (currentScrollY < 50) {
//         // Step 1: Top of page → show navbar normally
//         setNavbarClass("translate-y-0 shadow-none");
//       } else if (currentScrollY >= 50 && currentScrollY < 200) {
//         // Step 2: Slight scroll → navbar slides up a bit
//         setNavbarClass("-translate-y-6 shadow-md");
//       } else if (currentScrollY >= 200) {
//         // Step 3: More scroll → hide navbar
//         setNavbarClass("-translate-y-24 shadow-md");
//       }

//       setPrevScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed w-full top-0 z-50 transition-transform duration-300 ease-in-out bg-white ${navbarClass} border-b border-borderColor`}
//     >
//       <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600">
//         <Link to="/">
//           <img
//             src={assets.lg2}
//             alt="logo"
//             className="max-w-100 max-h-7xl h-13 rounded-full border-4 border-transparent p-1 logo-border"
//           />
//         </Link>

//         <div
//           className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0
//           flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50
//           ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
//         >
//           {menuLinks.map((link, index) => (
//             <Link key={index} to={link.path}>
//               {link.name}
//             </Link>
//           ))}

//           <div className="flex items-center gap-2 text-sm border border-borderColor px-3 rounded-full max-w-56 transition-all duration-300 overflow-hidden">
//             <button
//               onClick={() => setShowSearch(!showSearch)}
//               className="flex items-center justify-center w-6 h-6"
//             >
//               <img src={assets.search_icon} alt="search" className="w-4 h-4 cursor-pointer" />
//             </button>
//             {showSearch && (
//               <input
//                 type="text"
//                 placeholder="Search products"
//                 className={`py-1.5 bg-transparent outline-none placeholder-gray-600 transition-all duration-300 ${
//                   showSearch ? "w-40 opacity-100" : "w-0 opacity-0"
//                 }`}
//               />
//             )}
//           </div>

//           <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
//             <button onClick={() => navigate("./owner")} className="cursor-pointer">
//               Dashboard
//             </button>
//             <button
//               onClick={() => setShowLogin(true)}
//               className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
//             >
//               Login
//             </button>
//           </div>
//         </div>

//         <button className="sm:hidden cursor-pointer" aria-label="Menu" onClick={() => setOpen(!open)}>
//           <img src={open ? assets.close_icon : assets.menu_icon} alt="" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
