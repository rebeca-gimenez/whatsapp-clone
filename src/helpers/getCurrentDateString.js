//Function to get the current day yyyy-mm-dd

const getCurrentDateString = () => {
    const now = new Date();
    
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()

    if (day < 10) {
        day = '0' + day
    }

    if (month < 10) {
        month = '0' + month
    }
    
    return `${year}-${month}-${day}`;
}

export default getCurrentDateString