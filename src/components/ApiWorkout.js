import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Container } from 'react-bootstrap';

const ApiWorkout = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://my-pt-api-242fe05c6a61.herokuapp.com/workoutplan/workoutplans/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  const formatExercises = (exercises) => {
    return exercises.split('\n').filter(item => item.trim() !== '');
  };

  return (
    <Container>
      <h1 className="my-4">Workout Plan</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id}>
            <h5>{post.title}</h5>
            <p><strong>Description:</strong> {post.description}</p>
            <ListGroup>
              {formatExercises(post.exercises).map((exercise, index) => (
                <ListGroup.Item key={index}>
                  {exercise}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ApiWorkout;