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
                return (
                    <li key={contact.id} className='contact-item'>
                        <Link to={`/contact/${contact.id}`}>
                        <Contact
                            contactAvatar={contact.avatar}
                            contactName={contact.name}
                            lastHour={contact.lastHour}
                            bottomText={contact.lastMessage} 
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