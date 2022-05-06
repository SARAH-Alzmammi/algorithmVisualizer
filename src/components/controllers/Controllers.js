import "../css/sort.css";
import { Form, Button } from "react-bootstrap";
import { generateNewArray, changeSize } from "../../redux/array";
import { changeSpeed } from "../../redux/speed";
import { isProcessing as isProcessingState } from "../../redux/isProcessing";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Controllers() {
  const isProcessing = useSelector(isProcessingState).isProcessing;
  const dispatch = useDispatch();
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
