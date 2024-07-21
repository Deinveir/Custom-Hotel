import React, { Children } from 'react'
import "./Venues.css"
import Hero from '../components/Hero'
import App from '../App'

import Hero_Image from "../assets/images/RH_Venues_Hero-2.jpg"
import ImageTextColumn from '../components/ImageTextColumn'
import Sportsbar from "../assets/images/RH_Venues_Sportsbar.jpg"
import Inna_Lounge from "../assets/images/RH_Venues_Inna-Lounge.jpg"
import Taylors_Rooftop from "../assets/images/RH_Venues_Taylors-Rooftop.jpg"

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
            <ImageTextColumn
              title="Clock off time"
              meta="Sportsbar"
              description={[
                "Your knock-off haven, game day hang out, out of office escape or quick lunch break stop in; our new Sports Bar located on Level One is made for everyone.",
                "Enjoy bites & beers as we pour from lunch ’til late. Sit back, relax and tune into your sporting flavour – from AFL to EPL, we’ll be broadcasting it live and loud.",
                "Bookings for the Sports Bar (Level One) recommended. Walk ins welcome on Ground Floor, always. Get in early to nab your spot."
              ]}
              image={Sportsbar}
              btnLabel={"View Venue"}
              btnLink={"#"}
              flexdirection={"row"}
              columnImageWidth="60%"
              columnContentWidth="40%"
            />
            <ImageTextColumn
              title="Feel the luxury"
              meta="Inna Lounge"
              description={[
                "A new space. A new era. A one of a kind celebration. A space for those that enjoy the finer things in life. Whether a celebration for the ages or a small intimate function, we’re here for you to sip, savour and indulge.",
                "Enjoy a no obligations chat with our friendly functions team."
              ]}
              image={Inna_Lounge}
              btnLabel={"View Venue"}
              btnLink={"#"}
              flexdirection="row-reverse"
              columnImageWidth="60%"
              columnContentWidth="40%"
              background={"#fff"}
            />
            <ImageTextColumn
              title="Meet you at the top"
              meta="Sportsbar"
              description={[
                "On the third floor you’ll find Taylor’s Rooftop, lifting the lid on The Republic – you could say, Taylor’s loves going topless. With a bar and pizza oven all situated in an open air haven, sit back, relax and enjoy a slice or three in style. When the day’s work is done, Taylor’s transforms into a rooftop dance floor with epic DJ’s and drinks a-flowing.",
                "Whether you’re grabbing a couple bites, mingling at the bar, or dancing under the stars, our rooftop is here for a good time, all the time.",
                "Take the elevator all the way to the top. We’ll be waiting."
              ]}
              image={Taylors_Rooftop}
              btnLabel={"View Venue"}
              btnLink={"#"}
              flexdirection={"row"}
              columnImageWidth="60%"
              columnContentWidth="40%"
            />
        </App>
    </div>
  )
}

export default Venues
