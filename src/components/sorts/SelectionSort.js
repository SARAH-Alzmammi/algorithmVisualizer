import React, { Component } from 'react';
import './sort.css';
import { Form } from 'react-bootstrap';

class SelectionSort extends Component {
 constructor(props) {
  super(props);
   this.state = {
     processing: false,
     speedValue: 500,
     sizeValue: 5,
     arrayElements: [50, 40, 90, 30, 10],
   }
  this.Ssort = this.Ssort.bind(this);
   this.waitforme = this.waitforme.bind(this);
   
   this.handleRangeChangeSpeed = this.handleRangeChangeSpeed.bind(this);
   this.handleRangeChangeSize = this.handleRangeChangeSize.bind(this);
   this.generateNewArray = this.generateNewArray.bind(this);
  }
  waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
  }


  generateNewArray()
  {
    let arr = []
    for(let i = 0; i <= this.state.sizeValue; i++) {
     let newNumber = Math.floor(Math.random() * 100+1); 
     arr.push(newNumber)
    }
  this.setState({ arrayElements: arr });
  }
  handleRangeChangeSpeed(e) {
    this.setState({speedValue: e.target.value});
  }
  handleRangeChangeSize(e) {
    this.setState({ sizeValue: e.target.value });
    this.generateNewArray()
  }


  async Ssort() {
//blue ==> in process #417AD5
//red ==> not right //#D54A41
//green ==> good    //#4F7942
   this.setState({processing:true});

   let arr = this.state.arrayElements
   let arrayBar =  document.getElementsByClassName('arrayElement')
    for (let i = 0; i < arr.length; i++) {
     let current_min = i;

     await  this.waitforme(this.state.speedValue);
     arrayBar[i].style.backgroundColor = "#417AD5";

     for (let j = i + 1; j < arr.length; j++) {
      await  this.waitforme(this.state.speedValue);
      arrayBar[j].style.backgroundColor = "#D54A41";
     if (arr[j] < arr[current_min]) {
      current_min = j
      }
      await  this.waitforme(this.state.speedValue);
      arrayBar[j].style.backgroundColor = "gray";
     }
     await  this.waitforme(this.state.speedValue);
     arrayBar[current_min].style.backgroundColor = "#D54A41";
     arrayBar[i].style.backgroundColor = "#D54A41";
     await  this.waitforme(this.state.speedValue);
      let temp = arr[current_min];
      arr[current_min] =arr[i];
      arr[i] = temp;

     this.setState({ arrayElements: arr })
     arrayBar[i].style.backgroundColor = "gray";
 }

     
    

   this.setState({processing:false});
   }

  
  render() {
  
    return (
      <div className="box">
                <h3 className="algoName">Selection Sort</h3>
      <div className="bars">
      <Form.Label className="formLabel" >Speed</Form.Label>

      <Form.Range
        value={this.state.speedValue}
        onChange={this.handleRangeChangeSpeed}
        className="rang_bar"
        min={250}
        max={3000}
      />
    
      <Form.Label className="formLabel">Size of the array : <span>{ this.state.sizeValue}</span></Form.Label>

      <Form.Range
        value={this.state.sizeValue}
        onChange={this.handleRangeChangeSize}
        className="rang_bar"
        min={3}
        max={30}
      />
        </div>
        
    <div className="view">
    <div className="container">
      <div className="arrayContainer" key={this.state.arrayElements} >
        { this.state.arrayElements.map((value, idx) => (
          <div>
            <p className="arrayValue">{value}</p>
            
          <div className="arrayElement" key={idx}
            style={{
              height: `${value}px`,
              width: `1rem`,
              }}
            >
          </div>
       
          </div>
          
     ))}
</div>
</div>
</div>
    
<button className="sortBtn" disabled={this.state.processing} onClick={this.Ssort} >SORT</button>


   </div>
   );
 }
}
 
export default SelectionSort ;