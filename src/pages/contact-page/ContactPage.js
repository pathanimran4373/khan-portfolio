import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import Contact from "./Contact";
import { FaRegEnvelope, FaPhoneSquare, FaMapMarkerAlt } from "react-icons/fa";
function ContactPage() {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">contact me</h1>
        <div class="icons-container">
          <Contact
            icon={<FaRegEnvelope />}
            title="My Email"
            value="pathanimrankhan308@gmail.com"
          />
          <Contact
            icon={<FaPhoneSquare />}
            title="My Number"
            value="9021771954"
          />
          <Contact
            icon={<FaMapMarkerAlt />}
            title="My Address"
            value="Gondia,state.MAHARASTRA.. india 441801"
          />
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/mvonqbvv" method="POST">
            <input
              type="text"
              name="username"
              placeholder="name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              autoComplete="off"
              required
            />
            <textarea name="message" autoComplete="off" required></textarea>
            <input className="form-btn" type="submit" value="send" />
          </form>
        </div>
        <div className="share">
          <Link
            to="https://www.instagram.com/imrankhanpathan35/"
            target="_blank"
          >
            <i className="fa-brands fa-square-instagram"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/imran-khan-pathan-881375265/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to="https://github.com/pathanimran4373" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-square-whatsapp"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
