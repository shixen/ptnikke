import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="secondary" expand="md" fixed='top'>
        <Container>
  <Navbar.Brand href="#home">PT niklas</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar