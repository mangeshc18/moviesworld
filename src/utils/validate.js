const CheckValidData = (email, password) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isValidEmail) return "invalid email id"
    if(!isValidPassword) return "invalid password"


    return null;

    
}   

export default CheckValidData;




