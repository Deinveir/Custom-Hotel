import React from 'react'
import "./GmbBottomWidget.css"
import map_icon from "../assets/images/RH_Icon_Map.svg"
import globe_icon from "../assets/images/RH_Icon_Globe.svg"
import mail_icon from "../assets/images/RH_Icon_Mail.svg"
import phone_icon from "../assets/images/RH_Icon_Phone.svg"

const GmgBottomWidget = () => {
    return (
    <div className='gmb-container padding-m'>
      <div className='container row'>
        <div className='left-column column'>
            <h2 className='heading-h2 hgreen'>Find Us</h2>
            <ul className='margin-top-m'>
                <li>
                    <img src={map_icon} alt="" />
                    <p className='text'>69-73 Pitt St, Sydney NSW 2000</p>
                </li>
                <li>
                    <img src={phone_icon} alt="" />
                    <p className='text'>(02) 9252 6522</p>
                </li>
                <li>
                    <img src={mail_icon} alt="" />
                    <p className='text'>info@republichotel.com</p>
                </li>
                <li>
                    <img src={globe_icon} alt="" />
                    <p className='text'>www.republichotel.com</p>
                </li>
            </ul>
            <ul className='socials margin-top-l'>
               <a href=""><li className='badge-primary'><svg height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill='#fff' d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></li> </a>
               <a href=""><li className='badge-primary'><svg height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#fff' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></li> </a>
               <a href=""><li className='badge-primary'><svg height="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#fff' d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg></li> </a>
            </ul>
            <p className='text medium margin-top-l'>For enquiries feel free to send us a message.</p>
            <button className='btn btn-default margin-top-m'>Contact Us</button>
        </div>
        <div className='right-column column'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.00193629998!2d151.2061507757479!3d-33.86384097322857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae418ce9874b%3A0xe83cb082caac095!2sThe%20Republic%20Hotel!5e0!3m2!1sen!2sph!4v1721046392238!5m2!1sen!2sph" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default GmgBottomWidget
