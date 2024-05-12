import React from 'react'
import '../../styles/Home/login2.css'
import { Link } from 'react-router-dom'

export default function Login2() {
  return (
    <div className='login2-body'>
        <h1>Admin Panel</h1>

        <div className='login2-container'>
            <button className='login2-content'>
                <h3>Employee</h3>
            </button>

            <Link to='/destination'>
                <button className='login2-content'>
                    <h3>Destination</h3>
                </button>
            </Link>    
            
            <button className='login2-content'>
                <h3>Rental</h3>
            </button>

            <button className='login2-content'>
                <h3>Package</h3>
            </button>

            <button className='login2-content'>
                <h3>Payment</h3>
            </button>

            <button className='login2-content'>
                <h3>Operation</h3>
            </button>

            <button className='login2-content'>
                <h3>Booking</h3>
            </button>

            <button className='login2-content'>
                <h3>Feedback</h3>
            </button>

        </div>
        
    </div>
  )
}
