import { post } from "./xhr";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const list = createAsyncThunk(
  'pickup/list',
  async (payload, {rejectWithValue}) => {
    try{
      const response = await post('kirimdomestik/listpesanan/list', payload)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)