import React, { useContext } from 'react';


import delay from '../helper'


import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'
import {SearchKeyContext} from '../contexts/SearchKeyContext'

import SearchesView from './SearchesView'

function LinearSearch() {


  let {changeIsProcessing } = useContext(IsProcessingContext);
  let { speed } = useContext(SpeedContext);
  let { array } = useContext(ArrayContext);
  let { key } = useContext(SearchKeyContext);
  
  async function LinearSearchFunction() {
    
    await changeIsProcessing()
    
      let arrayBar = document.getElementsByClassName('arrayElementSearch')


      for (let i = 0; i < array.length; i++){
       
       await delay(speed);
       
       arrayBar[i].style.color = "#ffffff";
       arrayBar[i].style.border = "none";
       arrayBar[i].style.backgroundColor = "#417AD5";
        
       if (array[i] == key) {
        await delay(speed); 
        arrayBar[i].style.backgroundColor = "#4F7942";
         break;
         
       } else {
        await delay(speed);
        arrayBar[i].style.backgroundColor = "#D54A41";
       }
       }   
  await changeIsProcessing()
   }
let description="Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection."
  
  return (
    <SearchesView name="Linear Search" function={LinearSearchFunction} description={ description  }/>
   );
 }

 
export default LinearSearch ;