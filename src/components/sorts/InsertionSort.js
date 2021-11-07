import React, { useContext } from 'react';
import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'


import delay from '../helper'
import SortView from './SortView';



function InsertionSort(){

  let {changeIsProcessing } = useContext(IsProcessingContext);
  let { speed } = useContext(SpeedContext);
  let { array, setArray } = useContext(ArrayContext);

  async function  InsertionSortFunctopn() 
{
  
    await changeIsProcessing()

    let arrayBar = document.getElementsByClassName('arrayElement')

    for (let i = 1; i < array.length; i++){

      let current = array[i];
      let j = i - 1; //before the current position

      arrayBar[i].style.backgroundColor = "#417AD5"; //current
      await delay(speed);
      while (j >= 0 && array[j] > current) {
        await delay(speed);
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
      await delay(speed);

      arrayBar[j + 1].style.backgroundColor = "gray";
    } 
    await changeIsProcessing()
}
let description=
"This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element that is to be 'inserted in this sorted sub-list, has to find its appropriate place, and then it has to be inserted there.  The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). Its average and worst-case complexity are of Ο(n2), where n is the number of items."
  return (
    <SortView name="Insertion Sort" function={InsertionSortFunctopn }description={description}/>

   )
}
 
export default InsertionSort ;