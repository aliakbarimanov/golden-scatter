import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartListData: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const existingProduct = state.cartListData.find(item => item.data.id === action.payload.data.id);

            if (existingProduct) {

                const updatedData = state.cartListData.filter(item => {

                    if (item.data.id === existingProduct.data.id) {
                        return { ...existingProduct, quantity: existingProduct.data.quantity++ };
                    } else {
                        return item;
                    }
                })
                state.cartListData = updatedData;
            } else {
                state.cartListData = [...state.cartListData, { ...action.payload, quantity: 1 }];
            }
        },

        removeFromCart: (state, action) => {

            if (action.payload.quantity > 1) {
                const availableData = state.cartListData.filter(item => {
                    if (item.data.id === action.payload.data.id) {
                        return { ...item, quantity: item.quantity-- };
                    } else {
                        return item;
                    }
                });
                state.cartListData = availableData;
            } else {
                const updatedData = state.cartListData.filter(item => item.data.id !== action.payload.data.id);
                state.cartListData = updatedData;
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;