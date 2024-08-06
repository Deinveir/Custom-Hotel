import React from 'react'
import "./Taylors_Rooftop.css"
import Hero from '../components/Hero'
import ImageTextColumn from '../components/ImageTextColumn'
import ThreeGridSectionOverlay from '../components/ThreeGridSectionOverlay'
import App from '../App'

import Hero_Image from "../assets/images/RH_Taylors_Hero.jpg"
import About_img from "../assets/images/RH_Taylors_About.jpg"
import Grid_Image_1 from "../assets/images/RH_Taylors_Gallery-1.jpg"
import Grid_Image_2 from "../assets/images/RH_Taylors_Gallery-2.jpg"
import Grid_Image_3 from "../assets/images/RH_Taylors_Gallery-3.jpg"
import Grid_Image_4 from "../assets/images/RH_Taylors_Gallery-4.jpg"
import Grid_Image_5 from "../assets/images/RH_Taylors_Gallery-5.jpg"
import Grid_Image_6 from "../assets/images/RH_Taylors_Gallery-6.jpg"

const Taylors_Rooftop = () => {
  return (
    <div className='taylors-container'>
      <App taylors={true}>
        <Hero
          title={"Taylors Rooftop"}
          description={"Hit the heights and drink away your cares. Let’s reignite the night with good times and party like the ceiling can’t hold us."}
          backgroundImage={Hero_Image}
          btnLabel={"See Our Menu"}
          btnLink={"#"}
        />
        <ImageTextColumn
          title="Meet you at the top"
          meta="Republic Hotel"
          description={[
            "On the third floor you’ll find Taylor’s Rooftop, lifting the lid on The Republic – you could say, Taylor’s loves going topless. With a bar and pizza oven all situated in an open air haven, sit back, relax and enjoy a slice or three in style. When the day’s work is done, Taylor’s transforms into a rooftop dance floor with epic DJ’s and drinks a-flowing.",
            "Whether you’re grabbing a couple bites, mingling at the bar, or dancing under the stars, our rooftop is here for a good time, all the time. ",
            "Take the elevator all the way to the top. We’ll be waiting.",
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

export default Taylors_Rooftop