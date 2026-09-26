import React, { useEffect, useState } from 'react'
import Hero from '../../component/herosection/hero.jsx'
import FallingText from '../../component/FallingText/FallingText.jsx'
import './Home.css'

function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const receiveMessage = (event) => {
      setMessage(String(event.data))
    }

    giftChannel.subscribe('birthday-message', receiveMessage)

    return () => {
      giftChannel.unsubscribe('birthday-message', receiveMessage)
    }
  }, [])

  return (
    <div className='page'>
      <div className='page-content'>
        {message && <div className='live-message'>{message}</div>}

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
