import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ContactsContext} from '../../Context/ContactsContext'
import ChatMessages from '../ChatMessages/ChatMessages'
import MessageInput from '../MessageInput/MessageInput'
import ChatHeader from '../ChatHeader/ChatHeader'
import "./Chat.css"

const Chat = () => {
    const { contact_id } = useParams()

    const { getContactById } = useContext(ContactsContext)

    const current_contact = getContactById(contact_id)
    
    console.log(current_contact)
    return (
    <section className='chat'>
        {!current_contact
            ? (<ChatHeader 
                    contactName={"No hay contacto"}/>
                )
            : (<>
                <ChatHeader 
                    contactAvatar={current_contact.avatar}
                    contactName={current_contact.name}
                    contactLastHour={current_contact.lastHour}/>
                <ChatMessages 
                    messages={current_contact.messagesList}/>
                <MessageInput contactID={contact_id} />
            </>)     
        }
    </section>
    )
}

export default Chat