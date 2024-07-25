import React from 'react'
import App from '../App'
import Hero from '../components/Hero'
import "./Whats_On.css"

import Hero_Image from "../assets/images/RH_Whats-On_Hero.webp"
import WhatsOnGridList from '../components/WhatsOnGridList'

const Whats_On = () => {
  return (
    <div>
      <App>
        <Hero
          title="Whats On"
          description={"We bring you the best beats and dining experiences unlike any other. Raise your glass and dance with us with some of Sydney’s biggest DJs on the decks."}
          backgroundImage={Hero_Image}
        />
        <WhatsOnGridList/>
      </App>
    </div>
  )
}

export default Whats_On
