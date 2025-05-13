import axios from "axios"
const fetchInfluencer=async()=>{
    const res = await axios.get('/api/influencers')
    return res.data
    
}
export default fetchInfluencer;