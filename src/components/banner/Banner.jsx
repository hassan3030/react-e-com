import house from '../../assets/images/banners/house.png'
import shose from '../../assets/images/banners/shoes.png'
import  "./banner.css";

  const Banner = () => {
  return (
    <div>
        <div className="banner">
            <div className="">
                <img src={house} alt="Banner"  />
            </div>
            <div className="">
            <img src={shose} alt="Shose"  />
            </div>
        </div>


    </div>
  )
}
export  default Banner;