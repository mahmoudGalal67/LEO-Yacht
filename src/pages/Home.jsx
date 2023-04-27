import React from 'react'

import Header from "../components/Header"
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { FaShip } from "react-icons/fa"

import Slider from "react-slick";

import "./home.css"
import { Link } from 'react-router-dom';

const settings = {
  autoplay: true,
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <section className='booking py-8 px-3 md:px-24'>
        <div className="wrappper flex lg:flex-row flex-col justify-center gap-5">
          <div className="card bg-skyBlue text-white">
            <img src={require("../assets/images/home/book yacht.jpg")} alt="" />
            <div className="info p-4 py-8 md:p-16 text-center">
              <h3 className='text-4xl font-bold my-4'>Browse Our Yachts</h3>
              <div className='text-gray-300 text-lg'>Yacht Rental from AED 650/hour.</div>
              <p className='my-3 p-4 text-lg'>Ready to start planning your dream yacht rental in Dubai? Browse our fleet of luxurious yachts to find the perfect one for your needs.</p>
              <Link to="/booking" className='flex gap-4 items-center py-2 sm:px-16 px-8 hover:bg-bookingBlue hover:text-white text-bookingBlue bg-gray-400 transition-all ease-linear duration-75 transform w-fit mx-auto hover:scale-105 font-bold text-2xl' href="/">
                <FaShip /> Book Now</Link>
            </div>
          </div>
          <div className="card bg-skyBlue text-white">
            <img src={require("../assets/images/home/book dol.jpg")} alt="" />
            <div className="info p-4 py-8  md:p-16 text-center">
              <h3 className='text-4xl font-bold my-4'>LEO DOLL HOUSE</h3>
              <div className='text-gray-300 text-lg'>Hand-crafted yacht rental deals</div>
              <p className='my-3 p-4 text-lg'>.Don’t miss out on our exclusive deals on yacht rentals in Dubai. Click here to see our current offers and start planning your dream cruise today.</p>
              <Link to="/dollHouse" className='flex gap-4 items-center py-2 sm:px-16 px-8 text-bookingBlue hover:bg-bookingBlue hover:text-white bg-gray-400 transition-all ease-linear duration-75 transform w-fit mx-auto hover:scale-105 font-bold text-2xl' href="/">
                <FaShip /> Book Now</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="clients text-white relative my-16">
          <img src={require("../assets/images/home/clients.jpg")} alt="" />
          <div className="info p-24 bg-nav absolute">
            <h3 className='lg:text-5xl sm:text-3xl text-md font-bold my-4 sm:my-8'>I Love My Clients,<br /> And They Love Me</h3>
            <div className="separation flex gap-3 my-2 sm:my-5">
              <span className='first'></span>
              <span className='second'></span>
            </div>
            <div className="slider sm:text-sm text-xs">
              <Slider {...settings}>
                <p>
                  “We had so much fun during the day of our meeting. The project turned out to be a real treasure for us because of your amazing job! I will recommend you to everyone!”
                </p>
                <p>
                  “It was the best experience ever in Dubai, the caption was very helpful and expert. Thanks fox LEO Yachts.”
                </p>
                <p>
                  “It’s was awesome i wish i could be there for so long❤️”
                </p>
                <p>
                  “The best Yachts rental company in GBR. Very excellent service. Good luck. It always delivers.”
                </p>
                <p>
                  “It was a great experience. and the instructors were also very professional. Highly recommended”
                </p>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="tour text-white  mt-24 mb-5">
          <div className="info p-20 py-36 w-full sm:w-1/2 right-0  top-0 sm:ml-auto">
            <h3 className='lg:text-5xl  text-3xl font-bold my-4 sm:my-8 text-nav'>Luxury tour on a <br /> Leo yacht</h3>
            <div className="separation flex gap-3 my-5">
              <span className='first'></span>
              <span className='second'></span>
            </div>
            <div className="sm:text-sm text-xs">
              <p className='text-gray-600 text-md'>
                When it comes to luxury, there’s simply no comparison to the majesty and splendour of a yacht charter and rental in Dubai. Imagine yourself on a beautiful yacht, sailing along the stunning coastline and taking in all the amazing sights that Dubai has to offer. With leo Yachts, you can make this dream a reality! We have a fleet of luxurious yachts that are perfect for any occasion.
              </p>
              <Link to="/contact" className='py-2 sm:px-16 px-5 text-nav bg-gray-400 transition-all ease-linear duration-75 transform w-fit my-5 block hover:scale-105 font-bold text-lg mx-auto sm:ml-auto' href="/">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="featured py-8 px-8 sm:px-24 bg-nav">
          <h3 className='lg:text-5xl text-white text-3xl  font-bold text-center my-5'>FEATURED SERVICES</h3>
          <div className="separation flex gap-3 my-2 sm:my-5  justify-center">
            <span className='first'></span>
            <span className='second'></span>
          </div>
          <div className="wrapper flex justify-center flex-wrap gap-5">
            <div className="item relative lg:w-5/12 w-10/12">
              <img src={require("../assets/images/home/Group 1000004863(1).jpg")} alt="" />
              <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center text-lg sm:text-4xl text-white font-bold'>Photo Shooting</div>
            </div>
            <div className="item lg:w-5/12 w-10/12 relative">
              <img src={require("../assets/images/home/Group 1000004864.jpg")} alt="" />
              <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center text-lg sm:text-4xl text-white font-bold'>DJ</div>
            </div>
            <div className="item lg:w-5/12 w-10/12 relative">
              <img src={require("../assets/images/home/Group 1000004865.jpg")} alt="" />
              <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center text-lg sm:text-4xl text-white font-bold'>Catering</div>
            </div>
            <div className="item lg:w-5/12 w-10/12 relative">
              <img src={require("../assets/images/home/Group 1000004866.jpg")} alt="" />
              <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center text-lg sm:text-4xl text-white font-bold'>singing</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home