import React from 'react'
import "./Functions.css"
import Hero from '../components/Hero'
import App from '../App'

import Functions_Hero from "../assets/images/RH_Functions_Hero.jpg"

const Functions = () => {
  return (
    <div>
        <App>
            <Hero
                title={"Functions"}
                description={"From intimate celebrations, to corporate functions and product launches, our specialist team are here to help make your event a success."}
                btnLabel={"Enquire Now"}
                btnLink={"#"}
                backgroundImage={Functions_Hero}
            />
        </App>
    </div>
  )
}

export default Functions
