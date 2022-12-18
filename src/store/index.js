import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { direction: "left" };

const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    goRight(state) {
      state.direction = "left";
    },
    goLeft(state) {
      state.direction = "right";
    },
  },
});

const store = configureStore({
  reducer: slideSlice.reducer,
});

export const slideActions = slideSlice.actions;

export default store;
