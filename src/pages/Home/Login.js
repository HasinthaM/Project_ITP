import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Home/login1.css'

export default function Login() {
  return (
    <header className="App-header">
        <h1>Welcome</h1>
        <Link to="/destination">
            <button className='users-button'>Managers</button>
        </Link>
        
      </header>
  )
}
