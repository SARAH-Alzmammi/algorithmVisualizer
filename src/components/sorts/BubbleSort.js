import React, { Component } from 'react';
import './sort.css';
import { Form } from 'react-bootstrap';

class BubbleSort extends Component {
 constructor(props) {
  super(props);
   this.state = {
     processing: false,
     speedValue: 500,
     sizeValue: 5,
     arrayElements: [50, 40, 90, 30, 10],
   }
   this.Bsort = this.Bsort.bind(this);
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
    for (let i = 0; i <= this.state.sizeValue; i++) {
      
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


  async Bsort() {
//blue ==> in process #417AD5
// red ==> not right //#D54A41
//green ==> good     #4F7942
   this.setState({processing:true});

    let arr = this.state.arrayElements
 
    let arrayBar =  document.getElementsByClassName('arrayElement')
     for (let i = 0; i < arr.length - 1; i++) {
     
       for (let j = 0; j < arr.length-i-1; j++) {
       arrayBar[j].style.backgroundColor = "#417AD5";
       arrayBar[j + 1].style.backgroundColor = "#417AD5";
       
       if (arr[j] > arr[j + 1]) {
        await  this.waitforme(this.state.speedValue);
        arrayBar[j].style.backgroundColor = "#D54A41";
        arrayBar[j+1].style.backgroundColor = "#D54A41";
        await  this.waitforme(this.state.speedValue);
         let temp = arr[j];
         arr[j] =arr[j+1];
         arr[j + 1] = temp;
         arrayBar[j].style.backgroundColor = "gray";
         arrayBar[j+1].style.backgroundColor = "gray";
         this.setState({ arrayElements: arr });
       } else {
        await  this.waitforme(this.state.speedValue);
        arrayBar[j].style.backgroundColor = " #4F7942";
        arrayBar[j+1].style.backgroundColor = " #4F7942";
        await  this.waitforme(this.state.speedValue);
        arrayBar[j].style.backgroundColor = "gray";
        arrayBar[j+1].style.backgroundColor = "gray";
       }
     }

   }
   this.setState({processing:false});
   }

  
  render() {
  
    return (
      <div className="box">
                <h3 className="algoName">Bubble Sort</h3>
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
            min={2}
             max={30}
      
          />
          <button className="generBtn" disabled={this.state.processing} onClick={this.generateNewArray} >New Array</button>
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
    
<button className="sortBtn" disabled={this.state.processing} onClick={this.Bsort} >SORT</button>


   </div>
   );
 }
}
 
export default BubbleSort ;