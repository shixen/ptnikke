import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://my-pt-api-242fe05c6a61.herokuapp.com/',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
});

export const submitComment = async (commentData, accessToken) => {
  try {
    const response = await api.post('/comments/', commentData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {

    console.error('Error submitting comment:', error.response ? error.response.data : error.message);
    throw new Error(`Error submitting comment: ${error.response ? error.response.data : error.message}`);
  }
};