import axios from 'axios';

export const submitComment = async (commentData, accessToken) => {
  try {
    const response = await axios.post(
      'https://my-pt-api-242fe05c6a61.herokuapp.com/comments/',
      commentData,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {

    console.error('Error submitting comment:', error.response ? error.response.data : error.message);
    throw new Error(`Error submitting comment: ${error.message}`);
  }
};