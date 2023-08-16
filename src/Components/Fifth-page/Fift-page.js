import React from "react";
import "./Fifth-page.css";
import { Link } from "react-router-dom";

function FifthPage() {
  return (
    <div>
      <div class="project" id="project">
        <h1 class="heading">my projects </h1>
        <div class="lag">
          <ul>
            {/* <li>="https://pathanimran4373.github.io/fitnesswebsite.github.io/
                       " target="_blank">website for gym <br /><p>[ React, scss ]</p></=></li>
            <li>=" https://pathanimran4373.github.io/carwebsite.github.io/" target="_blank">website for car shop <br /><p>[ HTML, CSS, Bootstrap ]</p></=></li> */}
            <li><Link style={{ textDecoration: "none" }} to="https://flipcart-seven.vercel.app/" target="_blank">clone website of Flipcart <br />
                <p>[ React, Redux, Tailwind CSS ]</p></Link></li>
            <li><Link style={{ textDecoration: "none" }} to="https://gio-cinema.vercel.app/" target="_blank">Clone website of Jiocinema <br />
                <p>[ React, Redux, scss]</p></Link></li>
            <li><Link style={{ textDecoration: "none" }} to="https://meesho-liard.vercel.app/" target="_blank">Clone website of Meesho <br />
                <p>[ React Context API and Reducer, CSS ]</p></Link></li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="https://pathanimran4373.github.io/fitnesswebsite.github.io/"
                target="_blank"
              >
                website for gym <br />
                <p>[ React, SCSS ]</p>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="https://pathanimran4373.github.io/carwebsite.github.io/"
                target="_blank"
              >
                website for car shop <br />
                <p>[ HTML, CSS, Bootstrap ]</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
