const creator = async(token ) => {
     const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.get("/api/admin/createInfluencer" , options)
     console.log(response.data);
      return response.data



}