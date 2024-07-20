import React from 'react'
import About_img from "../assets/images/RH_Home_About.jpg"
import "./ImageTextColumn.css"

const ImageTextColumn = () => {
  return (
    <div>
      <div className='two-column-container'>
        <div className='container'>
          <div className='row'>
            <div className='column column-left'>
              <h2 className='hgreen heading-h2'>About Us/<span>Sydney</span></h2>
              <p className='text'>Since 1865, The Republic Hotel has hugged the corner of Pitt and Bridge Streets, at the heart of the Sydney CBD.</p>
              <p className='text'>As the city’s commercial centre has expanded around it, the Republic has grown up too, from a single-storey pub to a four-level landmark. On each floor you’ll find a distinctly different establishment, all under the banner of one Republic.</p>
              <p className='text'>At street level, we’re an escape from the bustling streets. Step inside for after-work catch ups, sports, burgers, and cold beers. Upstairs, be transported to a world of indulgent opulence with Inna, an intimate late night cocktail lounge. Enjoy light bites paired with expertly-crafted cocktails before ascending to our rooftop. Perched high among the city lights, where day blends into night with DJs, drinks, and dancing.</p>
              <p className='text'>We are all play, no work. We are, The Republic.</p>
            </div>
            <div className='column column-right'>
              <div>
                <img src={About_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTextColumn
