import React from 'react'

import Nav from "../components/Nav";
import Footer from "../components/Footer";


function Gallary() {
  return (
    <>
    <Nav />
    <main className='about'>
      <div className='relative'>
      {window.innerWidth>=640?<img className='header' src={require("../assets/images/Headers/Odyssey-2-P8-1024x683 1.png")} alt="" />:<img className='header' src={require("../assets/images/home/contactMopile.png")} alt="" />}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
          <h3 className='sm:text-4xl text-2xl text-white font-bold p-3 bg-skyBlue w-fit uppercase'>Gallery</h3>
        </div>
      </div>
    </main>
      <div className='p-4 sm:px-16'><img className='youtube w-full' src={require("../assets/images/gallary/div.png")} alt="" /></div>
      <div className="wrapper flex flex-wrap p-4 sm:p-16">
        <img className='w-1/3' loading='lazy' src={require("../assets/images/gallary/288797075_5109590532421451_1392805888430018495_n.png")} alt="" />
        <img className='w-1/3' loading='lazy' src={require("../assets/images/gallary/314926392_5513416282038872_7373931101439608589_n.png")} alt="" />
        <img className='w-1/3' loading='lazy' src={require("../assets/images/gallary/314968484_5513417758705391_4741830232216359307_n.png")} alt="" />
        <img className='w-1/3' loading='lazy' src={require("../assets/images/gallary/314981003_5513420145371819_8191359431148759392_n.png")} alt="" />
        <img className='w-1/3' loading='lazy' src={require("../assets/images/gallary/315001730_5513415195372314_4994100031302921602_n.png")} alt="" />
        <img className='w-1/3' loading='lazy' src={require("../assets/images/gallary/315956380_5542211775825989_3119632938915137703_n.png")} alt="" />
      </div>
      <Footer />
    </>
  )
}

export default Gallary