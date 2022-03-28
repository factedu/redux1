import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import productReducer from '../features/products/productSlice';
import orderReducer from '../features/order/orderSlice';

export default configureStore({
    reducer:{
        menu:menuReducer,
        product:productReducer,
        order: orderReducer,
    }
})

