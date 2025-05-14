import axios from "axios";

const allBookings = async(token) => {

    const options  = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/admin/bookings", options)
    console.log(response.data);
    return response.data

}


const bookingService = { allBookings }

export default bookingService