import axios from "axios"

const review = async(token)=>{

    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get("/api/admin/comments" , options)
     console.log(response.data);
      return response.data
}

const userReview = {review}

export default userReview