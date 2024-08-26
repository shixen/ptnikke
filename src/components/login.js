import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthToken';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://my-pt-api-242fe05c6a61.herokuapp.com/accounts/login/', {
                username,
                password
            });
    
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem('authToken', token);
                login(token);
                navigate('/home');
            } else {
                setError('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <>
            <h2>Login</h2>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </>
    );
};

export default Login;