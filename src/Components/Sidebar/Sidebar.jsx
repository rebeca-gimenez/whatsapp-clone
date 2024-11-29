import React from 'react'
import "./Sidebar.css"
import { PiChatTextFill } from "react-icons/pi";
import { GrEmptyCircle } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";


const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <PiChatTextFill />
      <GrEmptyCircle />
      <BsChatDots />
      <FaUsers />
      <MdOutlineSettings />
    </aside>
  )
}

export default Sidebar