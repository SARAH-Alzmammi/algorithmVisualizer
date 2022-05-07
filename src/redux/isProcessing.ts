import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface IisProcessing {
  isProcessing: boolean;
}
// Define the initial state using that type

const initialState: IisProcessing = {
  isProcessing: false
};
export const isProcessingSlice = createSlice({
  name: "speed",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleIsProcessing: (state) => {
      state.isProcessing = !state.isProcessing;
    }
  }
});

export const { toggleIsProcessing } = isProcessingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isProcessing = (state: RootState) => state.isProcessing;

export default isProcessingSlice.reducer;
