import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className='logo-container'>
          <img src={require('../../assets/vit-logo.png')} className='vit-logo' alt='vit-logo' />
          <img src={require('../../assets/aic-logo.png')} className='aic-logo' alt='aic-logo' />
        </div>
        <div className='home-container'>
            <h1 className='home-title'>Artificial Intelligence Club</h1>
            <p className='home-content'>VIT Chennai</p>
        </div>
    </div>
  )
}

export default Home