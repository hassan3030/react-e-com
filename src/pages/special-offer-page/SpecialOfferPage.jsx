import { useEffect, useState } from "react"; 
import "./special-offers-page.css";
// import { Link } from 'react-router-dom';
import { specialOffers } from '../../data/special-offers'
import Rating from "../../components/rating/Rating";
import { useParams } from 'react-router-dom'
import ProductDescription from "../single-product copy/ProductDescription";
import {  useDispatch } from 'react-redux' 
import { addToCart } from './../../redux/apiCalls/cartApiCall';
 

export const SpecialOfferPage = () => {
  const dispatch = useDispatch() 

  

  const {id} =  useParams()
  const [product, setProduct] = useState(specialOffers.find(p => p.id === +id))
  // parseInt(id) = +id 
  const {images , title , rating ,reviews , price , discount  } = product;
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const calculatedDiscount = price - (discount * price) / 100;

  // add to cart 
  const addToCartHandeler = () => { 
    dispatch(addToCart({
      id: id,
      quantity: quantity,
      price: price,
      title: title,
      image: images[0]
    }))
  }
  useEffect(() => { window.scrollTo(0,0)})
  return (
    <>
    <div className="special-offers-page">
      <div className="special-offers-page-img-wrapper">
        <img
          src={images[imageIndex]}
          alt=""
          className="special-offers-page-img"
        />
        <div className="special-offers-page-select">
          {images.map((img, index) => (
            <img
              onClick={() => setImageIndex(index)}
              className="select-img"
              key={index}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="special-offers-page-info">
        <h3 className="special-offers-page-title">{title}</h3>
        <Rating rating={rating} reviews={reviews} />
        <div className="special-offers-price">
          <b className="special-offers-item">${price}</b>
          <b className="special-offers-final-price-item">
            ${calculatedDiscount}
          </b>
        </div>
        <div className="special-offers-add-to-cart">
            <div>الکمیه</div>
            <input value={quantity} onChange={e => setQuantity(e.target.value)} type="number" min="1" max="10" />
            <button 
              onClick={() => { addToCartHandeler()}} 
            className="add-to-cart-btn">إضافه الی سله التسوق</button>
          </div>
      </div>
    </div>
    <ProductDescription/>

    </>
  )
}
