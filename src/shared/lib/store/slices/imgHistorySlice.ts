import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IImgHistory, TImgModel } from "@shared/types/imghistory.types";

const initialState: IImgHistory = {
  imgs: [
    {
      id: 1,
      name: 'TestNewImg',
    },
  ],
  isLoading: false,
  error: ''
}

export const imgHistorySlice: Slice = createSlice({
  name: 'imgHistory',
  initialState,
  reducers: {
    addImg(state: IImgHistory, action: PayloadAction<Omit<TImgModel, 'id'>>) {
      const id = state.imgs.length == 0 ? 0 : state.imgs.at(-1)?.id
      state.imgs.push({name: action.payload.name, id: id! + 1})
    },
    removeImg(state: IImgHistory, action: PayloadAction<number>) {
      const index = state.imgs.findIndex(value => value.id == action.payload)
      state.imgs.splice(index, 1);
    }
  }
})

export default imgHistorySlice.reducer;
