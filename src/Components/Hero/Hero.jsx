import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>'AKIMATSURI' 2024'</h1>
        <p>presented by 'THE ANIME CLUB'</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScmkuIGGKVrCcuKt_QZW7MVXfqEdljNuyxg_ZEuRJVBrsNltA/viewform?usp=sf_link"> <button className='btn'>Book Your Seat Now</button></a>
      </div>
    </div>
  )
}

export default Hero
