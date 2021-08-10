import React, { useContext } from 'react';
import '../sorts/sort.css';
import { Form,Button  } from 'react-bootstrap';

import {ArrayContext} from '../contexts/ArrayContext'
import {SpeedContext} from '../contexts/SpeedContext'
import {IsProcessingContext} from '../contexts/IsProcessingContext'

export default function Controllers() {

  let { array,changeSize,generateNewArray } = useContext(ArrayContext);
  let { speed, changeSpeed } = useContext(SpeedContext);
  let { isProcessing} = useContext(IsProcessingContext);

    return (
    <div className="bars">

      <Form.Label className="formLabel" >Speed</Form.Label>
      <Form.Select  onChange={changeSpeed} disabled={isProcessing}>
        <option>Fast</option>
        <option>Medium</option>
        <option>Slow</option>
        </Form.Select>
            
      <Form.Label className="formLabel">Size of the array : </Form.Label>
      <Form.Control type="number" value={array.length} onChange={changeSize} disabled={isProcessing}/>
      <Button size="sm" className=" mt-3 w-50 generateBtn"onClick={generateNewArray} disabled={isProcessing} >New Array</Button >
    </div>


   );
 }

