import React from 'react'
import { useRef, useState } from "react";
import { FaMusic } from "react-icons/fa"; 
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li><NavLink className='navbar-link' to='/' end>Home</NavLink></li>
        <li><NavLink className='navbar-link' to='/gallery'>Gallery</NavLink></li>
        <li><NavLink className='navbar-link' to='/qn'>Q&amp;N</NavLink></li>
        <li onClick={toggleMusic} className='music-icon'>
          <FaMusic size={22} color={isPlaying ? "red" : "black"} />
        </li>
      </ul>
      <audio ref={audioRef} src="/Happy_birthday_to_you_song.mp3" loop />
    </nav>
  )
}

export default Navbar
