import axios from "axios"

const user = async(token) => {

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/admin/users", options)
    console.log(response.data);
    return response.data
    
}


const userService = { user }

export default userService