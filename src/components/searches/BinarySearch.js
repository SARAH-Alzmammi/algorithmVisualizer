import SearchesView from "./SearchesView";

import delay from "../helper";

import { searchKey } from "../../redux/searchKey";
import { useSelector, useDispatch } from "react-redux";
import { speed as speedState } from "../../redux/speed";
import { arrayState, setArray } from "../../redux/array";
import { toggleIsProcessing } from "../../redux/isProcessing";

function BinarySearch() {
  const speed = useSelector(speedState).speed;
  let array = [...useSelector(arrayState).arrayElements];
  const key = useSelector(searchKey).searchKey;
  const dispatch = useDispatch();
  let low = 0;
  let high = 0;
  let mid = 0;
  async function BinarySearchFunction() {
    dispatch(toggleIsProcessing());
    let sortedArray = array.sort((a, b) => a - b);
    dispatch(setArray(sortedArray));
    low = 0;
    high = array.length - 1;
    mid = low + high / 2;
    let arrayBox = document.getElementsByClassName("arrayElementSearch");
    await delay(speed);
    arrayBox[parseInt(mid)].style.color = "#ffffff";
    arrayBox[parseInt(mid)].style.border = "none";
    arrayBox[parseInt(mid)].style.backgroundColor = "#417AD5";
    console.log(mid);
    while (low <= high) {
      if (array[parseInt(mid)] < key) {
        await delay(speed);
        arrayBox[parseInt(mid)].style.backgroundColor = "#D54A41";
        low = mid + 1;
      } else if (array[parseInt(mid)] > key) {
        await delay(speed);
        arrayBox[parseInt(mid)].style.backgroundColor = "#D54A41";
        high = mid - 1;
      } else {
        await delay(speed);
        arrayBox[parseInt(mid)].style.color = "#ffffff";
        arrayBox[parseInt(mid)].style.backgroundColor = "#4F7942";
        break;
      }

      let temp = low + high;
      mid = parseInt(temp / 2);
      if (low < 0 || high > array.length - 1) {
        for (let i = 0; i < array.length; i++) {
          arrayBox[mid].style.backgroundColor = "#D54A41";
        }
      }
    }
    if (low > high > array.length - 1 || high < 0) {
      for (let i = 0; i < array.length; i++) {
        arrayBox[i].style.color = "#ffffff";
        arrayBox[i].style.backgroundColor = "#D54A41";
      }
    }

    dispatch(toggleIsProcessing());
  }
  let description =
    "Binary search is a fast search algorithm with run-time complexity of Ο(log n). For this algorithm to work properly, the data collection should be in sorted form.A binary search looks for a particular item by comparing the middle-most item of the collection. If a match occurs, then the index of the item is returned. If the middle item is greater than the item, then the item is searched in the sub-array to the left of the middle item. Otherwise, the item is searched for in the sub-array to the right of the middle item. This process continues on the sub-array as well until the size of the suBoxray reduces to zero.";
  return (
    <SearchesView
      name="Binary Search"
      function={BinarySearchFunction}
      description={description}
    />
  );
}

export default BinarySearch;
