import React from 'react'
import "./ImageTextColumn.css"

const ImageTextColumn = ( {
  title,
  meta,
  description,
  btnLabel,
  btnLink,
  image,
  flexdirection,
  columnImageWidth,
  columnContentWidth,
  background
} ) => {
  const descriptions = description.map(item => <p key={item} className='text'>{item}</p>)
  return (
    <div>
      <div className='two-column-container' style={{
        background: background
      }}>
        <div className='container'>
          <div className='row' style={{
            flexDirection: flexdirection
          }}>
            <div className='column column-left' style={{
              width: columnContentWidth
            }}>
              <span>{meta}</span>
              <h2 className='hgreen heading-h2'>{title}</h2>
              {descriptions}
              {btnLabel ? <a href={btnLink} className='btn btn-primary margin-top-m'>{btnLabel}</a> : null}
            </div>
            <div className='column column-right column-image' style={{
              width: columnImageWidth
            }}>
              <div>
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTextColumn
