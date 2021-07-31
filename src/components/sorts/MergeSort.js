import React, { Component } from 'react';
import './sort.css';

class BubbleSort extends Component {
 constructor(props) {
  super(props);
   this.state = {

     processing : false,
   }
     this.Msort = this.Msort.bind(this);
     this.waitforme = this.waitforme.bind(this);
  }

  waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
  }

  async Msort() {
   this.setState({processing:true});

    let arr = this.props.arrayElements
 
    let arrayBar =  document.getElementsByClassName('arrayElement')
   for (let i = 0; i < arr.length - 1; i++) {
     
     for (let j = 0; j < arr.length-i-1; j++) {
       arrayBar[j].style.backgroundColor = "blue";
       arrayBar[j + 1].style.backgroundColor = "blue";
       
       if (arr[j] > arr[j + 1]) {
        await  this.waitforme(this.props.speedValue);
        arrayBar[j].style.backgroundColor = "red";
        arrayBar[j+1].style.backgroundColor = "red";
        await  this.waitforme(this.props.speedValue);
         let temp = arr[j];
         arr[j] =arr[j+1];
         arr[j + 1] = temp;
         arrayBar[j].style.backgroundColor = "black";
         arrayBar[j+1].style.backgroundColor = "black";
         this.setState({ arrayElements: arr });
       } else {
        await  this.waitforme(this.props.speedValue);
        arrayBar[j].style.backgroundColor = "green";
        arrayBar[j+1].style.backgroundColor = "green";
        await  this.waitforme(this.props.speedValue);
        arrayBar[j].style.backgroundColor = "black";
        arrayBar[j+1].style.backgroundColor = "black";
       }
     }

   }
   this.setState({processing:false});
   }

  
  render() {
  
  return (
    <div className="container">
      <h3>From merge</h3>
      <div className="arrayContainer" key={this.props.arrayElements} > {
        this.props.arrayElements.map((value, idx) => (
          <div >
               <p className="arrayValue">{value}</p> 
          <div  className="arrayElement" key={idx}
            style={{
              height: `${value}px`,
              width: `1rem`,
              }}
            >
          </div>
       
          </div>
          
     ))}
</div>
    
<button className="sortBtn" disabled={this.state.processing} onClick={this.Msort} >SORT</button>


   </div>
   );
 }
}
 
export default BubbleSort ;