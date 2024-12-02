import React from 'react'
import "./Sidebar.css"
import { PiChatTextFill } from "react-icons/pi";
import { GrEmptyCircle } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6"
import { MdOutlineCall } from "react-icons/md";

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <div className='space-bar-icons top'>
        <button className='button-icon current-screen'>
          <PiChatTextFill className='medium-gray-font'/>
          <span className='mobile-show'>Chats</span>
        </button>
        <button className='button-icon'>
          <GrEmptyCircle className='medium-gray-font'/>
          <span className='mobile-show'>Updates</span>
        </button>
        <button className='button-icon mobile-hide'>
          <BsChatDots className='medium-gray-font'/>
        </button>
        <button className='button-icon'>
          <FaUsers className='medium-gray-font'/>
          <span className='mobile-show'>Communities</span>
        </button>
        <button className='button-icon mobile-show'>
          <MdOutlineCall />
          <span className='mobile-show'>Calls</span>
        </button>
      </div>
      <div className='space-bar-icons mobile-hide'>
        <button className='button-icon'>
          <MdOutlineSettings className='medium-gray-font'/>
        </button>
        <FaCircleUser className='contact-avatar-icon lightest-gray-font'/>
      </div>
    </nav>
  )
}

export default Sidebar