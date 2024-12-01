//Function to see if this is the 'first new message' from 'me'

const evaluateIfFirstMessage = (messages) => {
    const lastIndex = messages.length - 1
    const lastMessage = messages[lastIndex]

    if (lastMessage.isSenderMe) {
        return false
    }

    return true
}

export default evaluateIfFirstMessage