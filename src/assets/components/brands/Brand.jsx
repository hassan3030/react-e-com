
import {brands} from '../../data/brands'
import './brand.css'
const Brand = () => {
  return (
    <>
    <h2 id='title'>تسوق حسب الماركة</h2>
    <div className='brand-wrapper'>
        {brands.map((brand)=> {
      return (
           <div key={brand.id} className="brand-card">
      <img src={brand.image} alt={brand.title}  />
</div>
      )
    })}

    </div>
    </>
    
  )
}

export default Brand