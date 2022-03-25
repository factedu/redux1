import React from 'react'
import { useSelector } from "react-redux";
import CountBy2 from './CountBy2';
import CountMinusBtn from './CountMinusBtn';

function Counter() {
    const count = useSelector((state)=>state.counter.value);
  return (
    <div>current store.counter.value : {count}
        <CountBy2/>
        <CountMinusBtn/>
    </div>
  )
}

export default Counter