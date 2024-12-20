import React from 'react'
import "./Sidebar.css"
import { PiChatTextFill } from "react-icons/pi";
import { GrEmptyCircle } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6"
import { MdOutlineCall } from "react-icons/md";
import { RiChat3Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <div className='space-bar-icons top'>

        <div className='nav-button'>
          <button className='button-icon current-screen'>
            <PiChatTextFill className='medium-gray-font'/>
          </button>
          <span className='mobile-show'>Chats</span>
        </div>

        <div className='nav-button'>
          <button className='button-icon'>
            <GrEmptyCircle className='medium-gray-font mobile-hide'/>
            <RiChat3Line className='medium-gray-font mobile-show'/>
          </button>
          <span className='mobile-show'>Updates</span>
        </div>

        <button className='button-icon mobile-hide'>
          <BsChatDots className='medium-gray-font'/>
        </button>

        <div className='nav-button'>
          <button className='button-icon'>
            <FaUsers className='medium-gray-font'/>
          </button>
          <span className='mobile-show'>Communities</span>
        </div>

        <div className='nav-button mobile-show'>
          <button className='button-icon'>
            <MdOutlineCall className='medium-gray-font'/>
          </button>
          <span className='mobile-show'>Calls</span>
        </div>
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