import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <section className="home_page">
        <div className="home_content">
          <h3>hi there...</h3>
          <h1 className="name">
            My name is <span>Mohmad Imrankhan</span>
          </h1>
          <h2 className="post">
            I am a front end developer, I love my job and do well!
          </h2>
          <br />

          <p>
            Hi, I'm Mo.Imrankhan, a passionate Front End Developer. I love for
            creating dynamic and engaging web experiences. Over the years, I
            have honed my skills in HTML, CSS, JavaScript, and modern frameworks
            like React. I strive to build websites that not only look great on
            any device but also provide a seamless user experience. My expertise
            extends to performance optimization, accessibility, and the latest
            web technologies, enabling me to deliver fast, accessible, and
            interactive web applications.
          </p>
        </div>
        {/* <div className="home_btn">
          <button className="btn">
            <Link to="/project">Projects</Link>
          </button>
          <button className="btn">
              Resume
          </button>
        </div> */}
      </section>
    </>
  );
}
export default HomePage;
