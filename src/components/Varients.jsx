import React from 'react'
import { useDispatch } from 'react-redux'
import { selectSize } from '../features/products/productSlice';

const Varients = ({ item, bgColor}) => {
    const dispatch = useDispatch();

    const handleSelect = ()=>{
        dispatch(selectSize(item.name));
    }
  return (
      <div onClick={handleSelect} className={` ${bgColor} flex flex-row justify-between border-4 border-yellow-200 m-2 p-2 rounded-lg font-extrabold cursor-pointer hover:bg-slate-200 `}>
        <div>
            {item.name}
        </div>
        <div>
              £ {item.price}
        </div>
    </div>
  )
}

export default Varients