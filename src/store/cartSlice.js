import { useRadioGroup } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
          const itemInCart = state.cart.find(item => item.id === action.payload.id) 
          if(itemInCart){
            itemInCart.quantity ++
          }
          else {
            state.cart.push({
                ...action.payload,
                quantity:1
            })
          }
        },
        removeItem : (state,action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload)
            state.cart =  removeItem
        },

        incrementQuantity: (state,action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            item.quantity ++
        },

        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if(item.quantity === 1){
               removeItem()
            }
             else {
                item.quantity--
             }
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchProducts.fulfilled, (state,action)=>{
    //         state.cart(action.payload)
    //     })
    // }
})


// const fetchProducts = createAsyncThunk(
//     'fetchProducts',
//     async() =>{
//         const response = await userApi.fetchProducts()
//         return response.data
//     } 
// )

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    removeItem,
    decrementQuantity,
    incrementQuantity
} = cartSlice.actions

