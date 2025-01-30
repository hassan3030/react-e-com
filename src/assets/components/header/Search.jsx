import {Link} from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";


const Search = () => {
   let  localStorageCartItems = JSON.parse(localStorage.getItem("cartItems"));


  return (
    <div className="search">
    <div className="search-box">
      <input
        type="search"
        className="search-input-box"
        name=""
        id=""
        placeholder="ماذا تريد"
      />
      <button className="btn-search">إبحث</button>
    </div>
    <Link to='/cart' className="cart-box">
      سلة التسوق <MdOutlineShoppingCart className="icon-catr" />{" "}
       
        
        { 
          localStorageCartItems.length > 0 && ( <span>{localStorageCartItems.length}</span>)
        }
    </Link>
  </div>
  )
}

export default Search;