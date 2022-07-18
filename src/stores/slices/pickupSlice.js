import {
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit'

import { list } from 'multikurirkurir/src/services/pickup'

const pickupAdapter = createEntityAdapter({
  selectId: (pickup) => pickup.id
})

const initialState = pickupAdapter.getInitialState({
  status: 'idle',
  error: '',
  entities: []
})

const pickupsSlice = createSlice({
  name: 'pickup',
  initialState,
  reducers: {
    removePickupList: pickupAdapter.removeAll,
  },
  extraReducers: (builder) => {
    builder
      .addCase(list.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(list.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'idle'
        const data = action.payload.listpesanan
        pickupAdapter.upsertMany(state, data)
      })
      .addCase(list.rejected, (state, action) => {
        console.log(action)
        state.status = 'failed'
        state.error = action.payload.message
      })
  },
})

export const {
  removePickupList,
} = pickupsSlice.actions

export default pickupsSlice.reducer
