import React, { useContext } from "react";
import "../css/sort.css";
import { Form, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { generateNewArray, changeSize } from "../../redux/array";
import { changeSpeed } from "../../redux/speed";
import { isProcessing as isProcessingState } from "../../redux/isProcessing";
import { searchKey, setSearchKey } from "../../redux/searchKey";
export default function SearchControllers(e) {
  const isProcessing = useSelector(isProcessingState).isProcessing;
  const dispatch = useDispatch();
  const key = useSelector(searchKey).searchKey;

  // function changeKey(e) {
  //   setKey(e.target.value);
  // }
  return (
    <div className="bars">
      <Form.Label className="formLabel">Speed</Form.Label>
      <Form.Select
        onChange={(e) => dispatch(changeSpeed(e.target.value))}
        disabled={isProcessing}>
        <option>Fast</option>
        <option>Medium</option>
        <option>Slow</option>
      </Form.Select>

      <Form.Label className="formLabel">Size of the array : </Form.Label>

      <Form.Select
        onChange={(e) => {
          dispatch(changeSize(e.target.value));
          dispatch(generateNewArray());
        }}
        disabled={isProcessing}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>30</option>
      </Form.Select>
      <Form.Label className="formLabel">Search Key: </Form.Label>

      <Form.Control
        type="number"
        value={key}
        onChange={(e) => dispatch(setSearchKey(e.target.value))}
        disabled={isProcessing}
        required
      />

      <Button
        size="sm"
        className=" mt-3 w-50 generateBtn"
        onClick={() => dispatch(generateNewArray())}
        disabled={isProcessing}>
        New Array
      </Button>
    </div>
  );
}
