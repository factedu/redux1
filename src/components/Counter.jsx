import React from 'react'
import { useSelector } from "react-redux";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    return (
        <div>current store.counter.value : {count}</div>
    )
}

export default Counter