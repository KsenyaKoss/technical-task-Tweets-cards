import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL='https://6464478f043c103502b6466e.mockapi.io'

export const fetchUsers = createAsyncThunk('users/fetchAll', 
async (_, {rejectWithValue}) => {
  try {
    const res = await axios('/users')
    return res.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})