import React from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';


import './css/NavbarClass.css';


function NavbarComponent(){ 
  return (
    <div>
      <Navbar  expand="lg" >
       <Container>
        <Navbar.Brand href='/' className="navBrand">AV</Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Sorting Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/bubblesort">Bubble Sort</NavDropdown.Item>
              <NavDropdown.Item href="/insertionsort">Insertion Sort</NavDropdown.Item>
              <NavDropdown.Item href="/selectionsort">Selection Sort</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Serch Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item href="/linearsearch">Linear Search</NavDropdown.Item>
              <NavDropdown.Item href="/binarysearch">Binary Search</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link variant="secondary" href='/about' >About</Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>

      

      
   </div>




  );
 }

 
export default NavbarComponent;