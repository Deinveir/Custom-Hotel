import React from 'react'
import "./Inna_Lounge.css"
import Hero from '../components/Hero'
import ImageTextColumn from '../components/ImageTextColumn'
import ThreeGridSectionOverlay from '../components/ThreeGridSectionOverlay'
import App from '../App'

import Hero_Image from "../assets/images/RH_Inna_Hero.jpg"
import About_img from "../assets/images/RH_Inna_About.jpg"
import Grid_Image_1 from "../assets/images/RH_Inna_Gallery-1.jpg"
import Grid_Image_2 from "../assets/images/RH_Inna_Gallery-2.jpg"
import Grid_Image_3 from "../assets/images/RH_Inna_Gallery-3.jpg"
import Grid_Image_4 from "../assets/images/RH_Inna_Gallery-4.jpg"
import Grid_Image_5 from "../assets/images/RH_Inna_Gallery-5.jpg"
import Grid_Image_6 from "../assets/images/RH_Inna_Gallery-6.jpg"

const Inna_Lounge = () => {
  return (
    <div className='inna-container'>
      <App inna={true}>
        <Hero
          title={"Inna Lounge"}
          description={"An intimate event space, perfect for every celebration. "}
          backgroundImage={Hero_Image}
          btnLabel={"See Our Menu"}
          btnLink={"#"}
        />
        <ImageTextColumn
          title="Feel the Elegance"
          meta="Republic Hotel"
          description={[
            "A new space. A new era. A one of a kind celebration.",
            "A space for those that enjoy the finer things in life. Whether a celebration for the ages or a small intimate function, we’re here for you to sip, savour and indulge.",
            "Enjoy a no obligations chat with our friendly functions team.",
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

export default Inna_Lounge
