import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { imgHistorySlice } from "./slices/imgHistorySlice.ts";

const rootReducers = combineReducers({
  [imgHistorySlice.name]: imgHistorySlice.reducer
})

export const setupStore = (): Store => {
  return configureStore({
    reducer: rootReducers
  })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
