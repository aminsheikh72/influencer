import axios from "axios";

const allBookings = async(token) => {

    const options  = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/admin/bookings", options)
  
    return response.data

}

const updateBooking = async(formData , token) => {
  
    
     const options  = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
     const response = await axios.put(`/api/admin/bookings/${formData._id}`, formData, options)
    console.log(response.data);
    return response.data
}

const bookingService = { allBookings , updateBooking}

export default bookingService