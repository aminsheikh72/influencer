import axios from "axios";

const creator = async (token, newCreator) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    "/api/admin/influencer",
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
    `/api/admin/influencer/${formData._id}`,
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
    `/api/admin/influencer/${id}`,
    options
  );
  return response.data;
};


const getCreators = async () => {
  const response = await axios.get("/api/influencers");
  return response.data;
};

const creatorService = { creator, getCreators,update,remove };

export default creatorService;
