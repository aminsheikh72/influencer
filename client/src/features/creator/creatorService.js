import axios from "axios";

const creator = async(token, newCreator ) => {

     const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
    
    console.log(newCreator);
    
    const response = await axios.post("/api/admin/influencer" , newCreator , options)
     console.log(response.data);
      return response.data



}

const getCreators = async() => {

    const response = await axios.get("/api/influencers")
    console.log(response.data);
    return response.data

}


const creatorService = { creator, getCreators }


export default creatorService