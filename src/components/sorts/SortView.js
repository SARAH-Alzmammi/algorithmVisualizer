import React, { useContext } from "react";

import { Button } from "react-bootstrap";
import "../css/sort.css";
import SortingColorKey from "../SortingColorKey";
import { arrayState } from "../../redux/array";
import { useSelector } from "react-redux";
import Controllers from "../controllers/Controllers";
import { isProcessing as isProcessingState } from "../../redux/isProcessing";

function SortView(props) {
  const array = useSelector(arrayState);
  const isProcessing = useSelector(isProcessingState).isProcessing;
  return (
    <div className="box">
      <h3 className="algoName">{props.name}</h3>
      <Controllers />

      <div className="view">
        <div className="arrayContainer" key={array}>
          {array.arrayElements.map((value, idx) => {
            return (
              <div key={idx}>
                <p className="arrayValue">{value}</p>
                <div
                  className="arrayElement"
                  style={{
                    height: `${value}px`,
                    width: `1rem`
                  }}></div>
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
            SORT
          </Button>
          <SortingColorKey />
        </div>

        <h3>Description:</h3>
        <hr />
        <div>{props.description}</div>
      </div>
    </div>
  );
}

export default SortView;
