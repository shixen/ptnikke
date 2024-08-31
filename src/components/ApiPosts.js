import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Container, Button, Form } from 'react-bootstrap';
import { fetchComments, submitComment } from './Comments';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [commentTexts, setCommentTexts] = useState({});
  const [accessToken, setAccessToken] = useState('5ce7e9b3bb11e9977edeee8c5333c12a4d7b3152');

  useEffect(() => {
    axios.get('https://my-pt-api-242fe05c6a61.herokuapp.com/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  const handleCommentChange = (postId, text) => {
    setCommentTexts({ ...commentTexts, [postId]: text });
  };

  const handleCommentSubmit = async (postId) => {
    try {
      const commentData = {
        post: postId,
        author: 'Anonymous',
        text: commentTexts[postId] || '',
      };
      const response = await submitComment(commentData, accessToken);
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, comments: [...post.comments, response] } : post
      ));
      setCommentTexts({ ...commentTexts, [postId]: '' });
    } catch (error) {
      console.error('There was an error adding the comment!', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Posts</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
            <h6>Comments:</h6>
            <ListGroup>
              {(post.comments || []).map(comment => (
                <ListGroup.Item key={comment.id}>
                  <p><strong>{comment.author}:</strong> {comment.text}</p>
                </ListGroup.Item>
              ))}
              <Form>
                <Form.Control
                  type="text"
                  value={commentTexts[post.id] || ''}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  placeholder="Add a comment"
                />
                <Button 
                  className="mt-2"
                  onClick={() => handleCommentSubmit(post.id)}
                >
                  Submit
                </Button>
              </Form>
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Posts;