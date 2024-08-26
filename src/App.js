import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ApiPosts from './components/ApiPosts';
import ApiWorkout from './components/ApiWorkout';
import Signup from './components/SignUp';
import AboutMe from './components/AboutMe';
import Login from './components/login';
import Logout from './components/logout';

function App() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<><ApiPosts /><ApiWorkout /></>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;