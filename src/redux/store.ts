import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./array";
import speedReducer from "./speed";
import isProcessingReducer from "./isProcessing";
import searchKeyReducer from "./searchKey";
const store = configureStore({
  reducer: {
    array: arrayReducer,
    speed: speedReducer,
    isProcessing: isProcessingReducer,
    searchKey: searchKeyReducer
  }
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
