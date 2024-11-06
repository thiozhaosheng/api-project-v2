import React from 'react'
import './API.css'

const API = () => {
  return (
    <div className='API'>
      <h1>A better way to discover flexible flights</h1>
      <p>Made for long-distance & budget travelers with flexible destinations and dates</p>
      <div className='flight-search container'>
        <div className='columns'>
          <div className="dropdowns">
            <select>
              <option>One way</option>
              <option>Round Trip</option>
            </select>

            <select className='filters'>
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>




          </div>



        </div>
      </div>
    </div>
    
  )
}

export default API
