import{ productActions }  from "../slices/productSlice";

// Fetch All Products 
// old in home

//  const getProduct = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/products');
//       const data = await response.json();
//       setProducts(data)
//     }
//     catch { 
//       document.write("server not found ")
//     }
//   }

export function getAllProducts() {
  return  async (dispatch) => { 
    try {
      dispatch(productActions.setLoading())
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      dispatch(productActions.setProducts(data))
      dispatch(productActions.clearLoading())
      
  // productActions.setProducts(data); why not work
      // data = payload 
    }
    catch { 
      document.write("server not found ")
      dispatch(productActions.clearLoading())
    }
  }
 }
  
 export function getSingleProduct(productId) {
   return async (dispatch) => { 
    // dispatch special func to promise 
     try {
   dispatch(productActions.setLoading())
      const response = await fetch(`http://localhost:5000/products/${productId}`);
      const data = await response.json();
       dispatch(productActions.setProduct(data))
       dispatch(productActions.clearLoading())
    }
    catch { 
       document.write("server not found ")
       dispatch(productActions.clearLoading())
    }
  }
 }
  