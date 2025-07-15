import axios from "axios"

const user = async(token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }    
    const response = await axios.get("https://influencer-backend-e6se.onrender.com/api/admin/users", options)
    return response.data
    
}
const userService = { user }

export default userService