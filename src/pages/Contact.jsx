import React, { useState } from 'react'

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { toast } from 'react-toastify';

function Contact() {
        const [supportInfo, setsupportInfo] = useState({})
      const emailConfig = {
      Username: "Leo.events.dubai@gmail.com",
    Password: "AC2E2B2031CC8A4939480C02C7BBF2C540B7",
      Host: "smtp.elasticemail.com",
      Post: 2525,
      To : 'Leo.events.dubai@gmail.com',
    From : "Leo.events.dubai@gmail.com",
      Subject : "LEO Yacht support",
        Body: `New booking from ${supportInfo.name}<br/><br/><br/>
        Email : ${supportInfo.email}<br/>
        Message : ${supportInfo.message}<br/>
        `
    }
    const support= (e)=>{
          e.preventDefault()
      if (window.Email) {
        window.Email.send(emailConfig).then(() => {
          setsupportInfo({
            email: "",
            name: "",
            message:"",
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
    <>
    <Nav />
      <main className='about'>
      <div className='relative'>
      {window.innerWidth>=640?<img className='header' src={require("../assets/images/Headers/146 1.png")} alt="" />:<img className='header' src={require("../assets/images/home/aboutMopile.png")} alt="" />}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
          <h3 className='sm:text-4xl text-2xl text-white font-bold p-3 bg-skyBlue w-fit uppercase'>Contacts</h3>
        </div>
      </div>
      </main>
      <section className='contact'>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed/v1/place?q=Dubai+-+United+Arab+Emirates&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" frameBorder="0" title='LEO Yachts' style={{ border: "0" ,width:"100%" , height:"100%"}} allowFullScreen></iframe>
        </div>
      </section>
      <section className='get-in-touch p-12'>
        <h3 className='text-4xl text-nav font-bold text-center uppercase'>GET IN TOUCH</h3>
        <div className="wrapper">
          <div className="separation gap-3 my-2 sm:my-5 mx-auto flex justify-center">
            <span className='first'></span>
            <span className='second'></span>
          </div>
          <p className='text-center text-gray-400'>We’re here to help! If you have any questions regarding our services or anything else drone related please send us an email via the contact form.</p>
          <form onSubmit={support} className='flex w-full justify-center lg:flex-row flex-col items-center gap-5 py-12 p-5 sm:px-24'>
            <textarea value={supportInfo.message}  placeholder='Message' name='message' required className='bg-gray-100 h-60 flex-1 outline-none p-6 w-full' onChange={(e)=>setsupportInfo((prev)=>({...prev , [e.target.name]:e.target.value}))}/>
            <div className='flex flex-col flex-1 h-60 justify-between w-full'>
              <input value={supportInfo.name} name='name' required type="text" className='bg-gray-100 p-6 outline-none w-full' placeholder='Your name*' onChange={(e)=>setsupportInfo((prev)=>({...prev , [e.target.name]:e.target.value}))}/>
              <input value={supportInfo.email} name='email' required type="email" className='bg-gray-100 p-6 outline-none my-3 w-full' placeholder='Your e-mail*' onChange={(e)=>setsupportInfo((prev)=>({...prev , [e.target.name]:e.target.value}))}/>
              <button type="submit" className='w-full bg-gray-400 lg:w-fit px-12 py-4 text-white text-xl font-bold  transition-all ease-linear duration-75 transform hover:scale-105'>Send message</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact