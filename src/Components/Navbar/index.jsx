import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
                <Link to ="/">Home</Link> 
            </Nav.Link>
        
            <Nav.Link>
                <Link to="/about">About</Link> 
            </Nav.Link>

            <Nav.Link>
                <Link to ="/login">Login</Link> 
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}

export default NavBarComp;
