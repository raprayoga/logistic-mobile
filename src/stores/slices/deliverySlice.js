import {
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit'

import { list } from 'multikurirkurir/src/services/delivery'

const deliveryAdapter = createEntityAdapter({
  selectId: (delivery) => delivery.id
})

const initialState = deliveryAdapter.getInitialState({
  status: 'idle',
  error: '',
  entities: []
})

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    removeDeliveryList: deliveryAdapter.removeAll,
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
        deliveryAdapter.upsertMany(state, data)
      })
      .addCase(list.rejected, (state, action) => {
        console.log(action)
        state.status = 'failed'
        state.error = action.payload.message
      })
  },
})

export const {
  removeDeliveryList,
} = deliverySlice.actions

export default deliverySlice.reducer
