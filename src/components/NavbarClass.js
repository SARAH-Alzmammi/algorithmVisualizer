import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, Container } from 'react-bootstrap';

import {Switch,Route,Link } from "react-router-dom";

import Home from './Home'
import BubbleSort from './sorts/BubbleSort';
import InsertionSort from './sorts/InsertionSort';
import SelectionSort from './sorts/SelectionSort';
import './NavbarClass.css'
class NavbarClass extends Component {
 constructor(props) {
  super(props);

  this.state = {}
 }

 render() { 
  return (
    <div>
      <Navbar  expand="lg">
  <Container>
        <Navbar.Brand as={Link} exact to="/" >AV</Navbar.Brand>
        
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link   as={Link} exact to="/" className="navLink">Home</Nav.Link>
        <Nav.Link as={Link} exact to="/bubblesort" >Bubble Sort</Nav.Link>
        <Nav.Link as={Link} exact to="/insertionsort"  >Insertion Sort</Nav.Link>
        <Nav.Link as={Link} exact to="/selectionsort" >Selection Sort</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
          <Switch>
     <Route exact path="/" component={Home} />
        <Route exact path="/bubblesort"
          component={() => <BubbleSort />
          } />
      <Route exact path="/insertionsort"
          component={() => <InsertionSort />}/>
     <Route exact path="/selectionsort"
          component={() => <SelectionSort />}/>

    </Switch>
   </div>




  );
 }
}
 
export default NavbarClass;