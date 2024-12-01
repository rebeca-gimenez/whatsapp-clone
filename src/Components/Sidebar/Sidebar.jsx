import React from 'react'
import "./Sidebar.css"
import { PiChatTextFill } from "react-icons/pi";
import { GrEmptyCircle } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6"


const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='space-vertical-icons top'>
        <button className='button-icon current-screen'>
          <PiChatTextFill className='medium-gray-font'/>
        </button>
        <button className='button-icon'>
          <GrEmptyCircle className='medium-gray-font'/>
        </button>
        <button className='button-icon'>
          <BsChatDots className='medium-gray-font'/>
        </button>
        <button className='button-icon'>
          <FaUsers className='medium-gray-font'/>
        </button>
      </div>
      <div className='space-vertical-icons'>
        <button className='button-icon'>
          <MdOutlineSettings className='medium-gray-font'/>
        </button>
        <FaCircleUser className='contact-avatar-icon lightest-gray-font'/>
      </div>
    </aside>
  )
}

export default Sidebar