import React from "react";
import "./project.css";
import { Link } from "react-router-dom";
function ProjectPage() {
  return (
    <>
      <div className="project-section" id="project">
        <h1 className="heading">my projects </h1>
        <div className="project-container">
            <ul>
            <li>
              <details className="project-details">
                <summary>
                  <Link to="https://flipcart-seven.vercel.app/" target="_blank">Flipkart [ React,Redux,Tailwind CSS] </Link>
                </summary>
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
                    Libraries: "@reduxjs/toolkit",
                    "framer-motion", "react", "react-icons", "react-paginate",
                    "react-redux", "react-router-dom",
                    "react-scrollbars-custom", "react-slick", "slick-carousel",
                    "tailwind-scrollbar"
                  </span>
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>
                  <Link to="https://gio-cinema.vercel.app/" target="_blank">Jio Cenema [React,Redux,SCSS]</Link>
                </summary>
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
                  Libraries: "@reduxjs/toolkit": "^1.9.1", "axios", "dayjs", "react",
                    "react-circular-progressbar", "react-dom", "react-icons",
                    "react-infinite-scroll-component",
                    "react-lazy-load-image-component", "react-player",
                    "react-redux", "react-responsive-carousel",
                    "react-router-dom", "react-select", "react-toastify", "sass"
                  </span>
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>
                  <Link to="https://meesho-liard.vercel.app/" target="_blank">Meesho [React,ContextApi,CSS]</Link>
                </summary>
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
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>
                  <Link to="https://gym-point.vercel.app/" target="_blank">Gym [React,SCSS]</Link>
                </summary>
                <p>
                  Our Gym Shop React app is a comprehensive fitness marketplace
                  built using React. Featuring a user-friendly
                  interface, the app offers easy navigation through a wide range
                  of gym equipment, apparel, supplements, and accessories. Key
                  features include personalized product recommendations, robust
                  search functionality. Users can
                  create profiles, track orders, and access informative content
                  related to fitness and health. The app is optimized for
                  performance and responsiveness, ensuring seamless browsing and
                  transactions across various devices.
                  <br></br>
                  <span className="techstack-spanTag">
                  Libraries: "react", "react-dom", "react-icons, "react-router-dom,
                    "react-script, "sass",
                  </span>
                </p>
              </details>
            </li>
            <li>
              <details className="project-details">
                <summary>
                  <Link to="https://car-shop-two.vercel.app/" target="_blank">car shop [Bootstrap5,HTML,CSS] </Link>
                </summary>
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
                  cross-device compatibility, ensuring responsivenes on desktops, laptops, tablets, and
                  smartphones. 
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
