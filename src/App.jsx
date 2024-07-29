import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import GmgBottomWidget from './components/GmgBottomWidget'
import Footer from './components/Footer'
import ImageCta from './components/ImageCta'
import { useRef } from 'react'

function App( {children, showImageCta = true} ) {
  return (
    <div>
      <Navbar/>
      {children}
      { showImageCta ? <ImageCta
        heading="Book Now"
        description="Get comfortable in Sydney's finest setting and experience the atmosphere of our different spaces. Save your seat now."
        buttonLabel="Book Now"
        buttonLink="/booking"
        /> : null}
      <GmgBottomWidget/>
      <Footer/>
    </div>
  )
}

export default App
