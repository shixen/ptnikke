import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Container } from 'react-bootstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://my-pt-api-242fe05c6a61.herokuapp.com/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  return (
    <Container>
      <h1 className="my-4">Posts</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
export default Posts;