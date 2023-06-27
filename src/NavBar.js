import React from 'react'
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          {/* <Navbar.Brand><Link to="/" style={{textDecoration:"none", color:"inherit"}}>FORM</Link></Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link><Link to="/home" style={{textDecoration:"none",color:"inherit"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/add" style={{textDecoration:"none",color:"inherit"}}>Add</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
};

export default NavBar;