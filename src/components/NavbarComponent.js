import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';


import './NavbarClass.css';


function NavbarComponent(){ 
  return (
    <div>
      <Navbar  expand="lg">
       <Container>
        <Navbar.Brand href='/bubblesort' className="navBrand">AV</Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link   href='/' className="navLink">Home</Nav.Link>
              <Nav.Link href='/bubblesort' >Bubble Sort</Nav.Link>
              <Nav.Link href='/insertionsort'insertionsort >Insertion Sort</Nav.Link>
              <Nav.Link href='/selectionsort' >Selection Sort</Nav.Link>

            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>

      

      
   </div>




  );
 }

 
export default NavbarComponent;