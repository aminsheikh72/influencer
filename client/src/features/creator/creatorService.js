import axios from "axios";

const creator = async (token, newCreator) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    "https://influencer-backend-e6se.onrender.com/api/admin/influencer",
    newCreator,
    options
  );
  return response.data;
};

const update = async (token, formData) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `https://influencer-backend-e6se.onrender.com/api/admin/influencer/${formData._id}`,
    formData,
    options
  );
  return response.data;
};

const remove = async (token, id) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `https://influencer-backend-e6se.onrender.com/api/admin/influencer/${id}`,
    options
  );
  return response.data;
};


const getCreators = async () => {
  const response = await axios.get("https://influencer-backend-e6se.onrender.com/api/influencers");
  return response.data;
};

const creatorService = { creator, getCreators,update,remove };

export default creatorService;
