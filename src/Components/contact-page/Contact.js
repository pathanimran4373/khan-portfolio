import React from 'react'
import './style.css'
function Contact(props) {
  return (
    <>
      

        <div class="icons">
          <span>{props.icon}</span>
          <h3>{props.title}</h3>
          <p>{props.value}</p>

        </div>

        

      

    </>
  )
}

export default Contact
