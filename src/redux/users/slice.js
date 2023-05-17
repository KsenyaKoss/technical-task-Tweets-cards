import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateUser } from "./operations";

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
    [updateUser.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      const index = state.users.findIndex(user => user.id === payload.id)
      state.users.splice(index, 1,  payload)
      state.error = null;
    },
    [updateUser.pending]: (state)=> {
      state.isLoading = true;
    },
     [updateUser.rejected]: (state, {payload}) => {
      state.error = payload
      state.isLoading = false
    }
  },
});

export const usersReducer = usersSlice.reducer