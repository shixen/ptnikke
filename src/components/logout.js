import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthToken';
import { Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useAuth();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            const token = localStorage.getItem('authToken');
    
            if (!token) {
                throw new Error('No token found');
            }
    
            const response = await axios.post(
                'https://my-pt-api-242fe05c6a61.herokuapp.com/accounts/logout/',
                {},
                {
                    headers: { 'Authorization': `Token ${token}` }
                }
            );
    
            if (response.status === 200) {
                localStorage.removeItem('authToken');
                navigate('/login');
            } else {
                throw new Error('Logout failed');
            }
        } catch (error) {
            console.error('Logout failed:', error);
            setError('Logout failed. Please try again.');
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <>
            <h2>Logging Out</h2>
            <Button variant="danger" onClick={handleLogout} disabled={isLoggingOut}>
                {isLoggingOut ? 'Logging out...' : 'Logout'}
            </Button>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </>
    );
};

export default Logout;