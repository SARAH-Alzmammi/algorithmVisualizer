import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface IsearchKey {
  searchKey: number;
}
// Define the initial state using that type

const initialState: IsearchKey = {
  searchKey: 3
};
export const searchKeySlice = createSlice({
  name: "searchKey",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    }
  }
});

export const { setSearchKey } = searchKeySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const searchKey = (state: RootState) => state.searchKey;

export default searchKeySlice.reducer;
