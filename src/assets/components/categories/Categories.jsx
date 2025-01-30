import './categories.css'
import {categories} from '../../data/category'
// import { useState } from 'react'


 const Categories = () => {
    // const [cat , setCat] = useState(categories||[])
  return (
    <div className="categories">
       
{categories.map((cat)=> {
      return (
           <div key={cat.id} className="card">
  <img src={cat.image} alt={cat.title}  />
  <div className="container">
    <h4><b>{cat.title}</b></h4> 
  </div>
</div>
      )
    })}
    </div>
  )
}
export  default Categories