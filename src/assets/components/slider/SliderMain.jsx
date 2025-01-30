import  './slider.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

 const SliderMain = ({data}) => {
  const [slideIndex, setSlideIndex] = useState(0);
 

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="slider-container">
    <button
      disabled={slideIndex === -data.length}
      onClick={() => handleClick("left")}
      className="bi bi-chevron-left arrow-left"
    >
      <FaArrowAltCircleLeft style={{width:'100%' , height:'100%'}}/>
    </button>
    <div
      style={{ transform: `translate(${slideIndex * -250}px)` }}
      className="slider-wrapper"
    >
      {data.map((item) => (
        <Link to={`/product/${item.id}`} className="slide" key={item.id}>
          <img className="slide-image" src={item.image} alt={item.title} />
          <h3 className="slide-title">{item.title}</h3>
          <Rating rating={item.rating} reviews={item.reviews} />
          <div className="slide-price">${item.price}</div>
        </Link>
      ))}
    </div>
    <button
      disabled={slideIndex === 1}
      onClick={() => handleClick("right")}
      className="bi bi-chevron-right arrow-right"
    >
     <FaArrowAltCircleRight style={{width:'100%' , height:'100%'}}/>
    </button>
  </div>
  )
}
export default SliderMain ;