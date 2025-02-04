import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from "./slices/productSlice";
import { cartReducer } from "./slices/cartSlice";

 const store = configureStore({
     reducer: {
         product: productReducer, //  product is your name to use in comp as useSelector()
         cartStore :cartReducer,
  },
 })

export default store;