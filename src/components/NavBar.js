import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} bg="light" expand="md" fixed='top'>
      <Container>
        <NavLink to="/" className="navbar-brand">
          PT Niklas
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About me</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;