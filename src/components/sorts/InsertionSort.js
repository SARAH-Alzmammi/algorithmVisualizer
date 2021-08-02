import React, { Component } from 'react';
import './sort.css';
import { Form } from 'react-bootstrap';

class InsertionSort extends Component {
 constructor(props) {
  super(props);
   this.state = {
     processing: false,
     speedValue: 500,
     sizeValue: 5,
     arrayElements: [50, 40, 90, 30, 10],
   }
  this.Isort = this.Isort.bind(this);
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


  async Isort() {
//blue ==> in process #417AD5
// red ==> not right //#D54A41
//green ==> good     #4F7942
   this.setState({processing:true});

    let arr = this.state.arrayElements
 
    let arrayBar = document.getElementsByClassName('arrayElement')

    for (let i = 1; i < arr.length; i++){

      let current = arr[i];
      let j = i - 1;//before the current position
      await this.waitforme(this.state.speedValue);
      arrayBar[i].style.backgroundColor = "#417AD5"; //current
 
      while (j >= 0 && arr[j] > current) {
        await this.waitforme(this.state.speedValue);

        arr[j + 1] = arr[j];
        this.setState({ arrayElements: arr })
        arrayBar[j].style.backgroundColor = "#D54A41"; 
        arrayBar[j+1].style.backgroundColor = "#D54A41";
        j--;

      }
      arr[j + 1] = current;
      this.setState({ arrayElements: arr })
      arrayBar[j + 1].style.backgroundColor = "#4F7942";
      await this.waitforme(this.state.speedValue);

      arrayBar[j + 1].style.backgroundColor = "gray";
    }
 
   this.setState({processing:false});
   }

  
  render() {
  
    return (
      <div className="box">
        <h3 className="algoName">Insertion Sort</h3>
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
                    <button className="generBtn" disabled={this.state.processing} onClick={this.generateNewArray} >New Array</button>
        </div>
        
    <div className="view">

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

    
<button className="sortBtn" disabled={this.state.processing} onClick={this.Isort} >SORT</button>


   </div>
   );
 }
}
 
export default InsertionSort ;