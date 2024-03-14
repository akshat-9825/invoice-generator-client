import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { AuthState } from "../../utils/types";

const initialState: AuthState = {
  refetchStatus: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState") as string).auth
    : initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = null;
    },
    setRefetch: (state, action) => {
      state.refetchStatus = action.payload;
    },
  },
});

export const { setRefetch, setToken, deleteToken } = authSlice.actions;

export const selectRefetch = (state: RootState) => {
  return state.auth.refetchStatus;
};

export const selectToken = (state: RootState) => {
  return state.auth.token;
};

export default authSlice.reducer;
