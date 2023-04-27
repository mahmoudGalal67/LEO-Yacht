import React, { useState } from 'react'

import { Link } from "react-router-dom"

import Footer from "../components/Footer";

import Slider from "react-slick";

import { toast } from 'react-toastify';


const settings = {
    autoplay: true,
    lazyLoad: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    
    function DollHouse() {
      const [dollInfo, setdollInfo] = useState({})
      const emailConfig = {
      Username: "Leo.events.dubai@gmail.com",
    Password: "AC2E2B2031CC8A4939480C02C7BBF2C540B7",
      Host: "smtp.elasticemail.com",
      Post: 2525,
      To : 'Leo.events.dubai@gmail.com',
    From : "Leo.events.dubai@gmail.com",
      Subject : "Doll house booking",
        Body: `New booking from ${dollInfo.email}<br/><br/><br/>
        Email : ${dollInfo.email}<br/>
        Phone number : ${dollInfo.phone}<br/>
        `
    }
  const bookingDoll = (e) => {
    e.preventDefault()
      if (window.Email) {
        window.Email.send(emailConfig).then(() => {
          setdollInfo({
            email: "",
            phone: ""
          })
    toast.success('Your order has been sent successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });})}}
  return (
<div className='doll-house'>
  <main className='doll-header h-screen'>
    <nav>
      <div className="wrapper p-3 px-5  sm:px-16">
        <ul className='gap-10 font-bold text-xl text-white xl:flex hidden justify-center items-center'>
          <li className='hover:text-doll py-2 transform transition-all duration-75 ease-in-out'><Link to="/">HOME</Link></li>
          <li className='hover:text-doll py-2 transform transition-all duration-75 ease-in-out'><Link to="/gallary">GALLARY</Link></li>
          <li className='hover:text-doll py-2 transform transition-all duration-75 ease-in-out'><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/"><img className="w-40" src={require("../assets/images/dollHouse/Doll-House[1] 2.png")} alt="" /></Link></li>
          <li className='hover:text-doll py-2 transform transition-all duration-75 ease-in-out'><Link to="/contact">CONATCT US</Link></li>
          <li className='hover:text-doll py-2 transform transition-all duration-75 ease-in-out'><Link to="/booking">BOOK NOW</Link></li>
          <li className='hover:text-doll py-2 transform transition-all duration-75 ease-in-out'><Link to="/dollHouse">DOLL HOUSE</Link></li>
        </ul>
        <Link className="xl:hidden block" to="/"><img className="xl:w-40 w-20" src={require("../assets/images/dollHouse/Doll-House[1] 2.png")} alt="" /></Link>
      {/* Toggler */}
        <div className="xl:hidden block">
          <div id="menuToggle" className="doll-logo top-8">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

        <ul id="menu" className="text-white">
          <li className='hover:text-doll transform w-fit py-2 transition-all duration-75 ease-in-out'><Link to="/">HOME</Link></li>
          <li className='hover:text-doll transform w-fit py-2 transition-all duration-75 ease-in-out'><Link to="/gallary">GALLARY</Link></li>
          <li className='hover:text-doll transform w-fit py-2 transition-all duration-75 ease-in-out'><Link to="/about">ABOUT US</Link></li>
          <li className='hover:text-doll transform w-fit py-2 transition-all duration-75 ease-in-out'><Link to="/contact">CONATCT US</Link></li>
          <li className='hover:text-doll transform w-fit py-2 transition-all duration-75 ease-in-out'><Link to="/booking">BOOK NOW</Link></li>
          <li className='hover:text-doll transform w-fit py-2 transition-all duration-75 ease-in-out'><Link to="/dollHouse">DOLL HOUSE</Link></li>
        </ul>
      </div>
    </div>
         {/* Toggler */}
      </div>
        </nav>
        <div className="info md:my-28 my-12 md:p-8 p-4 text-white text-center">
          <h3 className='font-bold my-8'>Welcome to the party</h3>
          <p className='font-bold my-8'>LEO DOLL HOUSE</p>
        </div>
      </main>
      <section className='sm:px-24 p-12 slider'>
        <div className="video-wrapper p-8">
          <Slider {...settings}>
            <div>
              <img className='w-full' src={require("../assets/images/dollHouse/div (1).png")} alt="" />
            </div>
            <div>
              <img className='w-full' src={require("../assets/images/dollHouse/div (1).png")} alt="" />
            </div>
            <div>
              <img className='w-full' src={require("../assets/images/dollHouse/div (1).png")} alt="" />
            </div>
          </Slider>
        </div>
      </section>
      <section id='gallary' className='md:p-24 py-5'>
        <h3 className='md:text-6xl text-3xl text-white text-center mb-5 tracking-widest'>Gallary</h3>
        <div className="wrapper md:p-8 p-3">
          <img loading='lazy' src={require("../assets/images/dollHouse/1.png")} alt="" />
          <img loading='lazy'  src={require("../assets/images/dollHouse/2.png")} alt="" />
          <img loading='lazy' className='d-row' src={require("../assets/images/dollHouse/4.png")} alt="" />
          <img loading='lazy'  src={require("../assets/images/dollHouse/header.png")} alt="" />
          <img loading='lazy' className='d-row' src={require("../assets/images/dollHouse/7.png")} alt="" />
          <img loading='lazy'  src={require("../assets/images/dollHouse/3.png")} alt="" />
          <img loading='lazy' className='d-row' src={require("../assets/images/dollHouse/6.png")} alt="" />
          <img loading='lazy' className='d-col'src={require("../assets/images/dollHouse/5.png")} alt="" />
        </div>
        <div className="stay-updated text-center p-8">
          <div className='text-rouge font-bold text-2xl md:text-3xl'>Stay Updated</div>
          <div className='text-white md:text-5xl text-3xl my-3 p-5'>RECIEVE YOUR VIP PARTY</div>
          <form onSubmit={bookingDoll} className='my-16 outline-none flex lg:flex-row flex-col justify-center items-center gap-12'>
            <input value={dollInfo.email} required name='email' className='p-4 text-white px-12 border-2 border-rouge outline-none' type="email" placeholder='Your email adress.'onChange={(e)=>setdollInfo((prev)=>({...prev,[e.target.name]:e.target.value}))}/>
            <input value={dollInfo.phone} required name='phone' className='p-4 text-white px-12 border-2 border-rouge outline-none' type="text" placeholder='Your phone number.' onChange={(e)=>setdollInfo((prev)=>({...prev,[e.target.name]:e.target.value}))}/>
            <div className='p-1 border-2 border-rouge text-white text-xl'><button type='submit' className='border-rouge border-2 p-3 px-8 hover:text-rouge'>Subscribe</button></div>
          </form>
        </div>
      </section>
    <Footer />
</div>
  )
}

export default DollHouse