import React, { useContext } from 'react';

import {Button  } from 'react-bootstrap';
import '../css/search.css';


import delay from '../helper'

import SearchingColorKey from '../SearchingColorKey';

import SearchControllers from '../controllers/SearchControllers';

import { ArrayContext } from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'
import {SearchKeyContext} from '../contexts/SearchKeyContext'


function LinearSearch() {


  let { isProcessing,changeIsProcessing } = useContext(IsProcessingContext);
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

  
    return (
        <div className="box">
          <h3 className="algoName">Linear Search</h3>
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
          <Button size="sm" className="mt-3  w-50 sortBtn" onClick={LinearSearchFunction} disabled={isProcessing} >Search </Button >
          <SearchingColorKey/>
          </div>

          </div> 
        </div>
   );
 }

 
export default LinearSearch ;