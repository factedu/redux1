import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state)=>{
            state.value= state.value+1
        },
        decrement:(state)=>{
            state.value = state.value-1
        },
        incrementBy:(state,action)=>{
            const {payload}=action;
            state.value=state.value+payload
        }
    }
});

export const {increment,decrement, incrementBy} = counterSlice.actions;

export default counterSlice.reducer;