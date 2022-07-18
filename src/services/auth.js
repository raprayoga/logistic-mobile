import { post } from "./xhr";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'auth/login',
  async (payload, {rejectWithValue}) => {
    try{
      const response = await post('/admin/login', payload)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const lupaPassword = (payload) => {
  return post('/forgot-password/request', payload)
}