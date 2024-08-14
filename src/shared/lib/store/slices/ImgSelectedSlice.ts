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
  removeSelectedImg(state: IImgSelected, action: PayloadAction<number>): void;
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
      action.payload.forEach((f) => {
        const fileIndex = state.loadedImgs.findIndex((f, indx) => {
          if (f.name == f.name && f.size == f.size && f.type == f.type) {
            return indx
          }
        })
        if (!fileIndex) return
        state.loadedImgs = state.loadedImgs.splice(fileIndex, 1) 
      })
    },
    removeSelectedImg(state, action) {
      const selectedIndex = state.selectedImgs.findIndex(v => v == action.payload)
      if (!selectedIndex) return
      state.selectedImgs = state.selectedImgs.splice(selectedIndex, 1)
    },
  }
})


export const imgSelectedActions = imgSelectedSlice.actions;
export const imgSelectedReducers = imgSelectedSlice.reducer;