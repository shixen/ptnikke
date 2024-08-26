import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') || null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('AuthProvider - authToken:', authToken);
        console.log('AuthProvider - isAuthenticated:', isAuthenticated);
    }, [authToken, isAuthenticated]);

    const login = (token) => {
        setAuthToken(token);
        setIsAuthenticated(true);
        localStorage.setItem('authToken', token);
    };

    const logout = () => {
        setAuthToken(null);
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ authToken, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};