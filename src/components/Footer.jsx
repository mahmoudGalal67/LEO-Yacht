import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  return (
    <footer className='p-24 text-white relative'>
      {location.pathname.split("/")[1] === "dollHouse" && <img className='doll-footer-image object-cover absolute top-0 left-0 w-full h-full ' src={require("../assets/images/dollHouse/foore.png")} alt="" />}
      <h3 className='lg:text-5xl text-3xl  font-bold text-center mb-8'>Stay with us!</h3>
      <div className="wrapper flex justify-center items-center gap-24">
        <div className="left">
          {location.pathname.split("/")[1] !== "dollHouse" ? <img src={require("../assets/images/home/logo.png")} alt="" /> :
          <img className='w-40 block m-auto' src={require("../assets/images/dollHouse/Doll-House[1] 2.png")} alt="" />
          }
          <div className='my-5'><a href="/booking">BOOK A LEO YACHT NOW</a></div>
          <div><a href="/dollHouse">BOOK LEO DOLL HOUSE NOW</a></div>
        </div>
        <ul>
          <li className='my-3'><Link to="/">Home</Link></li>
          <li className='my-3'><Link to="/gallary">Gallery</Link></li>
          <li className='my-3'><Link to="/about">About Us</Link></li>
          <li className='my-3'><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="right">
          <p className='text-center'>United Arab Emirates ,Dubai.</p>
          <a  className='block my-3' href="mailto:Leo.events.dubai@gmail.com">Leo.events.dubai@gmail.com</a>
          <a className='block text-center' href="tel:+971522818678">+971 52 281 8678</a>
          <div className="icons">
          <div
            className="icon-wrapper my-5 flex items-center  justify-center gap-3"
          >
            <div
              className="icon w-10 p-3 rounded-full flex justify-center items-center bg-gray-600 hover:bg-gray-500"
            >
              <a href="https://instagram.com/dollhouse_dxb?igshid=MTIyMzRjYmRlZg==">
                <img
                    src={require("../assets/images/Icon/Instagram.png")}
                  alt=""
                  loading="lazy"
              /></a>
            </div>
            <div
              className="icon w-10 p-3 rounded-full flex justify-center items-center bg-gray-600 hover:bg-gray-500"
            >
              <a href="https://www.instagram.com/leoyachts/?igshid=MTIyMzRjYmRlZg%3D%3D">
                <img
                    src={require("../assets/images/Icon/Instagram.png")}
                  alt=""
                  loading="lazy"
              /></a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer