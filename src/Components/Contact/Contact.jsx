import React from 'react'
import { FaCircleUser } from "react-icons/fa6"
import "./Contact.css"

const Contact = ({contactAvatar, contactName, lastHour, bottomText}) => {

  return (
    <div className="contact-box">
        <div className='contact-avatar'>
          {contactAvatar ? <img className='contact-picture' src={contactAvatar} alt={contactName + 'profile picture'} /> : <FaCircleUser className='contact-avatar-icon lightest-gray-font'/>}
        </div>
        <div className='contact-info'>
          <div className='contact-info-top'>
            <h3 className='contact-info-name'>{contactName}</h3>
            {lastHour && <span className='contact-info-hour'>{lastHour}</span>}
          </div>
          <span className='contact-info-text'>{bottomText}</span>
        </div>
    </div>
  )
}

export default Contact