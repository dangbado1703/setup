import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import util from "./reducer";

export const store = configureStore({
  reducer: util,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
