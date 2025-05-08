import axios from 'axios'
const fetchCreators=async()=>{
    const res = await axios.get('/api/influencers')
    console.log(res.data);
    
    return res.data
}
const fetchService= {fetchCreators}
export default fetchService;