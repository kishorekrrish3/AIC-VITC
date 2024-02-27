import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <div className='about-container' id='about'>
            <h1 className='about-title'>
              About us
            </h1>
            <img src={require('../../assets/robot.png')} alt='robot' className='robot'/>
            <p className='about-content'>
            Artificial Intelligence club (AIC) is a very new club of VIT Chennai, dedicated to exploring the exciting world of artificial intelligence. Through Workshops, Tech Talks, Research Forums & Hackathons to show up your skills and improve the abilities to analyze, and develop your knowledge in this deep field. Our main goal is to serve as a vital link connecting academia with industry, facilitating collaboration and knowledge exchange between the academic realm and the dynamic world of industry.
            </p>
      </div>
    </div>
  )
}

export default About