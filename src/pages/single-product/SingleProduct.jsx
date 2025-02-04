import React from 'react'
import { useParams } from "react-router-dom" ;
import { useEffect, useState } from "react"  ;
import Rating from "../../components/rating/Rating";
import ProductDescription from '../single-product copy/ProductDescription';
import { useSelector, useDispatch } from 'react-redux' // note from react-redux not RTK
import { getSingleProduct } from '../../redux/apiCalls/productApiCall';
import Spinner from '../../components/spinner/Spinner';
import './single-product.css'
import { addToCart } from './../../redux/apiCalls/cartApiCall';

export const SingleProduct = () => {
  const { product , loading } = useSelector((state) => state.product ) // to select any state in store
  const dispatch = useDispatch() // fire action
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => { dispatch(getSingleProduct(id)); window.scrollTo(0,0) }, [])
  
  // add to cart 
  const addToCartHandeler = () => { 
    dispatch(addToCart({
      id: id,
      quantity: quantity,
      price: product?.price,
      title: product?.title,
      image: product?.image
    }))
  }
  
   if (loading) return <Spinner/>;
  return (
    <div className="single-product"> 
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">${product?.price}</div>
          <div className="product-add-to-cart">
            <div>الکمیه</div>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button 
              onClick={() => {addToCartHandeler() }} 
            className="add-to-cart-btn">
              إضافه الی سله التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription/>
    </div>
  )
}
