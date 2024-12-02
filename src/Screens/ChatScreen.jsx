import React from 'react'
import './ChatScreen.css'
import ChatNav from '../Components/ChatNav/ChatNav'
import Sidebar from '../Components/Sidebar/Sidebar'
import Chat from '../Components/Chat/Chat'

const ChatScreen = () => {

  return (
    <div className='screen' >
      <Sidebar/>
      <ChatNav/>
      <Chat/>
    </div>
  )
}

export default ChatScreen