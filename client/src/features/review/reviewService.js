import axios from "axios"

const review = async(token)=>{

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get("https://influencer-backend-e6se.onrender.com/api/admin/comments" , options)
      return response.data
}

const createComment = async(token,formData)=>{

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(`https://influencer-backend-e6se.onrender.com/api/booking/${formData.booking}/comment`,formData , options)
    
      return response.data
}


const userReview = {review,createComment}

export default userReview