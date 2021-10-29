import React, { useContext ,useState,useEffect} from 'react';

import { Button  } from 'react-bootstrap';
import '../css/search.css';


import delay from '../helper'

import SearchingColorKey from '../SearchingColorKey';

import SearchControllers from '../controllers/SearchControllers';

import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'
import {SearchKeyContext} from '../contexts/SearchKeyContext'


function BinarySearch() {


  let { isProcessing, changeIsProcessing } = useContext(IsProcessingContext);
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

  
    return (
        <div className="box">
          <h3 className="algoName">Binary Search</h3>
          <SearchControllers />
          <div className="view" >
              <div className="arrayContainerSearch" key={array} >
                {array.map((value, idx) => {
                return (
                <div key={idx} >
                <div className="arrayElementSearch" 
                  style={{
                    height: `3rem`,
                    width: `3rem`,
                   }}>
                   { value}
                </div>
                </div>
                )
                })}
          </div>
          <div className="sortBtn-colorkey">
          <Button size="sm" className="mt-3  w-50 sortBtn" onClick={BinarySearchFunction} disabled={isProcessing} >Search </Button >
          <SearchingColorKey/>
          </div>

          </div> 
        </div>
   );
 }

 
export default BinarySearch ;