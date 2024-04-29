import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div className='nav-bar'>

        <div className="left-section">
            <h1 className='logo'>journyX</h1>
        </div>

        <div className="middle-section">

            <Link to="/">
              <button className='btn'>Home</button>
            </Link>
            
            <button className='btn'>Packages</button>
            <Link to="/attractions">
              <button className='btn'>Attractions</button>
            </Link>
            
            <button className='btn'>Vehical Rental</button>
            <button className='btn'>Contact</button>
        </div>

        <div className="right-section">
          <Link to='login1'>
            <button className='btn'>LogIn</button>
          </Link>
            
            <button className='btn'>LogUp</button>
        </div>

    </div>
  )
}
