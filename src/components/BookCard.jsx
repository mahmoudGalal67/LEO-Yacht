import React from 'react'

function BookCard({info , setIsOpen , setimg}) {
  
  const setModel = ()=>{
    setIsOpen(true)
    setimg(info.desc)
  }  
  
  return (
    <div className="book-card bg-skyBlue my-4">
      <img src={require(`../assets/images/Booking/${info.desc}.png`)} alt="" loading='lazy'/>
      <div className="info p-8 text-center text-white text-xl">
        <div className='font-bold'>{info.title}</div>
        <p className='my-3'>{info.desc}</p>
        <button onClick={setModel} className='font-bold text-2xl hover:text-bookingBlue'>Book Now</button>
      </div>
    </div>
  )
}

export default BookCard