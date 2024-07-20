import React, { useState } from 'react'
import "./Home.css"
import Hero_Image from "../assets/images/Republic-Website-Banner-scaled.jpg"
import Hero from '../components/Hero'
import ImageTextColumn from '../components/ImageTextColumn'
import ThreeGridSectionOverlay from '../components/ThreeGridSectionOverlay'
import Grid_Image_1 from "../assets/images/RH_Home_Spaces-1.jpg"
import Grid_Image_2 from "../assets/images/RH_Home_Spaces-2.jpg"
import Grid_Image_3 from "../assets/images/RH_Home_Spaces-3.jpg"
import Grid_Image_4 from "../assets/images/RH_Home_Spaces-1.jpg"
import Grid_Image_5 from "../assets/images/RH_Home_Spaces-2.jpg"
import Grid_Image_6 from "../assets/images/RH_Home_Spaces-3.jpg"
import ImageCta from '../components/ImageCta'
import Events_Happy_Hour from "../assets/images/RH_Events_Happy-Hour.jpg"
import Events_State_of_Origin from "../assets/images/RH_Events_State-of-Origin.jpg"
import Events_Pizza from "../assets/images/RH_Events_Pizza.jpg"
import App from '../App'

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
 
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        );
        setScrollPosition(position);

        console.log(setScrollPosition)
    };
  return (
    <div>
      <App>
        <Hero
          backgroundImage={Hero_Image}
          title="Republic Hotel"
          meta="At The Republic Hotel Sydney"
          description="Four levels of distinctly different experiences under one iconic roof in the heart Sydney (corner of Pitt & Bridge St.)"
          btnLabel="Explore"
          btnLink=""
        />
        <ImageTextColumn/>
        <ThreeGridSectionOverlay
          itemNum={6}
          heading="Our Spaces"
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
        <ThreeGridSectionOverlay
          itemNum={6}
          heading="What’s On"
          description=""
          title={[
            "Happy Hour",
            "State of Origin",
            "Half-Priced Pizza",
            "Happy Hour",
            "State of Origin",
            "Half-Priced Pizza",
          ]}
          meta="View Event"
          imageURL={[
            Events_Happy_Hour,
            Events_State_of_Origin,
            Events_Pizza,
            Events_Happy_Hour,
            Events_State_of_Origin,
            Events_Pizza
          ]}
          styling={{
            bgColor: "#000",
            headingColor: "#fff",
            navBg: "#fff",
            svgColor: "#005C4A"
          }}
        />
        <ImageCta
        heading="Book Now"
        description="Get comfortable in Sydney's finest setting and experience the atmosphere of our different spaces. Save your seat now."
        buttonLabel="Book Now"
        buttonLink="/booking"
        />
      </App>
    </div>
  )
}

export default Home
