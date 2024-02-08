import React from "react";
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
      </section>
    </>
  );
}

export default ContactPage;
