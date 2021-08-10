import React, { useContext } from 'react';
import './sort.css';
import {Button  } from 'react-bootstrap';
import Controllers from '../controllers/Controllers';
import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'


function InsertionSort(){

  let { isProcessing,changeIsProcessing } = useContext(IsProcessingContext);
  let { speed } = useContext(SpeedContext);
  let { array, setArray } = useContext(ArrayContext);

  function   waitforme() { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, speed); 
    }) 
  }

  async function  Isort() 
{
  
    await changeIsProcessing()

    let arrayBar = document.getElementsByClassName('arrayElement')

    for (let i = 1; i < array.length; i++){

      let current = array[i];
      let j = i - 1;//before the current position
      await waitforme();
      arrayBar[i].style.backgroundColor = "#417AD5"; //current
 
      while (j >= 0 && array[j] > current) {
        await waitforme();

        array[j + 1] = array[j];
        let newArray = [...array]//clone  to cause to re-render
        setArray(newArray)
        arrayBar[j].style.backgroundColor = "#D54A41"; 
        arrayBar[j+1].style.backgroundColor = "#D54A41";
        j--;

      }
      array[j + 1] = current;
      let newArray = [...array] //clone  to cause to re-render
      setArray(newArray)
      arrayBar[j + 1].style.backgroundColor = "#4F7942";
      await waitforme();

      arrayBar[j + 1].style.backgroundColor = "gray";
    }
 
    await changeIsProcessing()
}
   


  
   return (
<div className="box">
  <h3 className="algoName">Insertion Sort</h3>
  <Controllers />

  <div className="view" >


    <div className="arrayContainer" key={array} >
    { array.map((value, idx) => {

    return (
      <div key={idx} >
      <p className="arrayValue" >{value}</p>
      <div className="arrayElement" 
      style={{
      height: `${value}px`,
      width: `1rem`,
      }}>
      </div>
      </div>
      )
      })}
      </div>
      <Button size="sm" className="mt-3  w-50 sortBtn"onClick={Isort} disabled={isProcessing} >SORT</Button >
    </div>


 
</div>
);
}
 
export default InsertionSort ;