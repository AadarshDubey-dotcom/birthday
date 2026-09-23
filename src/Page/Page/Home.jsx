import React from 'react'
import Hero from '../../component/herosection/hero.jsx'
import FallingText from '../../component/FallingText/FallingText.jsx'
import './Home.css'

function Home() {
  return (
    <div className='page'>
      <div className='page-content'>
        {/* Hero Section */}
        <Hero />

        {/* FallingText Component */}
        <FallingText
          text={`Happy Birthday Khushi 🎂✨ May your life always be bug‑free and your happiness scale to infinity 💖`}
          highlightWords={["Happy", "Birthday", "Khushi", "bug‑free", "happiness"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </div>
  )
}

export default Home
