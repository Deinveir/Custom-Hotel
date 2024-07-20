import React, { useRef, useState } from 'react'
import Left_arrow from "../assets/images/arrow-left.svg"
import Right_arrow from "../assets/images/arrow-narrow-right.svg"
import "./ThreeGridSectionOverlay.css"

const ThreeGridSectionOverlay = ( {
  itemNum,
  heading, 
  description, 
  title, 
  meta, 
  content, 
  imageURL,
  styling = {bgColor: "", color: ""}
} ) => {
  const slider = useRef();
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  function NextSlide () {
    if (currentTranslate > -50){
      const newTranslate = currentTranslate - (100/6)
      setCurrentTranslate(newTranslate) 
      setSliderIndex(index => index + 1);

      slider.current.style.transform = `translatex(${newTranslate}%)`;
    }
  }

  function PreviousSlide () {
    if (currentTranslate < 0){
      const newTranslate = currentTranslate + (100/6)
      setCurrentTranslate(newTranslate) 
      setSliderIndex(index => index - 1);

      slider.current.style.transform = `translatex(${newTranslate}%)`;
    }
  }

  const gridItems = Array.from({length: itemNum}, (_, index) => (
    <div key={index} className={`carousel-item ${(sliderIndex+1) === index ? "active" : ""}`}>
      <div className='item-overlay'></div>
      <div>
        <picture>
          <img src={imageURL[index]} alt="" />
        </picture>
      </div>
      <div className='content'>
        <h3 className='heading-h3'>{title[index]}</h3>
        <div>{meta}</div>
      </div>
    </div>
  ));

  console.log();

  return (
    <div className='three-grid-container' style={{
      backgroundColor: styling.bgColor
    }}>
      <div className='row container'>
        <h2 className='heading-h2 hgreen' style={{
          color: styling.headingColor
        }}>{heading}</h2>
        {description ? <p>{description}</p> : ""}
        <div className='carousel-container light' ref={slider}>
          {gridItems}
        </div>
        <div className='navigation'>
            <div className='left-arrow nav' onClick={PreviousSlide} style={{
              background: styling.navBg
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="arrow-left">
              <path id="Icon" d="M19 12H5M5 12L12 19M5 12L12 5" stroke={styling.svgColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </svg>
            </div>
            <div className={`right-arrow nav`} onClick={NextSlide} style={{
              background: styling.navBg
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="arrow-narrow-right">
              <path id="Icon" d="M4 12H20M20 12L14 6M20 12L14 18" stroke={styling.svgColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              </svg>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ThreeGridSectionOverlay
