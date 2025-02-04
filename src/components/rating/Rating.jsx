import "./rating.css";
import { FaStar } from "react-icons/fa";
const Rating = ({rating,reviews}) => {
  return (
    <div className="rating-wrapper">
      <b className="rating">
        {rating}  <FaStar />
      </b>
      <span>{reviews} تقییمات</span>
    </div>
  );
};

export default Rating;
