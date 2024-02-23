import React from "react";
import "./contact.css";
import { FaRegEnvelope, FaPhoneSquare, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    icon: <FaRegEnvelope />,
    title: "My Email",
    value: "pathanimrankhan308@gmail.com"
  },
  {
    id: 2,
    icon: <FaPhoneSquare />,
    title: "My Number",
    value: "9021771954"
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "My Address",
    value: "Gondia, state. MAHARASHTRA, India 441801"
  }
];

const Contact = React.memo(({ icon, title, value }) => {
  return (
    <div className="icons">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
});

const ContactPage = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">contact me</h1>
      <div className="icons-container">
        {contactInfo.map(contact => (
          <Contact
            key={contact.id}
            icon={contact.icon}
            title={contact.title}
            value={contact.value}
          />
        ))}
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
  );
}

export default ContactPage;


