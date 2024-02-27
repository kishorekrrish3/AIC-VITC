import React from 'react'
import './vision.css'

const Vision = () => {
  return (
    <div className='vision'>
      <div className='vision-container'>
        <h1 className='vision-title'>Our Vision</h1>
        <img src={require('../../assets/chart.png')} alt='chart' className='chart' />
      </div>  
    </div>
  )
}

export default Vision