import React, { useContext } from "react";

import delay from "../helper";

import { speed as speedState } from "../../redux/speed";
import { arrayState, setArray } from "../../redux/array";
import { toggleIsProcessing } from "../../redux/isProcessing";

import { searchKey } from "../../redux/searchKey";
import { useSelector, useDispatch } from "react-redux";

import SearchesView from "./SearchesView";

function LinearSearch() {
  const speed = useSelector(speedState).speed;
  const dispatch = useDispatch();
  let array = [...useSelector(arrayState).arrayElements];

  const key = useSelector(searchKey).searchKey;
  async function LinearSearchFunction() {
    await dispatch(toggleIsProcessing());
    let arrayBar = document.getElementsByClassName("arrayElementSearch");

    for (let i = 0; i < array.length; i++) {
      await delay(speed);

      arrayBar[i].style.color = "#ffffff";
      arrayBar[i].style.border = "none";
      arrayBar[i].style.backgroundColor = "#417AD5";

      if (array[i] == key) {
        await delay(speed);
        arrayBar[i].style.backgroundColor = "#4F7942";
        break;
      } else {
        await delay(speed);
        arrayBar[i].style.backgroundColor = "#D54A41";
      }
    }
    await dispatch(toggleIsProcessing());
  }
  let description =
    "Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.";

  return (
    <SearchesView
      name="Linear Search"
      function={LinearSearchFunction}
      description={description}
    />
  );
}

export default LinearSearch;
