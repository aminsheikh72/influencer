import axios from "axios"

const review = async(token)=>{

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/admin/comments" , options)
      return response.data
}

const createComment = async(token,formData)=>{

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(`/api/booking/${formData.booking}/comment`,formData , options)
    console.log(response.data);
    
      return response.data
}


const userReview = {review,createComment}

export default userReview