import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [],
}

export const cartSlice = createSlice({
  name: 'cart', 
  initialState,
  reducers: { 
          addItemToCart: (state , action) => {
          //   state.products = action.payload
          const newItem = action.payload;
          const isItemExistInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
          );
          if (isItemExistInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id ? newItem : item
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
          
    },
  deleteItemFromCart: (state , action) => {
        state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
})

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export { cartReducer, cartActions };

