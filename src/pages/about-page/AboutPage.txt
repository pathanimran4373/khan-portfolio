import React from "react";
import "./about.css";

function AboutPage() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">about me</h1>
        <div className="content">
          <h3 className="name">
            my name is <span>Mohmad Imrankhan Pathan</span>
          </h3>
          <p>
            i'm front end developer. this is my official portfolio website to
            showcase my all work related to web development
          </p>
          <p>i am very passionate and dedicated to my work</p>
          <h3>my skills are...</h3>
        </div>
        <div className="skills">
          <div className="progress">
            <h3>
              HTML <span>65%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              CSS <span>75%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Javascript <span>70%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              React & Redux<span>70%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Git<span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
            Adobe Photoshop<span>70%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
            Model-View-Controller (MVC)<span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
            Postman for API testing<span>70%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
            Visual Studio Code (VS Code)<span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Bootstrap5<span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
            Sass (Syntactically Awesome Style Sheets)<span>75%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
           Taiwind CSS<span>60%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutPage;
