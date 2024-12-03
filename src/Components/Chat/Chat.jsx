import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ContactsContext} from '../../Context/ContactsContext'
import ChatMessages from '../ChatMessages/ChatMessages'
import MessageInput from '../MessageInput/MessageInput'
import ChatHeader from '../ChatHeader/ChatHeader'
import getTheirLastMessageHourString from '../../helpers/getTheirLastMessageHourString'
import "./Chat.css"
import { useLocation } from 'react-router-dom';
import Home from '../Home/Home'

const Chat = () => {
    const { contact_id } = useParams()

    const { getContactById } = useContext(ContactsContext)

    const current_contact = getContactById(contact_id)

    //Get the last time they were 'active' || Encuentra la ultima vez que el usuario estuvo activo
    let current_contact_last_hour = ''
    
    if (current_contact) {
        current_contact_last_hour = getTheirLastMessageHourString(current_contact.messagesList)
    }
    
    const location = useLocation();

    // Chat should be hidden when on Mobile and path is '/'
    const shouldHideWhenMobile = location.pathname === '/';

    return (
    <section className= {shouldHideWhenMobile ? 'chat mobile-hide' : 'chat'}>
        {!current_contact
            ? (<Home/>
                )
            : (<>
                <ChatHeader 
                    contactAvatar={current_contact.avatar}
                    contactName={current_contact.name}
                    contactLastHour={current_contact_last_hour}/>
                <ChatMessages 
                    messages={current_contact.messagesList}/>
                <MessageInput contactID={contact_id} />
            </>)     
        }
    </section>
    )
}

export default Chat