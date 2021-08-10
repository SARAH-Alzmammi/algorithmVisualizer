import React, { Component } from 'react';
import './Home.css'

function Home () {

  return (
   <div className="HomeContainer">
      <h1>AV</h1>
      <p>Algorithm Visualizer</p>
      <div className="links">
        <a href="/bubblesort">bubblesort</a>
        <a href="/selectionsort">selectionsort</a>
        <a href="/insertionsort">insertionsort</a>
      </div>
   </div>
   );
 
}
 
export default Home;