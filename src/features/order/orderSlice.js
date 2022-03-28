import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    orders: []
};

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const orders = JSON.parse(JSON.stringify(state.orders));
            orders.push(action.payload);
            state.orders=orders;
        }
    }
});

export const { addItem } = orderSlice.actions;

export default orderSlice.reducer;