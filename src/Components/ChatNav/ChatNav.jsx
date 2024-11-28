import React, { useState } from 'react'
import { BiCommentAdd } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx"
import "./ChatNav.css"
import ContactList from '../ContactList/ContactList';
import { GoX } from "react-icons/go";

const ChatNav = () => {
    //State to hide text while typing
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputTextChange = (event) => {

        event.preventDefault()

        setIsInputEmpty(event.target.value === "")
    }
    return (
        <nav className='chat-nav'>
            <div className='chat-search'>
                <div className='chat-options'>
                    <h1>Chats</h1>
                    <span className='chat-icons'>
                        <button className='button-icon'>
                            <BiCommentAdd className='light-gray-font'/>
                        </button>
                        <button className='button-icon'>
                            <BsThreeDotsVertical className='light-gray-font'/>
                        </button>
                        
                    </span>
                </div>
                <form className='new-message-form'>
                    <button className='search-button'>
                        <RxMagnifyingGlass />
                    </button>
                    <input type="text" id='search' name='search' />
                    { isInputEmpty &&
                        <label htmlFor="search" className='message-input-label'>
                            Search
                        </label>
                    }
                </form>
                <div className='chat-categories'>
                    <span className='pill' id='green-pill'>All</span>
                    <span className='pill'>Unread</span>
                    <span className='pill'>Favorites</span>
                    <span className='pill'>Groups</span>
                </div>
            </div>
            <ContactList/>
            <div className='download-banner'>
                <div className='banner-content'>
                    <FaWhatsapp className='green-icon'/>
                    <span>Get WhatsApp for Windows</span>
                </div>
                <button className='button-icon'>
                    <GoX className='light-gray-font'/>
                </button>
            </div>
    </nav>
    )
}

export default ChatNav