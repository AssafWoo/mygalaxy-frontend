import axios from 'axios';

// API Configuration Object
const apiConfig = {
  character: {
    url: (params) => `http://localhost:3002/swapi/character/${params.characterName}`,
  },
  homeworld: {
    url: (params) => `http://localhost:3002/swapi/data`,
    queryParams: (params) => ({ url: params.url })
  },
};

export const fetchData = async (type, params = {}) => {
  const config = apiConfig[type];
  if (!config) {
    throw new Error("Invalid data type");
  }

  const url = config.url(params);
  const queryParams = config.queryParams ? config.queryParams(params) : {};

  try {
    const response = await axios.get(url, { params: queryParams });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Network error");
  }
};
