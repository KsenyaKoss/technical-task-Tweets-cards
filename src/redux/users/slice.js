import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [fetchUsers.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.users = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const usersReducer = usersSlice.reducer