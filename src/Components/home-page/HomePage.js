import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import CV from '../../assets/cv.pdf'
function FirstPage() {
  return (
    <div>
      <section className="home_page">
        <div className="home_content">
          <h3>hi there...</h3>
          <h3 className="name">My name is <span>Mohmad Imrankhan</span></h3>
          <h3 className="post">I am a front end developer, I love my job and do well!  </h3><br />
          <p>	A result oriented professional with 2+ years of experience Front End/UI Developer   in “Bit Hub Technology Pvt. ltd.”  from Aug 2021 to Present & extensive experience in all the stages of Designing, Developing, Debugging. <br />My projects are...
          </p>

        </div>
        <div className="home_btn">
          <button className='btn'> <a href="project">Projects</a></button>
          <button className='btn'> <a href={CV} download>Download CV</a></button>
        </div>
      </section>

    </div>
  )
}

export default FirstPage
