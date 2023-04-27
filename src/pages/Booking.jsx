import React, { useState } from 'react'
import BookCard from '../components/BookCard'

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { toast } from 'react-toastify';

import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root")

function Booking() {
  const [modalIsOpen, setIsOpen] =useState(false);
  const [img, setimg] =useState("");
  const [bookingInfo, setbookingInfo] = useState({date:new Date()})
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)
  
    const emailConfig = {
    Username: "Leo.events.dubai@gmail.com",
    Password: "AC2E2B2031CC8A4939480C02C7BBF2C540B7",
    Host: "smtp.elasticemail.com",
    Post: 2525,
    To : 'Leo.events.dubai@gmail.com',
    From : "Leo.events.dubai@gmail.com",
    Subject : "LEO Yacht booking",
      Body: `New booking from ${bookingInfo.name}<br/><br/><br/>
      Type : ${img}<br/>
      Email : ${bookingInfo.email}<br/>
      Code : ${bookingInfo.code}<br/>
      Phone number : ${bookingInfo.phone}<br/>
      Date : ${bookingInfo.date.toLocaleDateString()} ${bookingInfo.date.toLocaleTimeString()}<br/>
      Noumber of hours : ${bookingInfo.hours}<br/>
      Number of Guests : ${bookingInfo.guests}<br/>
      `
  }

  const bookYacht = (e) => {
    e.preventDefault()
    if (!bookingInfo.date) {
      seterror("Please add a valid date")
    }
    else {
      if (window.Email) {
        seterror("")
        setloading(true)
        window.Email.send(emailConfig).then(() => {
    toast.success('Your order has been sent successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
          setloading(false)
          setIsOpen(false)
        }
      )
      }
    }
  }

  return (
    <>
    {loading &&
      <div className="flex justify-center items-center top-0 left-0 w-full h-full bg-overlay fixed">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>}
    <Nav />
    <main className='about'>
      <div className='relative'>
      {window.innerWidth>=640?<img className='header' src={require("../assets/images/Headers/Odyssey-2-P8-1024x683 1.png")} alt="" />:<img className='header' src={require("../assets/images/home/contactMopile.png")} alt="" />}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
          <h3 className='sm:text-4xl text-2xl text-white font-bold p-3 text-center bg-skyBlue w-fit uppercase'>Choose your Yacht</h3>
        </div>
      </div>
      </main>
      <section className='booking sm:p-16 p-5'>
        <p className='text-center sm:text-lg text-xs sm:p-8 font-bold'>All these luxury yachts are berthed at Dubai Marina and are conveniently approachable. Unlike some cheap yacht rentals, you reach the deep waters quickly to enjoy your yacht cruise.</p>
        <div className="wrapper flex flex-wrap justify-around">
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"AED 600 - 10 Guests" , desc:"Cozmo 45 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"AED 700 - 12 Guests" , desc:"Cozmo 50 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"AED 800 - 28 Guests" , desc:"Cozmo 52 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"AED 850 - 22 Guests" , desc:"Cozmo 55 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"AED 1100 - 33 Guests" , desc:"Cozmo 75 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"AED 2100 - 65 Guests" , desc:"Cozmo 88 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"Call For Price - 50 Guests" , desc:"Majesty 101 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"Call For Price - 130 Guests" , desc:"Cozmo 142 ft. Yacht"}} />
          <BookCard setIsOpen={setIsOpen} setimg={setimg} info={{title:"AED 450 - 10 Guests" , desc:"Majesty 33 ft. Yacht"}} />
        </div>
        <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        >
          <div className="wrapper sm:p-16 p-3 flex xl:flex-row flex-col justify-center  relative">
            <div className='w-10 h-10 rounded-full flex justify-center items-center text-xl bg-gray-400 text-white font-bold absolute top-0 right-0 cursor-pointer' onClick={()=>setIsOpen(false)}>X</div>
            <div className="info flex-1">
              {img&&<img className='w-60 h-40 rounded-3xl my-12' src={require(`../assets/images/Booking/${img}.png`)} alt="" />}
              <h3 className='md:text-5xl my-5 font-bold text-gray-700'>Rent with <br /> BIG LIO YACHT</h3>
              <p className='text-lg my-3 text-gray-400'>To rent a yacht or request a service, kindly fill this form. Our representative will get in touch with you shortly after we process your application!</p>
              <div className='text-xl my-3 text-gray-400'>Or, chat with us directly: <a href="https://wa.me/971522818678" className='text-nav font-bold'>WhatsApp</a></div>
            </div>
            <form className='flex flex-col flex-1 p-8' onSubmit={bookYacht}>
            <input onChange={(e)=>setbookingInfo((prev)=>({...prev , [e.target.name]:e.target.value }))} name="name" required type="text" className='border-2 my-3 border-gray-200 rounded-xl p-3 outline-none text-lg' placeholder='Name*'/>
            <div className='flex md:flex-row flex-col gap-3 justify-between'><input required name="code" type="text" className='md:w-1/3 w-full border-2 border-gray-200 rounded-xl p-3 outline-none text-lg' placeholder='Code*' onChange={(e)=>setbookingInfo((prev)=>({...prev , [e.target.name]:e.target.value }))}/> <input required name="phone" type="text" className='flex-1 border-2 border-gray-200 rounded-xl p-3 outline-none text-lg' placeholder='Phone Number*' onChange={(e)=>setbookingInfo((prev)=>({...prev , [e.target.name]:e.target.value }))}/></div>
            <input onChange={(e)=>setbookingInfo((prev)=>({...prev , [e.target.name]:e.target.value }))} name="email" required type="email" className='border-2 my-3 border-gray-200 rounded-xl p-3 outline-none text-lg' placeholder='Email*'/>
            <DatePicker className='w-full border-2 my-3 border-gray-200 rounded-xl p-3 outline-none text-lg' selected={bookingInfo.date} onChange={(date)=>setbookingInfo((prev)=>({...prev , date}))} showTimeSelect dateFormat="Pp" />
              <input onChange={(e)=>setbookingInfo((prev)=>({...prev , [e.target.name]:e.target.value }))} name="hours" required type="text" className='border-2 my-3 border-gray-200 rounded-xl p-3 outline-none text-lg' placeholder='Number of hours*' />
              <input onChange={(e)=>setbookingInfo((prev)=>({...prev , [e.target.name]:e.target.value }))} required name="guests" type="text" className='border-2 my-3 border-gray-200 rounded-xl p-3 outline-none text-lg' placeholder='Number of gusts*' />
              <p className='text-lg my-6 text-gray-400 text-center'>By clicking “Pre-Book”button you agree to the processing of your personal data</p>
              <div className='my-3 text-red-900 text-center text-lg'>{error}</div>
              <button type='submit' className='sm:py-5 py-2 sm:px-16 px-8 text-nav rounded-xl bg-gray-400 transition-all ease-linear duration-75 transform block w-fit mx-auto hover:scale-105 font-bold text-xl' href="/">Book Now</button>
          </form>
          </div>
      </Modal>
      </section>
      <Footer />
    </>
  )
}

export default Booking