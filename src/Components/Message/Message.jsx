import React from 'react'
import './Message.css'
import { GoTriangleDown } from "react-icons/go"
import { BiCheckDouble } from "react-icons/bi"
import { BiCheck } from "react-icons/bi"
import { LuClock } from "react-icons/lu"

const Message = ({isSenderMe, isFirstMessage, text, hour, status}) => {
  return (
    <div className={ 
      'message-bubble' +
      ( isFirstMessage ? ' first-message' : '') + 
      ( isSenderMe ? ' sender-me' : '') }>
      { isFirstMessage && <GoTriangleDown className='first-message-icon'/>}
      <div className='message-content'>
        <span className={
          'text-message' +
          ( text.length < 66 ? ' additional-padding' : '')}>
          {text}
        </span>
        <div className='text-data'>
          <span className='text-hour'>
            {hour}
          </span>
          <span className='message-icon'>
            {status==='viewed' && <BiCheckDouble className='icon-viewed'/>}
            {status==='not-viewed' && <BiCheckDouble/>}
            {status==='received' && <BiCheck/>}
            {status==='not-sent' && <LuClock/>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Message