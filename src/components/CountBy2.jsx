import React from 'react'
import { useDispatch } from "react-redux";
import { incrementBy } from "../features/counter/counterSlice";
function CountBy2() {
    const dispatch = useDispatch();
  return (
    <button onClick={()=>{dispatch(incrementBy(2))}}>+ by 2</button>
  )
}

export default CountBy2