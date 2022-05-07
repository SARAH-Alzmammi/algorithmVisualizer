import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface Ispeed {
  speed: number;
}
// Define the initial state using that type

const initialState: Ispeed = {
  speed: 250
};
export const speedSlice = createSlice({
  name: "speed",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeSpeed: (state, action) => {
      let chosenSpeed = action.payload;

      if (chosenSpeed == "Slow") {
        state.speed = 2000;
      } else if (chosenSpeed == "Medium") {
        state.speed = 1000;
      } else {
        state.speed = 250;
      }
    }
  }
});

export const { changeSpeed } = speedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const speed = (state: RootState) => state.speed;

export default speedSlice.reducer;
