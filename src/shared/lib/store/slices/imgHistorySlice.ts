import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IImgHistory, TImgModel } from "@shared/types/imghistory.types";

const initialState: IImgHistory = {
  imgs: [
    {
      id: 1,
      name: 'TestNewImg',
      selected: false,
    },
  ],
}

type TImgHistoryReducers = {
  addImg(state: IImgHistory, action: PayloadAction<Omit<TImgModel, 'id'>>): void;
  removeImg(state: IImgHistory, action: PayloadAction<number>): void;
  selectRow(state: IImgHistory, action: PayloadAction<{id: number, selectState: boolean}>): void;
}

export const imgHistorySlice: Slice<typeof initialState, TImgHistoryReducers, 'imgHistory'> = createSlice({
  name: 'imgHistory',
  initialState,
  reducers: {
    addImg(state, action) {
      const id = state.imgs.length == 0 ? 0 : state.imgs.at(-1)?.id
      state.imgs.push({name: action.payload.name, id: id! + 1, selected: false})
    },
    removeImg(state, action) {
      const index = state.imgs.findIndex(value => value.id == action.payload)
      console.log(index)
      state.imgs.splice(index, 1);
    },
    selectRow(state, action) {
      const row = state.imgs.find(row => row.id == action.payload.id )
      if (row) {
        row.selected = action.payload.selectState
      }
    }
  }
})

export const imgHistoryActions = imgHistorySlice.actions;
export const imgHistoryReducers = imgHistorySlice.reducer;