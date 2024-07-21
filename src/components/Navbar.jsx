import React, { useState } from 'react'
import Logo from "../assets/images/Republic-Hotel-Logo.png"
import "./Navbar.css"

const Navbar = () => {
  const [dropbar, setDropBar] = useState(false);
  return (
    <div className='tranparent navbar-container light' onMouseLeave={()=>{
      setDropBar(false);
    }}>
      <div className='sub-container'>
        <div className='row'>
        <div className='navbar-left'>
            <img className='logo' src={Logo} alt="Republic Hotel logo" />
          </div>
          <div className='navbar-right'>
            <nav>
              <ul>
                  <li>
                    <a className='text-link-inverse' href="/">
                    Home
                    </a>
                  </li>
                  <li>
                    <a className='text-link-inverse' href="/venues" onMouseEnter={()=>{
                      setDropBar(true);
                    }}>
                    Venues
                    </a>
                  </li>
                  <li>
                    <a className='text-link-inverse' href="/functions">
                    Functions
                    </a>
                  </li>
                  <li>
                    <a className='text-link-inverse' href="/whats-on">
                    What&apos;s On
                    </a>
                  </li>
                  <li>
                    <a className='text-link-inverse' href="contact">
                    Contact
                    </a>
                  </li>
                  <div>
                      <button className='btn btn-primary-inverse'>
                          BOOK NOW
                      </button>
                  </div>
              </ul>
              <div className={dropbar ? "dropbar-show" : "dropbar"} onMouseLeave={()=>{
                      setDropBar(false);
                    }}>
                <ul>
                  <li><a href="/venues/sportsbar">Sportsbar</a></li>
                  <li><a href="/venues/inna-lounge">Inna Lounge</a></li>
                  <li><a href="/venues/taylors-rooftop">Taylors Rooftop</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar