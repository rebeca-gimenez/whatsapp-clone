import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ContactsContext} from '../../Context/ContactsContext'
import ChatMessages from '../ChatMessages/ChatMessages'
import MessageInput from '../MessageInput/MessageInput'
import ChatHeader from '../ChatHeader/ChatHeader'
import getTheirLastMessageHourString from '../../helpers/getTheirLastMessageHourString'
import "./Chat.css"

const Chat = () => {
    const { contact_id } = useParams()

    const { getContactById } = useContext(ContactsContext)

    const current_contact = getContactById(contact_id)

    //Get the last time they were 'active' || Encuentra la ultima vez que el usuario estuvo activo
    let current_contact_last_hour = ''
    
    if (current_contact) {
        current_contact_last_hour = getTheirLastMessageHourString(current_contact.messagesList)
    }
    
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