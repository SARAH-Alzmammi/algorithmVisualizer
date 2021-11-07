import React, { useContext ,useState,useEffect} from 'react';



import SearchesView from './SearchesView'

import delay from '../helper'


import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'
import {SearchKeyContext} from '../contexts/SearchKeyContext'


function BinarySearch() {


  let {  changeIsProcessing } = useContext(IsProcessingContext);
  let { speed } = useContext(SpeedContext);
  let { array, setArray } = useContext(ArrayContext);
  let { key } = useContext(SearchKeyContext);

 
  let [low,setL] = useState(0);
  let [high, setH] = useState(array.length - 1);
  let [mid, setMid] = useState(low + high / 2);

  useEffect(() => {
    let sortedArray =  array.sort((a, b) => a - b)
    setArray(sortedArray)
      setL(0);
      setH(array.length - 1);
      setMid(low + high / 2);
  });

  async function BinarySearchFunction() {
    
    await changeIsProcessing()
    
    let arrayBar = document.getElementsByClassName('arrayElementSearch')
    
    await delay(speed);


    arrayBar[parseInt(mid)].style.color = "#ffffff";
    arrayBar[parseInt(mid)].style.border = "none";
    arrayBar[parseInt(mid)].style.backgroundColor = "#417AD5";
    
    while (low <= high) {
       
      if (array[parseInt(mid)] < key) {
        await delay(speed);
        arrayBar[parseInt(mid)].style.backgroundColor = "#D54A41";
        setL(low=mid + 1);
      } else if (array[parseInt(mid)] > key) {
        await delay(speed);
        arrayBar[parseInt(mid)].style.backgroundColor = "#D54A41";
 
        setH(high=mid-1)
       

      }else {    
        await delay(speed);
     
        arrayBar[parseInt(mid)].style.color = "#ffffff";
        arrayBar[parseInt(mid)].style.backgroundColor = "#4F7942";
  
        break;
      }      

      
      let temp = (low + high )
      setMid(mid = parseInt(temp/2  ))
 
      if (low < 0 || high > array.length - 1) {
        for (let i = 0; i < array.length; i++) {
          arrayBar[mid].style.backgroundColor = "#D54A41"
        }
      }
     
    }
    if (low > high > array.length- 1 || high < 0) {
      for (let i = 0; i < array.length; i++) {
        arrayBar[i].style.color = "#ffffff";
        arrayBar[i].style.backgroundColor = "#D54A41"
      }
      
    }

  await changeIsProcessing()
  }
  let description="Binary search is a fast search algorithm with run-time complexity of Ο(log n). For this algorithm to work properly, the data collection should be in sorted form.A binary search looks for a particular item by comparing the middle-most item of the collection. If a match occurs, then the index of the item is returned. If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item. Otherwise, the item is searched for in the sub-array to the right of the middle item. This process continues on the sub-array as well until the size of the subarray reduces to zero."
    return (
      <SearchesView name="Binary Search" function={BinarySearchFunction} description={ description  }/>
   );
 }

 
export default BinarySearch ;