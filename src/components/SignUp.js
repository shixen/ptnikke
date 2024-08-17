import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('https://my-pt-api-242fe05c6a61.herokuapp.com/accounts/signup/', formData)
      .then(response => {
        setSuccess('Signup successful!');
        setError(null);
        setFormData({
          username: '',
          password: ''
        });
      })
      .catch(error => {
        setError('Signup failed. Please try again.');
        setSuccess(null);
      });
  };

  return (
    <Container className="my-4" style={{ maxWidth: '500px' }}>
      <h1 className="text-center">Signup</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;