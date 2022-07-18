import {
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit'

import { login } from 'multikurirkurir/src/services/auth'
import { _storeData } from 'multikurirkurir/src/stores/asyncStore';
import { setTokenBearer } from "multikurirkurir/src/services/xhr";

const authsAdapter = createEntityAdapter({
  selectId: () => 0
})

const initialState = authsAdapter.getInitialState({
  status: 'idle',
  error: ''
})

const authsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authDeleted: authsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle'
        const data = action.payload
        const authData = {
          profile: data.profile,
          agent: data.agent
        }
        authsAdapter.addOne(state, authData)

        const token = data.token_type + ' ' + data.access_token;
        _storeData('@token', token)

        setTokenBearer()
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload.message
      })
  },
})

export const {
  authDeleted,
} = authsSlice.actions

export default authsSlice.reducer
