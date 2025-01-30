import { LuPhone } from "react-icons/lu";
import { FaLandmark } from "react-icons/fa";
import { MdOutlineClearAll } from "react-icons/md";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";
 const MainHeader = ({togle , setTogle}) => {
  return (
    <div className="mian-header">
    <Link to='/' className="right-header">
      {" "}
     <FaLandmark /> تسوق{" "}
    </Link>
    <div className="middle-header"> مرحبا بك في تسوق </div>
    <div className="left-header">
      010-216-203-97 
      <LuPhone />
    </div>
    <div className="close-open">
{
  togle ? <MdOutlineClearAll id="open" onClick={()=>{setTogle(false)}}/> : <MdOutlineClear id="close" onClick={()=>{setTogle(true)}}/>
}
    </div>
  </div>
  )
}
export default MainHeader;