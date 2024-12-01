//Function to get the last hour the messager was active
//For simplycity we consider this to be the last time they sent a message

const getTheirLastMessageHourString = (messages) => {
    const lastIndex = messages.length - 1
    for (let i = lastIndex; i >= 0; i = i - 1) {
        let message = messages[i]
        if (!message.isSenderMe) {
            return message.hourString
        }
    }
    return false
}

export default getTheirLastMessageHourString