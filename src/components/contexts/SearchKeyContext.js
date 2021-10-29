import React, { createContext, useState } from "react";

export const SearchKeyContext = createContext();

export function SearchKeyProvider(props) {

  let [key, setKey] = useState(5);

  return (
    <SearchKeyContext.Provider value={{ key, setKey }}>
      {props.children}
    </SearchKeyContext.Provider>
  );
}