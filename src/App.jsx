import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar.jsx'
import Home from './Page/Page/Home.jsx'
import Gallery from './Page/Gallery/Gallery.jsx'  
import QNA from './Page/QNA/QNA.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/qn" element={<QNA />} /> 
      </Routes>
    </>
  )
}

export default App
