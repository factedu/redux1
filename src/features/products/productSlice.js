import { createSlice } from "@reduxjs/toolkit";
const product = require('./product.json')
const initialState = {
    products: product.products
};

console.log(initialState);
export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        selectSize: (state, action) => {
            const sProduct = JSON.parse(JSON.stringify(state.selectedProduct));
            sProduct.selectedSize = action.payload;
            state.selectedProduct = sProduct;
        },
        itemCounter: (state, action) => {
            const sProduct = JSON.parse(JSON.stringify(state.selectedProduct));
            if (sProduct.count < 1 && action.payload < 1) return;
            sProduct.count = sProduct.count + action.payload;
            state.selectedProduct = sProduct;
        }
    }
});

export const { selectProduct, selectSize, itemCounter } = productSlice.actions;

export default productSlice.reducer;