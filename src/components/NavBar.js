import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="light" expand="md" fixed="top">
      <Container>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "navbar-brand active" : "navbar-brand"}
        >
          N.E Workout
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              About me
            </NavLink>
            <NavLink 
              to="/signup" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Sign up
            </NavLink>
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Login
            </NavLink>
            <NavLink 
              to="/logout" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;