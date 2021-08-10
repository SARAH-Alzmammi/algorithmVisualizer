import React, {useContext} from 'react';
import './sort.css';
import {Button  } from 'react-bootstrap';
import Controllers from '../controllers/Controllers';
import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'


function BubbleSort() {


  let { isProcessing,changeIsProcessing } = useContext(IsProcessingContext);
  let { speed } = useContext(SpeedContext);
  let { array, setArray } = useContext(ArrayContext);

  function   waitforme() { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, speed); 
    }) 
  }

  async function Bsort() {
  
  await changeIsProcessing()

    let arrayBar = document.getElementsByClassName('arrayElement')
    
     for (let i = 0; i < array.length - 1; i++) {
     
       for (let j = 0; j < array.length - i - 1; j++) {

       arrayBar[j].style.backgroundColor = "#417AD5";
       arrayBar[j + 1].style.backgroundColor = "#417AD5";
       
         if (array[j] > array[j + 1]) {
        
        arrayBar[j].style.backgroundColor = "#D54A41";
        arrayBar[j+1].style.backgroundColor = "#D54A41";
        await  waitforme();
         let temp = array[j];
         array[j] =array[j+1];
         array[j + 1] = temp;
         arrayBar[j].style.backgroundColor = "gray";
         arrayBar[j + 1].style.backgroundColor = "gray";
          // setArray(array) //Not like this becuse it is basically the same array(same reference). 
         let newArray = [...array]//clone  to cause to re-render
          setArray(newArray)
       } else {
        arrayBar[j].style.backgroundColor = " #4F7942";
        arrayBar[j+1].style.backgroundColor = " #4F7942";
        await  waitforme();
        arrayBar[j].style.backgroundColor = "gray";
         arrayBar[j + 1].style.backgroundColor = "gray";
  
       }
     }
  }
  await changeIsProcessing()
   }

  
    return (
        <div className="box">
          <h3 className="algoName">Bubble Sort</h3>
          <Controllers />

          <div className="view" >

              <div className="arrayContainer" key={array} >
                {array.map((value, idx) => {
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
              <Button size="sm" className="mt-3  w-50 sortBtn"onClick={Bsort} disabled={isProcessing} >SORT</Button >
          </div> 
        </div>
   );
 }

 
export default BubbleSort ;