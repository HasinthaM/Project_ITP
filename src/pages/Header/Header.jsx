import React from 'react';
import '../../styles/Booking/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className='header'>
            <p className='logo'>journeyX</p>

            <div className='navlinks'>
                <a href='/'><div className='links'>Home</div></a>    
                <a href='/packages'><div className='links'>Packages</div></a> 
                <a href='/hotels'><div className='links'>Hotels</div></a>
                <a href='/events'><div className='links'>Events</div></a>
            </div>

            <div className='buttonsSet'>
                <button className='login'>Login</button>
                <button className='signup'>Sign Up</button>
            </div>

        </div>
    </div>
  )
}

export default Header