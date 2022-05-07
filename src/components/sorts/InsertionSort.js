import { toggleIsProcessing } from "../../redux/isProcessing";
import { useDispatch, useSelector } from "react-redux";
import { arrayState, setArray } from "../../redux/array";
import { speed as speedState } from "../../redux/speed";

import delay from "../helper";
import SortView from "./SortView";

function InsertionSort() {
  const speed = useSelector(speedState).speed;

  const dispatch = useDispatch();
  let array = [...useSelector(arrayState).arrayElements];

  async function InsertionSortFunctopn() {
    await dispatch(toggleIsProcessing());

    let arrayBar = document.getElementsByClassName("arrayElement");

    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1; //before the current position

      arrayBar[i].style.backgroundColor = "#417AD5"; //current
      await delay(speed);
      while (j >= 0 && array[j] > current) {
        await delay(speed);
        array[j + 1] = array[j];
        let newArray = [...array]; //clone  to cause to re-render
        dispatch(setArray(newArray));
        arrayBar[j].style.backgroundColor = "#D54A41"; //red
        arrayBar[j + 1].style.backgroundColor = "gray";
        j--;
      }
      array[j + 1] = current;
      let newArray = [...array]; //clone  to cause to re-render
      dispatch(setArray(newArray));
      arrayBar[j + 1].style.backgroundColor = "#4F7942";
      await delay(speed);

      arrayBar[j + 1].style.backgroundColor = "gray";
    }

    await dispatch(toggleIsProcessing());
  }

  let description =
    "This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element that is to be 'inserted in this sorted sub-list, has to find its appropriate place, and then it has to be inserted there.  The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). Its average and worst-case complexity are of Ο(n2), where n is the number of items.";
  return (
    <SortView
      name="Insertion Sort"
      function={InsertionSortFunctopn}
      description={description}
    />
  );
}

export default InsertionSort;
