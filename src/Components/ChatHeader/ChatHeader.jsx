import React from 'react'
import { SlMagnifier } from "react-icons/sl"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaVideo } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import './ChatHeader.css'
import Contact from '../Contact/Contact'

const ChatHeader = ({contactAvatar, contactName, contactLastHour}) => {
  let contactStatus = `Last seen today at ${contactLastHour}`

  return (
    <div className='chat-header-box'>
      <Contact
        contactAvatar={contactAvatar}
        contactName={contactName}
        contactLastHour={contactLastHour}
        bottomText={contactStatus}
      />
      <div className='contact-icons'>
        <button className='video-dropdown'>
          <FaVideo className='video-icon medium-icon-1'/>
          <IoIosArrowDown className='arrow-down-icon medium-icon-1'/>
        </button>
        <div className='chat-icons'>
          <button className='button-icon'>
            <SlMagnifier className='light-gray-font'/>
          </button>
          <button className='button-icon'>
            <BsThreeDotsVertical className='light-gray-font'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader