import React, { Component } from 'react';
import './sort.css';
import { Form } from 'react-bootstrap';
import BubbleSort from './BubbleSort'
import MergeSort from './MergeSort'
class SortController extends Component {
 constructor(props) {
  super(props);
   this.state = {
     speedValue: 500,
     sizeValue: 5,
     arrayElements: [50, 40, 90, 30, 10],
     componentName:this.props.algoName
   }
    this.handleRangeChangeSpeed = this.handleRangeChangeSpeed.bind(this);
   this.handleRangeChangeSize = this.handleRangeChangeSize.bind(this);
   this.generateNewArray = this.generateNewArray.bind(this);
  }

  CC =this.state.componentName
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
  render() {

  return (
    <div className="box">
        <div className="bar">
        <Form.Label>Speed</Form.Label>
 
        <Form.Range
          value={this.state.speedValue}
          onChange={this.handleRangeChangeSpeed}
          className="rang_bar"
          min={250}
          max={3000}
        />
      
        <Form.Label>Size of the array</Form.Label>
        <p>{ this.state.sizeValue}</p>
        <Form.Range
          value={this.state.sizeValue}
          onChange={this.handleRangeChangeSize}
          className="rang_bar"
          min={3}
          max={30}
        />
        </div>
      <div className="view">
        
        <BubbleSort sizeValue={this.state.sizeValue} speedValue={this.state.speedValue} arrayElements={this.state.arrayElements }/>

        </div>
   </div>
   );
 }
}
 
export default SortController ;