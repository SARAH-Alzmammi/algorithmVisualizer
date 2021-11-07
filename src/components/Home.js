import React, { Component } from 'react';
import './css/Home.css'

function Home () {

  return (
   <div className="HomeContainer">
      <h1>AV</h1>
      <p>Algorithm Visualizer</p>
      <div className="links">
        <a href="/bubblesort">Bubble Sort</a>
        <a href="/selectionsort">Selection Sort</a>
        <a href="/insertionsort">Insertion Sort</a>
        <a href="/binarysearch">Binary Search</a>
        <a href="/linearsearch">Linear Search</a>
      </div>
   </div>
   );
 
}
 
export default Home;