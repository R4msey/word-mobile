import { createSlice } from "@reduxjs/toolkit"
import { getWordLocalization } from "./thunks"
import { initialState } from "./types"

const languageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {
    deleteSaves(){}},
  extraReducers: builder => {
    builder.addCase(getWordLocalization.fulfilled, (state, action) => {
      state.data = action.payload.storage
      state.locale = action.payload.locale
    })
}})


export default languageSlice.reducer