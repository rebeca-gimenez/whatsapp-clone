import React from 'react'
import { BiCommentAdd } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx"
import "./ChatNav.css"
import ContactsList from '../ContactsList/ContactsList';

const ChatNav = () => {
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
                <form className='chat-search-bar'>
                    <button>
                        <RxMagnifyingGlass />
                    </button>
                    <input type="text" />
                </form>
                <div className='chat-categories'>
                    <span className='pill' id='green-pill'>All</span>
                    <span className='pill'>Unread</span>
                    <span className='pill'>Favorites</span>
                    <span className='pill'>Groups</span>
                </div>
            </div>
            <ContactsList/>
            <div className='download-banner'>
                <FaWhatsapp />
                <span>Get WhatsApp for Windows</span>
            </div>
    </nav>
    )
}

export default ChatNav