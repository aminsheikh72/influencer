import axios from "axios";

const allBookings = async(token) => {

    const options  = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("https://influencer-backend-e6se.onrender.com/api/admin/bookings", options)
    return response.data

}
const confirmBooking = async(token,formData) => {
    const options  = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.put(`https://influencer-backend-e6se.onrender.com/api/admin/bookings/${formData.id}`,formData, options)
    return response.data

}


const bookingService = { allBookings,confirmBooking }

export default bookingService