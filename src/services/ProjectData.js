import axios from 'axios';

 const getAllData = async (pageNumber, itemsPerPage) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/projects', {
        
        params: {
          page: pageNumber,
          per_page: itemsPerPage,
        },
        
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return an empty array or handle the error as needed
    }
  }
  export default getAllData;