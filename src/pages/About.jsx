import React from 'react'

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <Nav />
    <main className='about'>
      <div className='relative'>
      {window.innerWidth>=640?<img className='header' src={require("../assets/images/Headers/Odyssey-2-P8-1024x683 1.png")} alt="" />:<img className='header' src={require("../assets/images/home/contactMopile.png")} alt="" />}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
          <h3 className='sm:text-4xl text-2xl text-white font-bold p-3 bg-skyBlue w-fit uppercase'>About us</h3>
        </div>
      </div>
    </main>
    <section className='who-we-are sm:p-24 p-8'>
        <div className="wrapper flex xl:flex-row flex-col xl:gap-24 gap-8 justify-center items-center">
          <img className='w-96' loading='lazy' src={require("../assets/images/about/311713163_5464499980263836_6084277265069733151_n 1.png")} alt="" />
          <div className='info p-3 sm:p-16'>
            <h3 className='text-lg font-bold my-3'>WHO WE ARE?</h3>
            <p className='my-3 text-gray-500'><span className='text-skyBlue'>LEO YACHTS</span> makes sure to provide its clients with the best, keeping them in the center of attention for an extremely unique experience. With just a few clicks, you can now easily rent your boat/ yacht in Dubai</p>
            <p className='my-3 text-gray-500'>We aim to provide you with a high quality service in order to make your Jet Ski or Flyboard experience one of the best in Dubai. This is the reason why being specialized let us help you in your research of a quality Jet Ski rental or Flyboard ride.</p>
            <p className='my-5'>To reach our goal of providing high quality services, we focus our efforts on :</p>
            <div className='my-3 text-gray-500 flex gap-3 items-center'><img src={require("../assets/images/about/.png")} alt="" /><p>Best equipment on the market.</p></div>
            <div className='my-3 text-gray-500 flex gap-3 items-center'><img src={require("../assets/images/about/.png")} alt="" /><p>Professional and experienced jetski & Flyboard team and instructors.</p></div>
            <div className='my-3 text-gray-500 flex gap-3 items-center'><img src={require("../assets/images/about/.png")} alt="" /><p>Quality service to customers.</p></div>
          </div>
      </div>
    </section>
    <section className='sm:p-24 p-8'>
        <div className="wrapper xl:flex-row-reverse flex  flex-col xl:gap-24 gap-8 justify-center items-center">
          <img className='w-96' loading='lazy' src={require("../assets/images/about/311795075_5464500550263779_201867242044688738_n 1.png")} alt="" />
          <div className='info p-3 sm:p-16'>
            <div className='my-6'>
              <h3 className='my-3 text-3xl text-blue-950 font-bold'>Our Mission</h3>
              <p className='text-gray-500'>From corporate events to family outings, leo  Yachts has selected the finest charter yachts offering both luxury and fun, along with expert captains and crews to guide you through your sailing journey. Customer satisfaction has always been our highest priority, as we believe that nothing compares to seeing our clients enjoy their cruise on one of our hand-picked yachts. And that’s exactly where our attention to value, dedication, and small details sets us apart.</p>
            </div>
            <div className='my-6'>
              <h3 className='my-3 text-3xl text-blue-950 font-bold'>Our vision</h3>
              <p className='text-gray-500'>As a yacht charter company in Dubai, we have more than one yacht to choose from, to suit all the needs of our customers, we are committed to ensuring that you get the most out of this completely unique experience, from water sports for pure enjoyment to luxury yachts that allow you to explore the seas of Dubai in a new way Altogether, an experience that will make you never want to leave.</p>
            </div>
          </div>
      </div>
      </section>
      <Footer />
    </>
  )
}

export default About