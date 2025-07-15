import axios from "axios"
 export const fetchInfluencer=async()=>{
    const res = await axios.get('/api/influencers')
    return res.data
    
}

export const fetchInfluencerDetails=async(id)=>{
    const res = await axios.get('https://influencer-backend-e6se.onrender.com/api/influencers/single/' + id)
    return res.data   
}


export const addBooking=async(formData)=>{
    const token = formData.token
    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const res = await axios.post(`https://influencer-backend-e6se.onrender.com/api/booking/${formData.influencer}`,formData,options)
    console.log(res.data);
    
    return res.data   
}

export const getMyBookings=async(token)=>{
    
    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const res = await axios.get(`https://influencer-backend-e6se.onrender.com/api/booking`, options)    
    return res.data   
}

export const getMyBooking=async(token,id)=>{
    
    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const res = await axios.get(`https://influencer-backend-e6se.onrender.com/api/booking/${id}`, options)    
    return res.data   
}
export const getBookingComments=async(token,id)=>{
    
    const options = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const res = await axios.get(`https://influencer-backend-e6se.onrender.com/api/booking/${id}/comment`, options)    
    return res.data   
}


export const postComment = async ({ user, influencer, text, token }) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(
    `https://influencer-backend-e6se.onrender.com/api/booking/${influencer}/comment`,
    { user, influencer, text },
    options
  );

  return res.data;
};


