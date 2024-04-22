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
            i'm front end developer. this is my official portfolio website to
            showcase my all work related to web development
          </p>
          <p>i am very passionate and dedicated to my work</p>
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
            <h3>Git</h3>
          </div>
          <div className="progress">
            <h3>Adobe Photoshop</h3>
          </div>
          <div className="progress">
            <h3>Model-View-Controller (MVC)</h3>
          </div>
          <div className="progress">
            <h3>Jira Tool</h3>
          </div>
          <div className="progress">
            <h3>Visual Studio Code (VS Code)</h3>
          </div>
          <div className="progress">
            <h3>Bootstrap5</h3>
          </div>
          <div className="progress">
            <h3>Sass (Syntactically Awesome Style Sheets)</h3>
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
