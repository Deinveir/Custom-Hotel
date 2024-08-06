import React from 'react'
import "./ImageCta.css"
import Events_Happy_Hour from "../assets/images/RH_Events_Happy-Hour.jpg"

const ImageCta = ( {
    heading,
    description,
    buttonLabel,
    buttonLink,
    backgroundImage,
} ) => {
  const bgImage = backgroundImage ? {background: `radial-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%), url(${backgroundImage}) center/cover`} : {};
  return (
    <div className='cta-container light' style={
      bgImage
    }>
      <div className='row container x-large'>
        <h2 className='heading-h2'>{heading}</h2>
        <p className='text'>{description}</p>
        <a to={buttonLink}>
          <button className='btn btn-primary-inverse margin-top-m'>{buttonLabel}</button>
        </a>
      </div>
    </div>
  )
}

export default ImageCta
