import React from "react";
import "./project.css";

function ProjectPage() {
  return (
    <>
      <div className="project-section" id="project">
        <h1 className="heading">my projects </h1>
        <div className="project-container">
          <h2 className="project-heading">Industrial projects </h2>
          <ul>
            <li>
              <details className="project-details">
                <summary>Southern Hospitality Management</summary>
                <span className="techstack-spanTag">
                  Environment: React, Redux, HTML, CSS(Sass), Figma, Jira, Git,
                  NodeJS, Express.js, MongoDB, GitLab CI/CD, TDD, Jest, Yarn,
                  REST API Babel, ESLint, Webpack, Model-View-Controller (MVC),
                  Micro Services
                </span>
                <p>
                  Description: The 'Southern Hospitality Management' aims at
                  providing to manage their customer services and internal
                  management system. This application used to simplify their
                  hotel operations and accommodation like room- reservation,
                  room allocation and administrative task. The main purpose of
                  this application is to provide centralized user-friendly
                  platform that empower the hotel to streamline their operation
                  and enhance gest experience and optimize efficiency of their
                  staff.
                </p>
                <br />
                <p>
                As a front-end developer, I specialize in translating mockups and wireframes into responsive web pages, primarily utilizing React for single-page applications. Collaborating closely with the backend team, I seamlessly integrate front-end components with Node.js and Express.js within the MERN stack architecture. I employ Redux for efficient state management, ensuring smooth data flow between components. Additionally, I take charge of API integration, focusing on optimizing user experience through enhanced page load times and performance, as well as implementing fluid transitions and animations. My responsibilities extend to contributing to unit and integration testing, actively participating in code reviews, and meticulously documenting front-end code for improved maintainability. I prioritize continuous learning and keeping abreast of the latest front-end development trends and technologies to enhance my skill set.
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>Pharmacy CRM.</summary>
                <span className="techstack-spanTag">
                  Environment: Photoshop,HTML, CSS, Bootstrap, ES6 Fetures,
                  React, Redux, Node.js, Express.js, MongoDB, VS Code, Git,
                  npm,Babel,ESLint, Jest, Webpack, Docker, GitLab CI/CD,
                  Model-View-Controller (MVC).
                </span>
                <p>
                  The 'Pharmacy Management System' is designed to computerize
                  the transactional processes of medical distributors. Its goal
                  is to offer a user-friendly interface accessible to
                  individuals with limited computer knowledge. The interface is
                  equipped with intuitive controls, guiding users seamlessly
                  from login to report generation. The project comprises four
                  key modules: Purchasing Orders, Drug Sales, Stock Management,
                  and Report Generation. The overarching aim is to provide an
                  intuitive and seamless user experience.
                </p>
                <br/>
                <p>
                  As a UI developer I have design and develop the user interface
                  components using technologies such as React.js, HTML, CSS,
                  JavaScript and Bootstrap. I collaborate closely with backend
                  developers to integrate frontend interfaces with the Node.js
                  backend and MongoDB database. I ensure the user-friendly
                  nature of the application by creating intuitive and responsive
                  layouts, implementing navigation features, form validations,
                  and interactive elements. Additionally, I conduct thorough
                  testing of the frontend functionalities to guarantee seamless
                  user experiences across different devices and browsers.
                  Throughout the development process, I adhere to design
                  specifications, accessibility standards, and best practices in
                  UI/UX design to deliver a high-quality and visually appealing
                  application interface.
                </p>
              </details>
            </li>
          </ul>
        </div>
        <div className="project-container">
          <h2 className="project-heading">Personal projects </h2>
          <ul>
            <li>
              <details className="project-details">
                <summary>Flipkart [ React,Redux,Tailwind CSS]</summary>
                <p>
                  My clone Flipkart React app provides a modern e-commerce
                  experience with intuitive navigation and dynamic product
                  listings. It features a clean interface for easy browsing
                  through various product categories and detailed product
                  information. Robust search and filter functionality enable
                  quick product discovery. Users can create accounts for
                  personalized experiences, and a convenient shopping cart
                  allows for easy management of purchases. The app is responsive
                  across devices and optimized for performance with techniques
                  like code splitting and lazy loading to minimize load times.
                  <br></br>
                  <span className="techstack-spanTag">
                    Libraries: "@reduxjs/toolkit", "framer-motion", "react",
                    "react-icons", "react-paginate", "react-redux",
                    "react-router-dom", "react-scrollbars-custom",
                    "react-slick", "slick-carousel", "tailwind-scrollbar"
                  </span>
                  <br></br>
                  <a
                    href="https://flipcart-seven.vercel.app/"
                    target="_blank"
                    title="flipkart"
                  >
                    View Project
                  </a>
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>Jio Cenema [React,Redux,SCSS]</summary>
                <p>
                  My Clone JioCinema React app is a feature-rich streaming
                  platform built on React, offering users a comprehensive
                  entertainment experience. With a sleek and intuitive
                  interface, the app provides easy access to a diverse range of
                  movies, TV shows, and original content. Key features include
                  personalized recommendations, robust search functionality.
                  Users can create profiles, customize their preferences, and
                  enjoy content across multiple genres and languages. The app is
                  optimized for performance and responsiveness, ensuring smooth
                  streaming on various devices.
                  <br></br>
                  <span className="techstack-spanTag">
                    Libraries: "@reduxjs/toolkit": "^1.9.1", "axios", "dayjs",
                    "react", "react-circular-progressbar", "react-dom",
                    "react-icons", "react-infinite-scroll-component",
                    "react-lazy-load-image-component", "react-player",
                    "react-redux", "react-responsive-carousel",
                    "react-router-dom", "react-select", "react-toastify", "sass"
                  </span>
                  <br></br>
                  <a
                    href="https://gio-cinema.vercel.app/"
                    target="_blank"
                    title="GioCenema"
                  >
                    View Project
                  </a>
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>Meesho [React,ContextApi,CSS]</summary>
                <p>
                  Our Meesho React app is a versatile e-commerce platform
                  crafted using React, offering users a seamless shopping
                  experience. Featuring a clean and intuitive interface, the app
                  facilitates easy navigation through a diverse range of
                  products across categories like fashion, home decor,
                  electronics, and more. Key features include personalized
                  product recommendations, advanced search functionality, and
                  secure payment options. Users can create profiles, manage
                  orders, and engage with sellers directly. The app is optimized
                  for performance and responsiveness, ensuring smooth browsing
                  and transactions on various devices. With Meesho React, users
                  can discover, shop, and connect with sellers effortlessly,
                  making it an ideal destination for online shopping needs.
                  <br></br>
                  <span className="techstack-spanTag">
                    Libraries: "axios", "react", "react-dom", "react-icons",
                    "react-lazy-load-image-component", "react-modal",
                    "react-router-dom": , "react-scripts", "react-toastify",
                  </span>
                  <br></br>
                  <a
                    href="https://meesho-app-six.vercel.app/"
                    target="_blank"
                    title="meesho"
                  >
                    View Project
                  </a>
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>Gym [React,SCSS]</summary>
                <p>
                  Our Gym Shop React app is a comprehensive fitness marketplace
                  built using React. Featuring a user-friendly interface, the
                  app offers easy navigation through a wide range of gym
                  equipment, apparel, supplements, and accessories. Key features
                  include personalized product recommendations, robust search
                  functionality. Users can create profiles, track orders, and
                  access informative content related to fitness and health. The
                  app is optimized for performance and responsiveness, ensuring
                  seamless browsing and transactions across various devices.
                  <br></br>
                  <span className="techstack-spanTag">
                    Libraries: "react", "react-dom", "react-icons,
                    "react-router-dom, "react-script, "sass",
                  </span>
                  <br></br>
                  <a
                    href="https://fitnesshub-tby7.vercel.app/"
                    target="_blank"
                    title="gym"
                  >
                    View Project
                  </a>
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>Car shop [ReactJS,CSS]</summary>
                <p>
                  Summary: Our Bootstrap-based Car Shop website is a sleek and
                  responsive online platform designed to cater to car
                  enthusiasts. Featuring a modern and visually appealing
                  interface, the website offers users an immersive browsing
                  experience through a diverse range of automobiles. With
                  seamless navigation and intuitive filtering options, users can
                  easily explore various car models, specifications, and pricing
                  details. Key features include dynamic car listings,
                  interactive image galleries, and informative product
                  descriptions, providing users with comprehensive insights into
                  each vehicle. The website is optimized for performance and
                  cross-device compatibility, ensuring responsivenes on
                  desktops, laptops, tablets, and smartphones.
                  <br></br>
                  <a
                    href="https://car-shop-two.vercel.app/"
                    target="_blank"
                    title="car_shop"
                  >
                    View Project
                  </a>
                </p>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default ProjectPage;
