import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, Container } from 'react-bootstrap';
import SortController from './sorts/SortController'
import Home from './Home'
import {Switch,Route,Link } from "react-router-dom";
import './NavbarClass.css'
class NavbarClass extends Component {
 constructor(props) {
  super(props);
  // this.navToggle = this.navToggle.bind(this);
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
        <Nav.Link as={Link} exact to="/"  exact to="/">About</Nav.Link>
        <Nav.Link as={Link} exact to="/bubblesort" >Bubble Sort</Nav.Link>
        <Nav.Link as={Link} exact to="/"   exact to="/">Insertion Sort</Nav.Link>
        <Nav.Link as={Link} exact to="/"  exact to="/">Merge Sort</Nav.Link>
        <Nav.Link as={Link} exact to="/"  exact to="/">Quick Sort</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
          <Switch>
     <Route exact path="/" component={Home} />
        <Route exact path="/bubblesort"
          component={() => <SortController algoName='BubbleSort' />}/>
 
     {/* <Route path="/fuel-savings" component={FuelSavingsPage} />
     <Route path="/about" component={AboutPage} />
     <Route component={NotFoundPage} /> */}
    </Switch>
   </div>




  );
 }
}
 
export default NavbarClass;