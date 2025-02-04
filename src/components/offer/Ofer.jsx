import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {  useDispatch } from 'react-redux' 
import { addToCart } from './../../redux/apiCalls/cartApiCall';


 const Ofer = ({offer}) => {
  const discount = offer.price - (offer.discount * offer.price)/100;
   const [imageOffer, setImage] = useState(offer.firstImage)
   
    const dispatch = useDispatch() 
   // add to cart 
   const addToCartHandeler = () => { 
    dispatch(addToCart({
      id: offer?.id,
      quantity: 1,
      price: offer?.price,
      title: offer?.title,
      image: offer?.images[0]
    }))
  }

    return (
      <>
      <div class="card-ofer">
        <div class="card__title">
          {/* <div class="icon">
            <a href="#"><i class="fa fa-arrow-left"></i></a>
          </div> */}
          <h3>خصم  {offer.discount} % </h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <p class="sub">{offer.title}</p>
              <p class="price">${offer.price} <span id="old-price"> ${discount}</span></p>
            </div>
            <div class="image">
              <img src={imageOffer} alt="firstImage"
              
              onMouseOver={()=>{setImage(offer.secondImage)}}
              onMouseLeave={()=>{setImage(offer.firstImage)}}
              />
            </div>
          </div>
          <div class="half">
            <div class="description">
              {/* <p>iditate perferendis esse numquam magni.</p> */}
            </div>
            <span class="stock"><i class="fa fa-pen"></i>موجد بالمخزن</span>
            <div class="reviews">
              <ul class="stars">
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><CiStar/></li>
              </ul>
              <span> ( {offer.rating} تقييم ) </span>
            </div>
            <Link to={`/special-offer-page/${offer.id}`} class="view">
          شاهد المزيد ...
          </Link>
          </div>
        </div>
        <div class="card__footer">
          <div class="recommend">
            <p>Recommended by</p>
            <h3>HASSAN HAMDI</h3>
          </div>
          <div class="action">
            <button type="button" onClick={()=>{addToCartHandeler()}}>اضف الي السلة</button>
          </div>
        </div>
      </div>  
      </>
    )
  }

  export default Ofer;