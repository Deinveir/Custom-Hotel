import React from 'react'
import "./Functions.css"
import Hero from '../components/Hero'
import App from '../App'

import Functions_Hero from "../assets/images/RH_Functions_Hero.jpg"
import WhatsOnGridList from '../components/WhatsOnGridList'
import Inna_Lounge from '../assets/images/RH_Functions_Inna-Lounge.webp'
import Taylors from '../assets/images/RH_Functions_Taylors-Rooftop.webp'

const Functions = () => {
  return (
    <div>
        <App>
            <Hero
                title={"Functions"}
                description={"From intimate celebrations, to corporate functions and product launches, our specialist team are here to help make your event a success."}
                btnLabel={"Enquire Now"}
                btnLink={"#"}
                backgroundImage={Functions_Hero}
            />
            <div className='functions-grid-list-container'>
              <div className='container'>
                  <div className='row'>
                      <div className='column'>
                          <div className='grid-container'>
                              <ul>
                                <li className='grid-item'>
                                  <div>
                                      <picture>
                                          <img src={Taylors} alt=""/>
                                      </picture>
                                  </div>
                                  <div className='content'>
                                      <div>EVENTS</div>
                                      <h3 className='heading-h3'>TAYLORS ROOFTOP</h3>
                                      <p className='text'>Book our rooftop for groups up to 150 people, Monday–Saturday. Exclusive Sunday bookings available upon request.</p>
                                      <a className='btn btn-primary margin-top-s' href="#">View Functions</a>
                                  </div>
                                </li>
                                <li className='grid-item'>
                                  <div>
                                      <picture>
                                          <img src={Inna_Lounge} alt=""/>
                                      </picture>
                                  </div>
                                  <div className='content'>
                                      <div>EVENTS</div>
                                      <h3 className='heading-h3'>INNA LOUNGE</h3>
                                      <p className='text'>Host an intimate soiree for up to 70 guests, Tuesday – Saturday. Exclusive hire on Sundays and Mondays available upon request.</p>
                                      <a className='btn btn-primary margin-top-s' href="#">View Functions</a>
                                  </div>
                                </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
        </App>
    </div>
  )
}

export default Functions
