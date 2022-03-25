import React from 'react'
import { useDispatch } from "react-redux";
import { decrement } from "../features/counter/counterSlice";
function CountMinusBtn() {
    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        dispatch(decrement());
    }
    return (
        <button onClick={handleIncrement}>-</button>
    )
}

export default CountMinusBtn