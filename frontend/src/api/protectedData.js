import axios from "axios";

const getProtectedData = async () => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await axios.post('/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch protected data');
    }
  };

  export default getProtectedData;