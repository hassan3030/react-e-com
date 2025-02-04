import{ cartActions }  from "../slices/cartSlice";


export function addToCart(newItem) {
  return (dispatch, getState) => {
    // getState built in func to get store state 
    try {
      // send request to server and get response

      dispatch(cartActions.addItemToCart(newItem));
      const {cartStore} = getState();
      localStorage.setItem("cartItems", JSON.stringify(cartStore.cartItems));

    } catch (error) {
      console.log(error);
    }
  };
}

// Remove From Cart
export function deleteFromCart(id) {
    return (dispatch , getState) => {
      try {
        // send request to server and get response
  
        dispatch(cartActions.deleteItemFromCart(id));
        const {cartStore} = getState();
        localStorage.setItem("cartItems", JSON.stringify(cartStore.cartItems));
  
      } catch (error) {
        console.log(error);
      }
    };
  }
