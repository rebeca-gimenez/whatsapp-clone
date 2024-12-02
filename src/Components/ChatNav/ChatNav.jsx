import React, { useState } from 'react'
import { BiCommentAdd } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx"
import "./ChatNav.css"
import ContactList from '../ContactList/ContactList';
import { GoX } from "react-icons/go";
import Sidebar from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

const ChatNav = () => {
    //State to hide text while typing
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputTextChange = (event) => {

        event.preventDefault()

        setIsInputEmpty(event.target.value === "")
    }

    const location = useLocation();

    // Contact should be hidden when on Mobile and path is not '/'
    const shouldHideWhenMobile = location.pathname === '/';
    return (
        <div className= {shouldHideWhenMobile ? 'chat-nav' : 'chat-nav mobile-hide'}>
            <div className='chat-search'>
                <div className='chat-options'>
                    <h1>Chats</h1>
                    <span className='chat-icons'>
                        <button className='button-icon'>
                            <BiCommentAdd className='medium-gray-font'/>
                        </button>
                        <button className='button-icon'>
                            <BsThreeDotsVertical className='medium-gray-font'/>
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
                    <GoX className='medium-gray-font'/>
                </button>
            </div>
            <Sidebar/>
    </div>
    )
}

export default ChatNav