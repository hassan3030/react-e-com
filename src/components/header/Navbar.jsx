import { FaRegUser } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import {Link} from 'react-router-dom';

const Navbar = ({togle , setTogle}) => {
  return (
   <>

   {
    !togle ? (<div className="navbar">
      <ul className="nav-list">
        <li className="nav-item"> <MdOutlineClear id="close" onClick={()=>{setTogle(true)}}/></li>
        <Link to='/' className="nav-item">الصفحه الرئیسیه</Link>
        <Link to='/product' className="nav-item">الإلكترونيات و الموبايلات</Link>
        <li className="nav-item">المنزل و المطبخ</li>
        <li className="nav-item">رجاليه</li>
        <li className="nav-item">نسائیه</li>
        <li className="nav-item">تسجيل الدخول <FaRegUser/></li>
       
      
  
      </ul>
    </div>):''
   }
   
   </>
    
  )
}

export default Navbar;