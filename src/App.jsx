import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import GmgBottomWidget from './components/GmgBottomWidget'
import Footer from './components/Footer'
import ImageCta from './components/ImageCta'

import Inna_CTA from "./assets/images/RH_Inna_CTA.jpg"
import Sports_CTA from "./assets/images/RH_Sportsbar_CTA.jpg"
import Taylors_CTA from "./assets/images/RH_Taylors_CTA.jpg"

function App( {children, showImageCta = true, inna=false, sports=false, taylors=false} ) {
  const backgroundImg = sports ? Sports_CTA : inna ? Inna_CTA : taylors ? Taylors_CTA : "";
  return (
    <div>
      <Navbar/>
      {children}
      { showImageCta ? <ImageCta
        heading="Book Now"
        description="Get comfortable in Sydney's finest setting and experience the atmosphere of our different spaces. Save your seat now."
        buttonLabel="Book Now"
        buttonLink="/booking"
        backgroundImage={backgroundImg}
        /> : null}
      <GmgBottomWidget/>
      <Footer/>
    </div>
  )
}

export default App
