import React, { useState, useEffect, useRef } from 'react';
import './Hero.css'
import video1 from '../../assets/video1.mp4'
import API from '../API Area/API';
import down_btn from '../../assets/down_btn.svg'
import arrow_btn from '../../assets/arrow_btn.png' // Old button functionality that may be used again.

const Hero = () => {

  const heroData = [
    {text1:"Drift",text2:"Flow with adventure" },
    {text1:"Soar",text2:"Lift your dreams" },
    {text1:"Roam",text2:"Uncover hidden gems" },

  ]

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % heroData.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [heroData.length]);


  return (
    <div className='hero container'>
      <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
      </video>

      <div className="hero-content fade-in">
        <p>{heroData[currentTextIndex].text1}</p>
        <p>{heroData[currentTextIndex].text2}</p>

        {/* This button is commented out and will not render */}
        {/* <button className="btn">Explore the horizons <img src={arrow_btn}  alt=""/>    </button> */}

        <img className="downbtn" src={down_btn} alt=""/> 
      </div>
      

      
      
    </div>
  )
}

export default Hero

