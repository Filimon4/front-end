import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { imgHistoryReducers, imgHistorySlice } from "./slices/imgHistorySlice.ts";
import { puppeteerApi } from "../queryApi/puppeteerApi.ts";
import { authApi } from "../queryApi/authApi.ts";

const rootReducers = combineReducers({
  [imgHistorySlice.name]: imgHistoryReducers,
  [puppeteerApi.reducerPath]: puppeteerApi.reducer,
  [authApi.reducerPath]: authApi.reducer
})

export const setupStore = (): Store => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(puppeteerApi.middleware).concat(authApi.middleware)
    }
  })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
