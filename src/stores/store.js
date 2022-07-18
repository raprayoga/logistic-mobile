import { configureStore } from '@reduxjs/toolkit'

import authsSlice from 'multikurirkurir/src/stores/slices/authSlice'
import pickupsSlice from 'multikurirkurir/src/stores/slices/pickupSlice'
// import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    auth: authsSlice,
    pickup: pickupsSlice,
  },
})

export default store
