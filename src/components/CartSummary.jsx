import React, { useMemo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const CartSummary = () => {
    const orders = useSelector((state)=>state.order.orders);
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        console.log(orders);
        if(!orders)return;
        let sum =0;
        orders.map(item=>{
            sum += item.price*item.count
        });
        setTotal(sum);
    },orders);
    return (
        <footer className="sticky top-[100vh] bg-yellow-300 p-4 rounded-xl justify-center justify-items-center text-center flex flex-col">
            <div className='font-extrabold'>
                View Basket
            </div>
            <div className='font-extrabold'>
                £ {total}/ {orders.length}
            </div>
        </footer>
    )
}

export default CartSummary