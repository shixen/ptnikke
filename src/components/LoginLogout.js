import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthToken';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const LoginLogout = () => {
    const { isAuthenticated, login, logout } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
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
                navigate('/home'); // Redirect after successful login
            } else {
                setError('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            const token = localStorage.getItem('authToken');

            if (!token) {
                throw new Error('No token found');
            }

            const response = await axios.post('https://my-pt-api-242fe05c6a61.herokuapp.com/accounts/logout/', {}, {
                headers: { 'Authorization': `Token ${token}` }
            });

            if (response.status === 200) {
                localStorage.removeItem('authToken');
                logout();
                navigate('/login'); // Redirect to login page after successful logout
            } else {
                throw new Error('Logout failed');
            }
        } catch (error) {
            console.error('Logout failed:', error);
            setError('Logout failed. Please try again.');
        } finally {
            setIsLoggingOut(false); // Reset logging out state
        }
    };
   // Render Login or Logout based on authentication status
    return (
        <Container className="mt-5">
            {isAuthenticated ? (
                <>
                    <h2>Logging Out</h2>
                    <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
                        {isLoggingOut ? 'Logging out...' : 'Logout'}
                    </Button>
                </>
            ) : (
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
            )}
        </Container>
    );
};

export default LoginLogout;