import React from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as WhatsIcons} from "../assets/images/Icon/WhatsIcon.svg"

function Nav() {
  return (
    <nav className='absolute w-full z-10'>
      <a href="https://wa.me/971522818678"><div className='whats-icon md:h-20 fixed w-10 h-10 left-2 md:w-20'><WhatsIcons/></div></a>
      <div className="wrapper py-1 px-3 sm:px-16 lg:my-6 bg-nav flex justify-between items-center">
        <Link to="/"><img className='header-logo' src={require("../assets/images/home/logo.png")} alt="" /></Link>
        <ul className='gap-10 text-lg text-white xl:flex hidden'>
          <li className='hover:text-skyBlue border-b-2 border-nav hover:border-b-2 py-2 transform hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/">HOME</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav hover:border-b-2 py-2 transform hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/gallary">GALLARY</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav hover:border-b-2 py-2 transform hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/about">ABOUT US</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav hover:border-b-2 py-2 transform hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/contact">CONATCT US</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav hover:border-b-2 py-2 transform hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/booking">BOOK NOW</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav hover:border-b-2 py-2 transform hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/dollHouse">DOLL HOUSE</Link></li>
        </ul>
      {/* Toggler */}
        <div className="xl:hidden block">
          <div id="menuToggle" className="top-8">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

        <ul id="menu" className="text-white">
          <li className='hover:text-skyBlue border-b-2 border-nav transform w-fit hover:border-b-2 py-2 hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/">HOME</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav transform w-fit hover:border-b-2 py-2 hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/gallary">GALLARY</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav transform w-fit hover:border-b-2 py-2 hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/about">ABOUT US</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav transform w-fit hover:border-b-2 py-2 hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/contact">CONATCT US</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav transform w-fit hover:border-b-2 py-2 hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/booking">BOOK NOW</Link></li>
          <li className='hover:text-skyBlue border-b-2 border-nav transform w-fit hover:border-b-2 py-2 hover:border-skyBlue transition-all duration-75 ease-in-out'><Link to="/dollHouse">DOLL HOUSE</Link></li>
        </ul>
      </div>
    </div>
         {/* Toggler */}
      </div>
    </nav>
  )
}

export default Nav