import './offer.css'
import {specialOffers} from '../../data/special-offers'
import  Ofer  from './Ofer'
import { FaRegClock } from "react-icons/fa";

const {id , title ,firstImage , secondImage ,price , discount , rating , reviews} = specialOffers
export const SpecialOffer = () => {
  return (
    <div className="special-offer">
        <h2>عروض کبیره للیوم <span > <FaRegClock id='FaRegClock'/> ل 24  ساعه بس </span> </h2>
<div className='offer-wrpper'>
        {specialOffers.map((offer)=> {
      return (
           
           
        <Ofer key={offer.id}  offer={offer}/>

      )
    })}
    </div>

    </div>
    
  )
}
export default SpecialOffer;