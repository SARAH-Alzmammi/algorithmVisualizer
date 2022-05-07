import React, { useContext } from "react";

import { toggleIsProcessing } from "../../redux/isProcessing";
import { useDispatch, useSelector } from "react-redux";
import { arrayState, setArray } from "../../redux/array";
import { speed as speedState } from "../../redux/speed";

import delay from "../helper";

import SortView from "./SortView";

function SelectionSort() {
  const speed = useSelector(speedState).speed;
  const dispatch = useDispatch();
  let array = [...useSelector(arrayState).arrayElements];
  async function SelectionSortFunction() {
    await dispatch(toggleIsProcessing());
    let arrayBar = document.getElementsByClassName("arrayElement");
    for (let i = 0; i < array.length; i++) {
      let current_min = i;
      arrayBar[i].style.backgroundColor = "#417AD5";
      await delay(speed);
      for (let j = i + 1; j < array.length; j++) {
        await delay(speed);
        arrayBar[j].style.backgroundColor = "#417AD5";
        if (array[j] < array[current_min]) {
          current_min = j;
        }
        await delay(speed);
        arrayBar[j].style.backgroundColor = "gray";
      }

      await delay(speed);

      arrayBar[current_min].style.backgroundColor = "#D54A41";
      arrayBar[i].style.backgroundColor = "#D54A41";
      await delay(speed);
      let temp = array[current_min];
      array[current_min] = array[i];
      array[i] = temp;

      let newArray = [...array]; //clone  to cause to re-render
      dispatch(setArray(newArray));
      arrayBar[i].style.backgroundColor = "gray";
    }

    await dispatch(toggleIsProcessing());
  }

  let description = `This sorting method is based on in-place comparison and divides the array into two parts: the sorted part on the left end and the unsorted part on the right. 

   The unsorted array's smallest element is chosen and swapped with the leftmost element, resulting in that element becoming a part of the sorted array. 
   This operation continues to move the unsorted array boundary to the right by one element.
   It has O(n2) average and worst case complexity, where n is the number of objects..
   `;

  return (
    <SortView
      name="Selection Sort"
      function={SelectionSortFunction}
      description={description}
    />
  );
}

export default SelectionSort;
