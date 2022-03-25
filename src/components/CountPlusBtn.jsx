import React from 'react'
import { useDispatch } from "react-redux";
import { increment } from "../features/counter/counterSlice";
function CountPlusBtn() {
    const dispatch = useDispatch();

    const handleIncrement = ()=>{
        dispatch(increment());
    }
    return (
        <button onClick={handleIncrement}>+</button>
    )
}

export default CountPlusBtn