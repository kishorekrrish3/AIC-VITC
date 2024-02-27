import React from 'react'
import './faculty.css'

const Faculty = () => {
  return (
    <div className='faculty-container' id='team'>
        <h1 className='faculty-title'>
            Faculty Coordinators
        </h1>
        
        <div className='faculty-card-container'>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require('../../assets/faculty1.jpg')} alt="Avatar" className='faculty-img'/>
              </div>
              <div class="flip-card-back">
                <h1>Dr. Dhavakumar P</h1>
                <p>Assistant Professor Sr.</p>
                <p><b>Club Coordinator</b></p>
              </div>
            </div>
          </div> 
          
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={require('../../assets/faculty2.jpg')} alt="Avatar" className='faculty-img'/>
              </div>
              <div class="flip-card-back">
                <h1>Dr. Sivabalakrishnan</h1>
                <p>Program Chair</p>
                <p>Intg M.Tech CSE Business Analytics</p>
                <p><b>Club Coordinator</b></p>
              </div>
            </div>
          </div> 
        </div>
    </div>
    )
}

export default Faculty