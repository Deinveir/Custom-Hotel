import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css"

import Logo from "../assets/images/Republic-Hotel-Logo.png"
import Logo_2 from "../assets/images/RH_Logo_Green.png"

const Navbar = () => {
  const [dropbar, setDropBar] = useState(false);
  const [dropbarSticky, setDropBarSticky] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [animation, setAnimation] = useState(false);
  const root = document.querySelector('#root');
  const navContainer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      
      setSticky(root.scrollTop > 300);
    };
  
    root.addEventListener("scroll", handleScroll);

    return () => {
      root.removeEventListener("scroll", handleScroll);
    };
  }, [root]);

  return (
    <>
    <div
      className={`transparent navbar-container light`}
      onMouseLeave={() => {
        setDropBar(false);
      }}
      ref={navContainer}
    >
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
                      <button className={`btn btn-primary-inverse`}>
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

    <div
    className={`transparent navbar-container light sticky ${sticky ? "sticky-top" : ""}`}
    onMouseLeave={() => {
      setDropBar(false);
    }}
    ref={navContainer}
    >
    <div className='sub-container'>
      <div className='row'>
      <div className='navbar-left'>
          <img className='logo' src={sticky ? Logo_2 : Logo} alt="Republic Hotel logo" />
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
                    setDropBarSticky(true);
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
                    <button className={`btn ${sticky ? "btn-primary" : "btn-primary-inverse"}`}>
                        BOOK NOW
                    </button>
                </div>
            </ul>
            <div className={dropbarSticky ? "dropbar-show" : "dropbar"} onMouseLeave={()=>{
                    setDropBarSticky(false);
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
    </>
  )
}

export default Navbar