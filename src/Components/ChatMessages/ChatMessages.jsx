import React from 'react'
import Message from '../Message/Message'

const MessagesList = ({messages}) => {
    let messagesListJSX = messages.map(
        ( message )=>{
            return <Message 
                id={message.id} 
                sender={message.sender}
                text={message.text} 
                hour={message.hour}
                status={message.status}
                key={message.id}
            />
        }
    )
    return (
        <div className='chat-messages-box'>
            {messagesListJSX}
        </div>
    )
}

export default MessagesList