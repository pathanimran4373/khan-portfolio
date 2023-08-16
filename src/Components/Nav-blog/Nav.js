// import React, { useState } from 'react'
import { useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import './Nav.css'
import img from '../../img/new_img1.jpg'
// import { GiHamburgerMenu } from 'react-icons/gi';
function Nav() {
  // const [Hicon, ShowIcon]=useState(false);
  const navRef = useRef();
  const showNavbar = ()=> {  
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div>
      <header className= "hed">
      <button className='nav-btn' onClick={showNavbar}><FaBars/></button>

        <div className="user">
          <img src={img} alt="imran" />
          <h3 className="name">Mohmad Imrankhan</h3>
          <p className="post">front end developer</p>
        </div>
        <nav className="navbar" ref = {navRef}>
          <Link className="menu" to="/">HOME</Link>
          <Link className="menu" to="about">ABOUT</Link>
          <Link className="menu" to="education">EDUCATION</Link>
          <Link className="menu" to="contact">CONTACT</Link>
          <Link className="menu" to="project">PROJECT</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
        </nav>


      </header>


    </div>
  )
}

export default Nav
