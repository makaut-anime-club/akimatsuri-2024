import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'> 
      <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>About MAKAUT ANIME CLUB</h3>
        <h2>"I have no enemies and self respect" 
(say this before you walk in.)
</h2>
<p>We are a club of anime and manga enthusiasts from the main campus of MAKAUT (in-house), trying to enjoy a common hobby in a community together.</p>






<a href="../"> <button className='btn'>Donate For The Anime Club</button></a>
      </div>
    </div>
  
  )
}


export default About
