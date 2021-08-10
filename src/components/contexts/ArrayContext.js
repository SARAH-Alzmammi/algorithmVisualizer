import React, { createContext, useState } from "react";

export const ArrayContext = createContext();

export function ArrayProvider(props) {

  let [array, setArray] = useState([50, 40, 100, 30, 10]);
  
 let [size, setSize] = useState(5);

 const generateNewArray = (e) => {
  let arr = []
  for(let i = 0; i < size; i++) {
   let newNumber = Math.floor(Math.random() * 100+1); 
   arr.push(newNumber)
  }
  setArray(arr);
  }

  const changeSize = e => {
    setSize(e.target.value)
    generateNewArray()
  };



  return (
    <ArrayContext.Provider value={{ array,setArray,changeSize,generateNewArray }}>
      {props.children}
    </ArrayContext.Provider>
  );
}