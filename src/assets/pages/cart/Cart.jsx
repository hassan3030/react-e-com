import React, { useEffect } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import {  useDispatch } from 'react-redux' 
import { deleteFromCart } from '../../redux/apiCalls/cartApiCall';
import { Link } from 'react-router-dom';
import './cart.css'

export const Cart = () => {
  useEffect(() => {  window.scrollTo(0,0)})
   let  localStorageCartItems = JSON.parse(localStorage.getItem("cartItems"));
  const dispatch = useDispatch() 
  return localStorageCartItems.length < 1 ? (
    <div className="empty-cart">
        <h1>سله التسوق الخاصه بك فارغه</h1>
        <p>لا یوجد سلع</p>
        <Link className="empty-cart-link" to="/products">
            صفحه السلع
        </Link>
    </div>
  ) : (
    
    <section className="cart">
      <h1 className="cart-title">سله التسوق</h1>
    <div className="cart-wrapper">
      <div className="cart-items">
        {localStorageCartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-img-wrapper">
              <img
                className="cart-item-img"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-quantity">
                الکمیه:
                <span>{item.quantity}</span>
              </div>
              <div className="cart-item-price">
                السعر:
                <span>{(item.price * item.quantity).toFixed(2)}$ </span>
              </div>
              <i
                onClick={() => { dispatch(deleteFromCart(item.id))}}
                className="bi bi-trash fill cart-item-delete-icon"
              > <RiDeleteBin6Line/></i>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-summary-text">
          <i className="bi bi-check-circle-fill"></i>
          جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
          التفاصیل
        </div>
        <div className="cart-summary-total">
          المجموع:
          <span>
            {localStorageCartItems
              .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
              .toFixed(2)}
              $
              
              {/* 
              acc => storage loop in array 
              cur => current value 
              o => initial value for acc
               */}
          </span>
        </div>
        <button className="cart-summary-btn">تابع عملیات الشراء</button>
      </div>
    </div>
        </section>

  )
}
