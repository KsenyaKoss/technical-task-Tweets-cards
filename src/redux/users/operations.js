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

export const updateUser = createAsyncThunk('user/update',
 async (newUser, {rejectWithValue}) => {
    try {
    const res = await axios.put(`/users/${newUser.id}`, newUser) 
    return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
 }
)