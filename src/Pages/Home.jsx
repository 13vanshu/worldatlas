import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import About from './About';
import Contact from './Contact';
import './Home.css';
import Country from './Country';

const Home = () => {
  return (
    <>
      <main className='hero-section main'>
        <div className='container grid grid-two-cols'>
          <div className='hero-content'>
            <h1 className='heading-xl'>
              Explore the World,One Country at a Time.
            </h1>
            <p className='paragraph'>
              Discover the history, culture, and geography of every nation. Sort,
              search, and learn about countries around the globe with our comprehensive
            </p>
            <button className='btn'>
              Start Explore <FaLongArrowAltRight />
            </button>
          </div>
          <div className='hero-image'>
            <img src='/images/world.jpg' alt='World is beauty' className='banner-image'/>
          </div>
        </div>
        <About />
        <Country />
        <Contact />
      </main>
    </>
  )
}

export default Home
