import React from 'react'
import App from '../App'
import Hero from '../components/Hero'
import ImageTextColumn from '../components/ImageTextColumn'
import ThreeGridSectionOverlay from '../components/ThreeGridSectionOverlay'
import "./Sportsbar.css"

import Hero_Image from "../assets/images/RH_Sportsbar_Hero.jpg"
import About_img from "../assets/images/RH_Sportsbar_About.jpg"
import Grid_Image_1 from "../assets/images/RH_Sportsbar_Gallery-1.jpg"
import Grid_Image_2 from "../assets/images/RH_Sportsbar_Gallery-2.jpg"
import Grid_Image_3 from "../assets/images/RH_Sportsbar_Gallery-3.jpg"
import Grid_Image_4 from "../assets/images/RH_Sportsbar_Gallery-4.jpg"
import Grid_Image_5 from "../assets/images/RH_Sportsbar_Gallery-5.jpg"
import Grid_Image_6 from "../assets/images/RH_Sportsbar_Gallery-6.jpg"

const Sportbar = () => {
  return (
    <div className='sportsbar-container'>
      <App sports={true}>
        <Hero
          title={"Sportsbar"}
          description={"Kick back upstairs in our brand new Sports Bar. Located on Level One, enjoy live-streaming sports, cold drinks, and great food."}
          backgroundImage={Hero_Image}
          btnLabel={"See Our Menu"}
          btnLink={"#menu-section"}
        />
        <ImageTextColumn
          title="Clock off time"
          meta="Republic Hotel"
          description={[
            "Your knock-off haven, game day hang out, out of office escape or quick lunch break stop in; our new Sports Bar located on Level One is made for everyone.",
            "Enjoy bites & beers as we pour from lunch ’til late. Sit back, relax and tune into your sporting flavour – from AFL to EPL, we’ll be broadcasting it live and loud. ",
            "Bookings for the Sports Bar (Level One) recommended. Walk ins welcome on Ground Floor, always. Get in early to nab your spot."
          ]}
          image={About_img}
          flexdirection="row"
          columnImageWidth="50%"
          columnContentWidth="50%"
          btnLabel={"Book Now"}
          btnLink={"#"}
        />
        <ThreeGridSectionOverlay
          itemNum={6}
          heading="Gallery"
          description=""
          title={[
            "Sports Bar",
            "Inna Lounge",
            "Taylors Rooftop",
            "Sports Bar",
            "Inna Lounge",
            "Taylors Rooftop"
          ]}
          meta="View Space"
          imageURL={[
            Grid_Image_1,
            Grid_Image_2,
            Grid_Image_3,
            Grid_Image_4,
            Grid_Image_5,
            Grid_Image_6
          ]}
          styling={{
            bgColor: "#fff",
            headingColor: "#000",
            navBg: "#005C4A",
            svgColor: "#fff"
          }}
        />
      </App>
    </div>
  )
}

export default Sportbar
