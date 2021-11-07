
  
import React  from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { ArrayProvider } from "./components/contexts/ArrayContext";
import { SpeedProvider } from "./components/contexts/SpeedContext";
import { IsProcessingProvider } from "./components/contexts/IsProcessingContext";
import { SearchKeyProvider } from "./components/contexts/SearchKeyContext";


import Home from './components/Home'
import About from "./components/About";

import NavbarComponent from './components/NavbarComponent'
import Footer from "./components/Footer";

import BubbleSort from './components/sorts/BubbleSort';
import InsertionSort from './components/sorts/InsertionSort';
import SelectionSort from './components/sorts/SelectionSort';

import LinearSearch from './components/searches/LinearSearch';
import BinarySearch from './components/searches/BinarySearch';


import {Route,BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <div className="App">
 
      <NavbarComponent />    
      <ArrayProvider>
        <SpeedProvider>
          <IsProcessingProvider>
            <SearchKeyProvider>
              <Router>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/bubblesort" component={BubbleSort} />
                <Route exact path="/insertionsort" component={InsertionSort}/>
                <Route exact path="/selectionsort" component={SelectionSort}/>
                <Route exact path="/about" component={About} />
                
                <Route exact path="/linearsearch" component={LinearSearch}/>
                <Route exact path="/binarysearch" component={BinarySearch}/>
                </Router>
            </SearchKeyProvider>
          </IsProcessingProvider>
        </SpeedProvider>
      </ArrayProvider>

      <Footer/>
    </div>
  );
}

export default App;
