import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "selectedCategory":1,
    "selectedSubcategory":7,
    "categories": [
        {
            "id": 1,
            "name": "DRINKS",
            "parent": null
        },
        {
            "id": 2,
            "name": "FOOD",
            "parent": null
        },
        {
            "id": 3,
            "name": "SNACKS",
            "parent": null
        },

        {
            "id": 4,
            "name": "starters",
            "parent": 2
        },
        {
            "id": 5,
            "name": "Burgers",
            "parent": 2
        },
        {
            "id": 6,
            "name": "ClassicMains",
            "parent": 2
        },
        {
            "id": 7,
            "name": "Beers",
            "parent": 1
        },
        {
            "id": 8,
            "name": "SoftDrinks",
            "parent": 1
        },
        {
            "id": 9,
            "name": "Vodka",
            "parent": 1
        },
        {
            "id": 10,
            "name": "Crisps",
            "parent": 3
        }
    ]
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        selectCategory: (state,action) => {
            state.selectedCategory = action.payload
        },
        selectSubcategory: (state,action) => {
            state.selectedSubcategory = action.payload
        }
    }
});

export const { selectCategory, selectSubcategory } = menuSlice.actions;

export default menuSlice.reducer;