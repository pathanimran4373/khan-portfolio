import React from 'react'
import './style.css'
function SecondPage() {
  return (
    <div>
      
      <section className="about" id="about"> 
            <h1 className="heading">about me</h1>
            <div className="content">
                <h3 className="name">my name is <span>Mohmad Imrankhan Pathan</span></h3>
                <p>i'm front end developer. this is my official portfolio website to showcase my all work related to web
                    development</p>
                <p>i am very passionate and dedicated to my work</p>
                <h3>my skills are...</h3>
            </div>

            <div className="skills">
                <div className="progress">
                    <h3>HTML <span>95%</span></h3>
                    <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                    <h3>CSS <span>85%</span></h3>
                    <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                    <h3>Javascript <span>65%</span></h3>
                    <div className="bar"><span></span></div>
                </div>

                <div className="progress">
                    <h3>React & Redux<span>65%</span></h3>
                    <div className="bar"><span></span></div>
                </div>
            </div>
        </section> 

    </div>
  )
}

export default SecondPage
