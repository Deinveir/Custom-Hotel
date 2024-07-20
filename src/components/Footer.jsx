import React from 'react'
import footer_logo from "../assets/images/RH_Logo_Green.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='row container'>
        <div className='column-1 column'>
            <img src={footer_logo} alt="" />
            <p className="text large">Stay updated on the latest news, exclusive offers, and upcoming events at The Republic Hotel.</p>
            <form action="">
                <input type="email" placeholder='Enter your email' className='text medium'/>
                <button className='btn btn-primary'>Subscribe</button>
            </form>
        </div>
        <div className='column-2 column'>
            <h4 className='heading-h4 margin-bottom-m'>Main</h4>
            <ul>
                <li><a className='text-link' href='#'>Home</a></li>
                <li><a className='text-link' href='#'>Functions</a></li>
                <li><a className='text-link' href='#'>What&apos;s On</a></li>
                <li><a className='text-link' href='#'>Sports</a></li>
                <li><a className='text-link' href='#'>Contact</a></li>
            </ul>
        </div>
        <div className='column-3 column'>
            <h4 className='heading-h4 margin-bottom-m'>Other</h4>
            <ul>
                <li><a className='text-link' href='#'>Privacy Policy</a></li>
                <li><a className='text-link' href='#'>Frequently Asked Questions</a></li>
            </ul>
        </div>
      </div>
      <div className='bottom-container light'>
        <div className='container bottom'>
          <div className='column'>
            <p className='text'>All Rights Reserved. Copyrights @2024.</p>
          </div>
          <div className='column'>
            <p className='text'>Built by: <strong>Denver</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
