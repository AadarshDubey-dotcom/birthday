import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='navbar-link' onClick={() => window.location.href = '/'}>Home</li>
        <li className='navbar-link' onClick={() => window.location.href = '/gallery'}>Gallery</li>
        <li className='navbar-link' onClick={() => window.location.href = '/qn'}>Q&N</li>
        <li className='navbar-link' onClick={() => window.location.href = '/music'}>Music</li>
      </ul>
    </nav>
  )
}

export default Navbar
