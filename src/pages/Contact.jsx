import React from 'react'
import App from '../App'
import Hero from '../components/Hero'
import Contact_Form from '../components/Contact_Form'

import Hero_Image from "../assets/images/RH_Contact_Hero.png"

const Contact = () => {
  return (
    <div className='contact'>
      <App showImageCta = {false}>
        <Hero
          title={"Contact Us"}
          backgroundImage={Hero_Image}
          meta={"Fill out the form below for more information."}
          description={<Contact_Form/>}
        />
      </App>
    </div>
  )
}

export default Contact
