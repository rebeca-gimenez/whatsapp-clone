import { createContext, useState } from "react"
import contacts from "../data/contactsData"
import getNewMessageID from "../helpers/getNewMessageID"
import getFormattedHour from '../helpers/getFormattedHour'
import getCurrentDateString from '../helpers/getCurrentDateString'
import evaluateIfFirstMessage from '../helpers/evaluateIfFirstMessage'

const ContactsContext = createContext();

const ContactsContextProvider = ({children}) => {
    const [contacts_state, setContactsState] = useState(contacts)


    const getContactById = (contact_id) => {
        return contacts_state.find(contact => contact.id === Number(contact_id))
    }

    const addNewMessageToContact = (contact_id, text) => {
        //Clone the contacts array || Clonar el array
        const updated_contacts = [...contacts]

        //Create function to return boolean || Crear funcion para retornar boolean
        function isContact(aContact) { 
            //Find the contact to add the message to
            const current_contact = getContactById(contact_id)
            return aContact == current_contact
        }

        //Get index || Obtener index
        const contact_index = updated_contacts.findIndex(isContact)
        const current_messages = updated_contacts[contact_index].messagesList

        //Prepare new message || Preparar nuevo mensaje
        const new_id = getNewMessageID(current_messages)

        const new_message = {
            isFirstMessage: evaluateIfFirstMessage(current_messages),
            isSenderMe: true,
            hourString: getFormattedHour(),
            dateString: getCurrentDateString(), 
            id: new_id,
            text: text,
            status: 'received'
        }

        console.log(new_message)
        //Add new message || Agregar nuevo mensaje
        updated_contacts[contact_index].messagesList.push(new_message)
        
        //Set new state || Configurar nuevo estado
        setContactsState(updated_contacts)
    }


    return (
        <ContactsContext.Provider value={
            {
                contacts_state: contacts_state,
                getContactById: getContactById,
                addNewMessageToContact: addNewMessageToContact
            }
        }>
            {children}
        </ContactsContext.Provider>
    )
}

export {ContactsContext, ContactsContextProvider}