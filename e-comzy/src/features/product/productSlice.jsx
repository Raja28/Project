import {createSlice} from '@reduxjs/toolkit'

const initialState = []


export const productSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        add: (state, action)=>{
            state.push(action.payload) 
        },
        remove: (state, action)=>{
          return state.filter( item => item.id !== action.payload )
        }
       
    }
})

export const {add, remove} = productSlice.actions
export default productSlice.reducer
