import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { imgHistorySlice } from "./slices/imgHistorySlice.ts";
import { puppeteerApi } from "../queryApi/puppeteerApi.ts";

const rootReducers = combineReducers({
  [imgHistorySlice.name]: imgHistorySlice.reducer,
  [puppeteerApi.reducerPath]: puppeteerApi.reducer
})

export const actions = {
  
} 

export const setupStore = (): Store => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(puppeteerApi.middleware)
    }
  })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
