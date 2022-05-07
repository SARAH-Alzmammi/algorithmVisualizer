import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface IArray {
  arrayElements: number[];
  size: number;
}
// Define the initial state using that type

const initialState: IArray = {
  arrayElements: [50, 40, 100, 30, 15],
  size: 5
};
export const arraySlice = createSlice({
  name: "array",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    generateNewArray: (state) => {
      let arr = [];
      for (let i = 0; i < state.size; i++) {
        let newNumber = Math.floor(Math.random() * 100 + 1);
        arr.push(newNumber);
      }
      state.arrayElements = arr;
      console.log("Called");
    },

    setArray: (state, action) => {
      state.arrayElements = action.payload;
      // state.size = state.arrayElements.length;
      // console.log(action.payload.array);
    },
    changeSize: (state, action) => {
      state.size = action.payload;
    }
    //  const  changeSize = e => {
    //   setSize(e.target.value)
    //   generateNewArray()
    // };
  }
});

export const { generateNewArray, setArray, changeSize } = arraySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const arrayState = (state: RootState) => state.array;

export default arraySlice.reducer;
