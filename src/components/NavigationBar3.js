import React from 'react'
import './navbar2.css'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div className='nav-bar2'>

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

        <div>
            
        </div>

    </div>
  )
}
