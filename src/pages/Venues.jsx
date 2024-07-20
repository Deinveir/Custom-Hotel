import React, { Children } from 'react'
import "./Venues.css"
import Hero from '../components/Hero'
import App from '../App'

import Hero_Image from "../assets/images/RH_Venues_Hero-2.jpg"

const Venues = () => {
  return (
    <div>
        <App>
            <Hero
                backgroundImage={Hero_Image}
                title="Venues"
                description="Explore our unique hotel spaces: enjoy the excitement of our Sportsbar, dance to the rhythm on our Rooftop, or relax in the elegance of Inna Lounge."
                btnLabel={"Contact Us"}
                btnLink={""}
            />
        </App>
    </div>
  )
}

export default Venues
