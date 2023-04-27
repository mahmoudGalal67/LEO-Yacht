import React from 'react'
import "./header.css"
import Nav from './Nav'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className=' h-screen reltive'>
      <Nav />
      <div className="info text-white text-center absolute text-2xl">
        <h1 className='xl:text-header md:text-6xl text-4xl font-bold uppercase mb-8'>Big Leo Yacht</h1>
        <p className='my-16'>It is the number one source for luxury yacht charters in Dubai</p>
        <Link to="/booking" className='sm:py-3 py-2  px-7 text-nav bg-gray-400 transition-all ease-linear duration-75 transform block w-fit mx-auto hover:scale-105 hover:bg-blue hover:text-white font-bold' href="/">Book Now</Link>
      </div>
    </header>
  )
}

export default Header