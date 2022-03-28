import React from 'react'
import { v4 } from "uuid";
import { useDispatch } from 'react-redux'
import { addItem } from '../features/order/orderSlice'
import { itemCounter } from '../features/products/productSlice'
import Button from './Button'
import ExtraOption from './ExtraOption'
import Varients from './Varients'

const ModalProduct = ({ item, setOpen }) => {
    const dispatch = useDispatch();
    const handleButtonClick = (value) => {
        dispatch(itemCounter(value));
    }
    const addToOrder = (item) => {
        const prod = JSON.parse(JSON.stringify(item));
        prod.id = v4();
        dispatch(addItem(prod));
        setOpen(false);
    }
    return (
        <div className='p-4'>
            <div>
                <div className='text-xl font-extrabold'>
                    {item.name}
                </div>
                <div className='text-sm'>
                    {item.description}
                </div>
                <div className='h-1 my-4 bg-slate-200'></div>
            </div>
            {item.variants && <div>
                <div className='text-black font-extrabold'>
                    Size
                </div>
                <div>
                    {item.variants && item.variants.map(v => {
                        return (
                            <div>
                                <Varients key={v.name} item={v} bgColor={v.name === item.selectedSize ? 'bg-yellow-400' : 'bg-white-200'} />
                            </div>
                        )
                    })}
                    <div className='h-1 my-4 bg-slate-200'></div>
                </div>
            </div>}
            
            {item.extras &&<div>
                <div className='text-black font-extrabold'>
                    Select Options
                </div>
                <div>
                    {item.extras && item.extras.map(v => {
                        return (
                            <ExtraOption key={v.name} item={v} isSelected={false} />
                        )
                    })}
                    <div className='h-1 my-4 bg-slate-200'></div>
                </div>
            </div>}
            <div className='flex flex-row justify-center'>
                <Button onClick={() => { handleButtonClick(-1) }} title="-" active={true} />
                <Button title={item.count} active={false} />
                <Button onClick={() => { handleButtonClick(1) }} title="+" active={true} />
            </div>
            <div className='flex flex-row justify-center'>
                <Button onClick={() => {
                    addToOrder(item);
                }} title="Add to order" active={true} />
            </div>
            {/* <pre>
                {JSON.stringify(item, null, 2)}
            </pre> */}
        </div>
    )
}

export default ModalProduct