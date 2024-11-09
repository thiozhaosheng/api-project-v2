import React,{useState} from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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

          <div className="input-area">
            <input className='input' placeholder='From'></input>
            <input className='input' placeholder='To'></input>
          </div>

          

          



        </div>
      </div>
    </div>
    
  )
}

export default API