import React from 'react'
import { Link } from "react-router-dom"
import { SlMagnifier } from "react-icons/sl"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaVideo } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import './ChatHeader.css'
import Contact from '../Contact/Contact'
import { FaArrowLeft } from "react-icons/fa";

const ChatHeader = ({contactAvatar, contactName, contactLastHour}) => {
  let contactStatus = `Last seen today at ${contactLastHour}`

  return (
    <div className='chat-header-box'>
      <Link className='button-icon go-back-arrow' to={'/'}><FaArrowLeft className='medium-gray-font'/></Link>
      <Contact
        contactAvatar={contactAvatar}
        contactName={contactName}
        contactLastHour={contactLastHour}
        bottomText={contactStatus}
      />
      <div className='contact-icons'>
        <button className='video-dropdown'>
          <FaVideo className='video-icon light-gray-font'/>
          <IoIosArrowDown className='arrow-down-icon light-gray-font'/>
        </button>
        <div className='chat-icons'>
          <button className='button-icon'>
            <SlMagnifier className='medium-gray-font'/>
          </button>
          <button className='button-icon'>
            <BsThreeDotsVertical className='medium-gray-font'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader