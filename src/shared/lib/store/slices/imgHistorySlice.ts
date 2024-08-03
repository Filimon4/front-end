import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

// TODO: После бд переделать на нормальный тип
type TImgModel = {
  createAt: Date;
  name: string
}

interface ImgHistory {
  imgs: TImgModel[]
  isLoading: boolean,
  error: string
}

const initialState: ImgHistory = {
  imgs: [
    {
      name: 'TestNewImg',
      createAt: new Date()
    }
  ],
  isLoading: false,
  error: ''
}

export const imgHistorySlice: Slice = createSlice({
  name: 'imgHistory',
  initialState,
  reducers: {
    addImg(state, action: PayloadAction<TImgModel>) {
      state.imgs.push(action.payload)
    }
  }
})

export default imgHistorySlice.reducer;
