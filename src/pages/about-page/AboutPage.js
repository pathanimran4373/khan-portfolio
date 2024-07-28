import React from "react";
import "./about.css";

function AboutPage() {
  return (
    <>
      <section className="about">
        <h1 className="heading">about me</h1>
        <div className="content">
          <h3 className="name">
            my name is <span>Mohmad Imrankhan Pathan</span>
          </h3>
          <p>
            i'm front end developer.In present I am working for Bithub Technology Pune. This is my official portfolio website to
            showcase my all work related to web development.
          </p>
          <p>
            I am always eager to learn and stay
            updated with industry trends, continuously seeking opportunities to
            expand my knowledge and improve my craft. Collaboration and
            problem-solving are at the heart of my approach, and I enjoy working
            closely with designers, back-end developers, and other stakeholders
            to bring innovative ideas to life.Let's connect and create
            something amazing together!
          </p>
          <h3>my skills are...</h3>
        </div>
        <div className="skills">
          <div className="progress">
            <h3>HTML</h3>
          </div>
          <div className="progress">
            <h3>CSS</h3>
          </div>
          <div className="progress">
            <h3>Javascript</h3>
          </div>
          <div className="progress">
            <h3>React & Redux</h3>
          </div>
          <div className="progress">
            <h3>Next.js</h3>
          </div>
          <div className="progress">
            <h3>TypeScript</h3>
          </div>
          <div className="progress">
            <h3>Jest</h3>
          </div>
          <div className="progress">
            <h3>REST API</h3>
          </div>
          <div className="progress">
            <h3>NodeJS/ExpressJS</h3>
          </div>
          <div className="progress">
            <h3>Figma</h3>
          </div>
          <div className="progress">
            <h3>Adobe Photoshop</h3>
          </div>
          <div className="progress">
            <h3>Git/Github</h3>
          </div>

          <div className="progress">
            <h3>Bootstrap5</h3>
          </div>
          <div className="progress">
            <h3>SASS (CSS preprocessors)</h3>
          </div>
          <div className="progress">
            <h3>Taiwind CSS</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutPage;
