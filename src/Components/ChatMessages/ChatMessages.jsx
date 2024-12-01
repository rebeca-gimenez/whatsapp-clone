import React from 'react'
import Message from '../Message/Message'

const MessagesList = ({messages}) => {
    let messagesListJSX = messages.map(
        ( message )=>{
            return <Message  
                isSenderMe={message.isSenderMe}
                isFirstMessage={message.isFirstMessage}
                text={message.text} 
                hour={message.hourString}
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