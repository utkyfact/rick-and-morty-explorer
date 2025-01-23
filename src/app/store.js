import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counterSlice"
import userReducer from "../features/userSlice"
import { rickAndMortyApi } from '../features/services/RickandMortyServices'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [rickAndMortyApi.reducerPath]:rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>{
    return(getDefaultMiddleware().concat(rickAndMortyApi.middleware))
  }
})
