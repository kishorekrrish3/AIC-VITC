import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
    <div className='footer-container'>
        <div className='about-ai'>
            <h2 className='about-ai-title'>About AI</h2>
            <p className='about-ai-content'>Artificial Intelligence (AI), is a field of computer science that focuses on creating systems and machines capable of performing tasks that typically require human intelligence, such as learning, problem-solving, and decision-making.</p>
        </div>    
    <div className='vertical-line-1'/> 
    <div className='updates'>
        <h2 className='updates-title'>Updates</h2>
        <p className='updates-recruitment'>Recruitments</p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScCAv9B_zMEIKMOocpKKE4k3T19gEMH_kqBoLnPOqtAE_kfUA/viewform' target='_blank'><p className='click'>Click here!</p></a>
        <p className='updates-hackathon'>Hackathon</p>
        <p className='coming-soon'>Coming soon!</p>
    </div>
    <div className='follow-us'>
        <h2 className='follow-us-title'>Follow us</h2>
        <div className='follow-us-content'>
          <a href='https://www.github.com' target='_blank' className='icon-link'><FaGithub className='github-icon' /></a>
          <a href='https://www.instagram.com/aiclubvitc/' target='_blank' className='icon-link'><FaSquareInstagram className='instagram-icon' /></a>
          <a href='https://www.linkedin.com/in/aiclubvitc/' target='_blank' className='icon-link'><FaLinkedin className='linkedin-icon' /></a>    
          <a href='/' className='icon-link'><IoMail className='mail-icon' /></a>
        </div>
    </div>
    
    </div>
    <div className='footer-2'>
    <div className='footer-2-content'>
      <p className='copywrite'>Copyright © 2024 Artificial Intelligence Club (AIC) - VIT Chennai</p>
      <p className='credits'>Designed by Kishore</p>
    </div>
    </div>
  </div>
  )
}

export default Footer