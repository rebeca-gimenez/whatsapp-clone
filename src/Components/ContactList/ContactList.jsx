import React from 'react'
import { Link } from "react-router-dom"
import Contact from '../Contact/Contact'
import "./ContactList.css"
import contacts from "../../data/contactsData"

const ContactList = () => {
    return (
        <>
            <ul className='contact-list'>
            { contacts.map( ( contact )=>{
                const messages = contact.messagesList
                const lastMessage  = messages[messages.length-1]
                return (
                    <li key={contact.id} className='contact-item'>
                        <Link to={`/contact/${contact.id}`}>
                        <Contact
                            contactAvatar={contact.avatar}
                            contactName={contact.name}
                            lastHour={lastMessage.hourString}
                            bottomText={lastMessage.text} 
                            key={contact.id}
                        />
                        </Link>
                    </li>
                )
            })}
            </ul>
        </>
    )
}

export default ContactList