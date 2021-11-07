import React, { useContext } from 'react';


import delay from '../helper'


import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'
import SortView from './SortView';





function BubbleSort() {


  let { changeIsProcessing } = useContext(IsProcessingContext);
  let { speed } = useContext(SpeedContext);
  let { array, setArray } = useContext(ArrayContext);


  async function BubbleSortFunction() {
  
  await changeIsProcessing()

    let arrayBar = document.getElementsByClassName('arrayElement')
    
     for (let i = 0; i < array.length - 1; i++) {
     
       for (let j = 0; j < array.length - i - 1; j++) {
       
       arrayBar[j].style.backgroundColor = "#417AD5";
        arrayBar[j + 1].style.backgroundColor = "#417AD5";
         
         await delay(speed);
         

         if (array[j] > array[j + 1]) {
        
        arrayBar[j].style.backgroundColor = "#D54A41";
           arrayBar[j + 1].style.backgroundColor = "#D54A41";
           
        await  delay(speed);
         let temp = array[j];
         array[j] =array[j+1];
         array[j + 1] = temp;
         arrayBar[j].style.backgroundColor = "gray";
         arrayBar[j + 1].style.backgroundColor = "gray";
          // setArray(array) //Not like this becuse it is basically the same array(same reference). 
         let newArray = [...array] //clone  to cause to re-render
          setArray(newArray)
       } else {
        arrayBar[j].style.backgroundColor = " #4F7942";
        arrayBar[j+1].style.backgroundColor = " #4F7942";
        await  delay(speed);
        arrayBar[j].style.backgroundColor = "gray";
         arrayBar[j + 1].style.backgroundColor = "gray";
  
       }
     }
  }
  await changeIsProcessing()
   }

  let description = `This sorting method is a comparison-based algorithm in which each pair of adjacent elements is compared, and if they are not in order, the elements get swapped.It has O(n2) average and worst-case complexity, where n is the number of items.
  `


    return (
      <SortView name="Bubble Sort" function={BubbleSortFunction} description={description }/>
   );
 }

 
export default BubbleSort ;