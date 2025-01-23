import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullName:"",
    email:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeFullName:(state,action)=>{
            state.fullName = action.payload
        },
        changeEmail:(state,action)=>{
            state.email = action.payload
        },
        changeBoth:(state,action)=>{
            state.fullName = action.payload.fullName
            state.email = action.payload.email
        },
        
    }
})

export const {changeFullName, changeEmail, changeBoth} = userSlice.actions

export default userSlice.reducer