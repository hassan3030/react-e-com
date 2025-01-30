import { useState , useEffect } from 'react'
import  Banner  from '../../components/banner/Banner';
import  Categories  from '../../components/categories/Categories';
import  SpecialOffer  from '../../components/offer/SpecialOffer';
import  SliderMain  from '../../components/slider/SliderMain';
import Brand from '../../components/brands/Brand';
// import {SingleProduct} from '../../pages/single-product/SingleProduct';
// import {products} from '../../data/products'
import HeadingTitle from '../../components/heading-title/HeadingTitle'
import { useSelector, useDispatch } from 'react-redux' // note from react-redux not RTK
// import {  setProducts  } from "../../redux/slices/productSlice";
import { getAllProducts } from '../../redux/apiCalls/productApiCall';
import Spinner from '../../components/spinner/Spinner';

export const Home = () => {

  const { products , loading } = useSelector((state) => state.product ) // to select any state in store
  const dispatch = useDispatch() // fire action 
 
  useEffect(() => { dispatch(getAllProducts()) },[])
    // const laptops = products.filter(p => {p.isLaptop = true});
    // const mobiles = products.filter(p => {p.isLaptop = false});
    // console.log('mobiles : ', mobiles);
  // console.log('products : ', products);
  if (loading) return <Spinner/>;
  return (
    <div>
      {/* <SingleProduct/> */}
        <Banner/>
     <Categories/>
     <SpecialOffer/>
     

     <HeadingTitle title="الجدید من اللابتوبات" />
      <SliderMain data={products} />
      <HeadingTitle title="الجدید من الجوالات" />
      <SliderMain data={products} />
     <Brand/>
    </div>
  )
}
