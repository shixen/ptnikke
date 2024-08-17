import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ApiPosts from './components/ApiPosts';
import ApiWorkout from './components/ApiWorkout';
import Signup from './components/SignUp';
import AboutMe from './components/AboutMe';
import './App.module.css';
import AuthPage from './components/LoginLogout';

function App() {
  return (
    <div>
      <NavBar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<><ApiPosts /><ApiWorkout /></>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;