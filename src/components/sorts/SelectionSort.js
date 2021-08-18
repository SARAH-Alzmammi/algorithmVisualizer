import React, {useState, useContext,useEffect } from 'react';
import '../css/sort.css';
import Controllers from '../controllers/Controllers';
import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'
import { Button } from 'react-bootstrap';


import delay from '../helper'
import ColorKey from '../ColorKey';








function SelectionSort() {
  let { isProcessing,changeIsProcessing } = useContext(IsProcessingContext);
  let { speed } = useContext(SpeedContext);
  let { array, setArray } = useContext(ArrayContext);

  async function  SelectionSortFunction() {

  await changeIsProcessing()

   let arrayBar =  document.getElementsByClassName('arrayElement')
    for (let i = 0; i < array.length; i++) {
      let current_min = i;


      arrayBar[i].style.backgroundColor = "#417AD5";
      await  delay(speed);
      for (let j = i + 1; j < array.length; j++) {
          await  delay(speed);
          arrayBar[j].style.backgroundColor = "#D54A41";
          if (array[j] < array[current_min]) {
            current_min = j
          }
          await  delay(speed);
          arrayBar[j].style.backgroundColor = "gray";
        }
        
        await delay(speed);

        arrayBar[current_min].style.backgroundColor = "#D54A41";
        arrayBar[i].style.backgroundColor = "#D54A41";
        await  delay(speed);
        let temp = array[current_min];
        array[current_min] =array[i];
        array[i] = temp;

        let newArray = [...array]//clone  to cause to re-render
        setArray(newArray)
        arrayBar[i].style.backgroundColor = "gray";
  }
 
  await changeIsProcessing()
   }

  

  
    return (
        <div className="box">
        <h3 className="algoName">Selection Sort</h3>
        <Controllers />
        <div className="view">
          <div className="container">
            <div className="arrayContainer" key={array} >
            { array.map((value, idx) => (
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
          <Button size="sm" className="mt-3 w-50 sortBtn"onClick={SelectionSortFunction} disabled={isProcessing} >SORT</Button >
          <ColorKey/>
        </div>


        </div>
   );
 
}
 
export default SelectionSort ;