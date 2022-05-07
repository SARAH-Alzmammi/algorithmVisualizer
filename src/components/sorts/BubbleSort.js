import { useSelector, useDispatch } from "react-redux";
import delay from "../helper";
import { toggleIsProcessing } from "../../redux/isProcessing";
import SortView from "./SortView";
import { speed as speedState } from "../../redux/speed";
import { arrayState, setArray } from "../../redux/array";

function BubbleSort() {
  const speed = useSelector(speedState).speed;
  const dispatch = useDispatch();
  let array = [...useSelector(arrayState).arrayElements];

  async function BubbleSortFunction() {
    await dispatch(toggleIsProcessing());
    let arrayBar = document.getElementsByClassName("arrayElement");
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        arrayBar[j].style.backgroundColor = "#417AD5";
        arrayBar[j + 1].style.backgroundColor = "#417AD5";
        await delay(speed);
        if (array[j] > array[j + 1]) {
          arrayBar[j].style.backgroundColor = "#D54A41";
          arrayBar[j + 1].style.backgroundColor = "#D54A41";
          await delay(speed);
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          arrayBar[j].style.backgroundColor = "gray";
          arrayBar[j + 1].style.backgroundColor = "gray";
          // setArray(array) //Not like this because it is basically the same array(same reference).
          let newArray = [...array]; //clone  to cause to re-render
          dispatch(setArray(newArray));
        } else {
          arrayBar[j].style.backgroundColor = " #4F7942";
          arrayBar[j + 1].style.backgroundColor = " #4F7942";
          await delay(speed);
          arrayBar[j].style.backgroundColor = "gray";
          arrayBar[j + 1].style.backgroundColor = "gray";
        }
      }
    }

    await dispatch(toggleIsProcessing());
  }

  let description = `This sorting method is a comparison-based algorithm in which each pair of adjacent elements is compared, and if they are not in order, the elements get swapped.It has O(n2) average and worst-case complexity, where n is the number of items.
  `;

  return (
    <SortView
      name="Bubble Sort"
      function={BubbleSortFunction}
      description={description}
    />
  );
}

export default BubbleSort;
