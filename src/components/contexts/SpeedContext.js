import React, { createContext, useState } from "react";

export const SpeedContext = createContext();

export function SpeedProvider(props) {

  const [speed, setSpeed] = useState(250);
  
  async function changeSpeed(e) {

    let chosenSpeed = e.target.value
    
    if (chosenSpeed == 'Slow') {
      setSpeed(2000);
    } else if (chosenSpeed == 'Medium') {
      setSpeed(1000);
    } else {
      setSpeed(250);
    }

}


  return (
    <SpeedContext.Provider value={{ speed, changeSpeed }}>
      {props.children}
    </SpeedContext.Provider>
  );
}