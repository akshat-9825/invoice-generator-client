import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  refetchStatus: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setRefetch: (state, action) => {
      state.refetchStatus = action.payload;
    },
  },
});

export const { setRefetch } = authSlice.actions;

export const selectRefetch = (state: RootState) => {
  return state.auth.refetchStatus;
};

export default authSlice.reducer;
