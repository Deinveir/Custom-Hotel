import React from 'react'
import "./Hero.css"

const Hero = ( {backgroundImage, title, meta, description, btnLabel, btnLink} ) => {
  return (
    <div className='hero-container light' style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
      <div className='overlay'>
        </div>
        <div className='container row'>
          <div className='heading'>
              <h1 className='heading-h1'>{title}</h1>
              <span className='heading-h3'>{meta}</span>
          </div>
          <p className='x-large text'>{description}</p>
          <a href={btnLink} className='btn btn-default-inverse'>{btnLabel}</a>
      </div>
    </div>
  )
}

export default Hero
