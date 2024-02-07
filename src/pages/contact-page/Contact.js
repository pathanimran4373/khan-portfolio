import React from "react";
import "./contact.css";
function Contact({icon,title,value}) {
  return (
    <>
      <div class="icons">
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </>
  );
}

export default Contact;
