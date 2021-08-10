import React, { createContext, useState } from "react";

export const IsProcessingContext = createContext();

export function IsProcessingProvider(props) {

 let [isProcessing, setIsProcessing] = useState(false);


  const changeIsProcessing = () => {
   setIsProcessing(isProcessing=!isProcessing);
  };



  return (
    <IsProcessingContext.Provider value={{ isProcessing,changeIsProcessing}}>
      {props.children}
    </IsProcessingContext.Provider>
  );
}