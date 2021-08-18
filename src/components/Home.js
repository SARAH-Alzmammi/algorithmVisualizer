import React, { Component } from 'react';
import './css/Home.css'

function Home () {

  return (
   <div className="HomeContainer">
      <h1>AV</h1>
      <p>Algorithm Visualizer</p>
      <div className="links">
        <a href="/bubblesort">Bubblesort</a>
        <a href="/selectionsort">Selectionsort</a>
        <a href="/insertionsort">Insertionsort</a>
      </div>
   </div>
   );
 
}
 
export default Home;