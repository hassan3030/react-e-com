import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  product: null,
  loading : false,
}

export const productSlice = createSlice({
  name: 'product', // this name to deal with store => product + store 
  initialState, //  initial State value 
  reducers: { // container to all actions 
          setProducts: (state , action) => {
          state.products = action.payload
          // payload => is object that contain data and give it to state.
          // state => refer to the initialState .
          //   
    },
  setProduct: (state , action) => {
          state.product = action.payload
          // payload => is object that contain data and give it to state.
          // state => refer to the initialState .
          //   
    },
  setLoading: (state) => {
          state.loading = true
    },
  clearLoading: (state) => {
          state.loading = false
    },
  },
})

const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export { productReducer, productActions };


// export const { setProducts } = productSlice.actions
// // destructing

// const productReducer = productSlice.reducer;
// export default productReducer
// has name productReducer in store.js
// or
// const productReducer = productSlice.reducer;

