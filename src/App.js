
  
import React  from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { ArrayProvider } from "./components/contexts/ArrayContext";
import { SpeedProvider } from "./components/contexts/SpeedContext";
import { IsProcessingProvider } from "./components/contexts/IsProcessingContext";


import Home from './components/Home'
import About from "./components/About";

import NavbarComponent from './components/NavbarComponent'
import Footer from "./components/Footer";

import BubbleSort from './components/sorts/BubbleSort';
import InsertionSort from './components/sorts/InsertionSort';
import SelectionSort from './components/sorts/SelectionSort';

import {Route,BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
 
      <NavbarComponent />
      
      <ArrayProvider>
        <SpeedProvider>
          <IsProcessingProvider>
          <Router>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/bubblesort" component={BubbleSort} />
            <Route exact path="/insertionsort" component={InsertionSort}/>
            <Route exact path="/selectionsort" component={SelectionSort}/>
            <Route exact path="/about" component={About}/>
            </Router>
          </IsProcessingProvider>
        </SpeedProvider>
      </ArrayProvider>

      <Footer/>
    </div>
  );
}

export default App;
