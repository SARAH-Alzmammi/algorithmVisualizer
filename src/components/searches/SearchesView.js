import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "../css/search.css";

import SearchingColorKey from "../SearchingColorKey";

import SearchControllers from "../controllers/SearchControllers";

import { arrayState } from "../../redux/array";
import { isProcessing as isProcessingState } from "../../redux/isProcessing";

import { useSelector } from "react-redux";

function SearchesViwe(props) {
  const array = useSelector(arrayState).arrayElements;
  const isProcessing = useSelector(isProcessingState).isProcessing;
  return (
    <div className="box">
      <h3 className="algoName">{props.name}</h3>
      <SearchControllers />
      <div className="view">
        <div className="arrayContainerSearch" key={array}>
          {array.map((value, idx) => {
            return (
              <div key={idx}>
                <div
                  className="arrayElementSearch"
                  style={{
                    height: `3rem`,
                    width: `3rem`
                  }}>
                  {value}
                </div>
              </div>
            );
          })}
        </div>
        <div className="sortBtn-colorkey">
          <Button
            size="sm"
            className="mt-3  w-50 sortBtn"
            onClick={props.function}
            disabled={isProcessing}>
            Search{" "}
          </Button>
          <SearchingColorKey />
        </div>
        <h3>Description:</h3>
        <hr />
        <div>{props.description}</div>
      </div>
    </div>
  );
}

export default SearchesViwe;
