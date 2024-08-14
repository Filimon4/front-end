import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IImgSelected } from "@shared/types/ImgSelected.types";

const initialState: IImgSelected = {
  loadedImgs: [],
  selectedImgs: []
}

type TImgSelectedReducers = {
  addLoadedImgs(state: IImgSelected, action: PayloadAction<File[]>): void;
  removeLoadedImg(state: IImgSelected, action: PayloadAction<File[]>): void;
  addSelectedImg(state: IImgSelected, action: PayloadAction<number>): void;
  removeSelectedImg(state: IImgSelected, action: PayloadAction<number[]>): void;
}

export const imgSelectedSlice: Slice<typeof initialState, TImgSelectedReducers, 'imgSelected'> = createSlice({
  name: 'imgSelected',
  initialState,
  reducers: {
    addLoadedImgs(state, action) {
      action.payload.forEach((f) => {
        state.loadedImgs.push(f)
      })
    },
    addSelectedImg(state, action) {
      state.selectedImgs.push(action.payload)
    },
    removeLoadedImg(state, action) {
      action.payload.forEach((file) => {
        const fileIndex = state.loadedImgs.findIndex((f, indx) => f.name == file.name)
        console.log(`fileIndex ${fileIndex}`)
        state.loadedImgs = state.loadedImgs.filter((v, i) => i !== fileIndex) 
      })
    },
    removeSelectedImg(state, action) {
      action.payload.forEach((value) => {
        const selectedIndex = state.selectedImgs.findIndex(v => v == value)
        state.selectedImgs = state.selectedImgs.filter((v, i) => i !== selectedIndex)
      })
    },
  }
})


export const imgSelectedActions = imgSelectedSlice.actions;
export const imgSelectedReducers = imgSelectedSlice.reducer;