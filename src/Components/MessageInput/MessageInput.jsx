import React, { useContext, useState } from 'react'
import './MessageInput.css'
import getNewMessageText from '../../helpers/getNewMessageText'
import { BiHappy } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSolidMicrophone } from "react-icons/bi"
import { IoPaperPlaneSharp } from "react-icons/io5"
import {ContactsContext} from '../../Context/ContactsContext'


const MessageInput = ({contactID}) => {
    const { addNewMessageToContact } = useContext(ContactsContext)

    //Handler for the sender to submit a message
    const handleSenderSendNewMessage = (event) => {

        event.preventDefault()

        const messages_jsx = event.target

        const new_text_message = getNewMessageText(messages_jsx)

        addNewMessageToContact(contactID, new_text_message)

    }

    //State to hide the microphone button when typing
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputTextChange = (event) => {

        event.preventDefault()

        setIsInputEmpty(event.target.value === "")
    }

    return (
        <div className='chat-message-input-box'>

            <div className='special-message-icons'>
                <span className='button-icon'>
                    <BiHappy className='medium-gray-font' />
                </span>
                <span className='button-icon'>
                    <AiOutlinePlus className='dark-gray-font'/>
                </span>
            </div>

            <form onSubmit={handleSenderSendNewMessage} className='new-message-form'>
                <input type="text" id='message' name='message' onChange={handleInputTextChange}/>
                { isInputEmpty &&
                    <label htmlFor="message" className='message-input-label'>
                        <span className='mobile-hide'>Type a </span>Message
                    </label>
                }

                { isInputEmpty
                    ? (<button type="button" className='button-icon'>
                        <BiSolidMicrophone className='medium-gray-font' />
                    </button>)
                    : (<button type="submit" className='button-icon'>
                        <IoPaperPlaneSharp className='send-icon medium-gray-font'/>
                    </button>)
                }
            </form>
        </div>
    )
}

export default MessageInput